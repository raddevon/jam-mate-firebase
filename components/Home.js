import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterNav from './FooterNav';
 import ProfileTop from './ProfileTop';
 import Instruments from './Instruments';
 import Messages from './Messages';
 import Genres from './Genres'
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';




export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      username:firebase.auth().currentUser.displayName || '',
      user:firebase.auth().currentUser || null,
      userphoto:firebase.auth().currentUser.photoURL || null,
      userzip:null,
      uid:firebase.auth().currentUser.uid,
      location: null,
      errorMessage: null,
      usercityobject: null,
      instrumentsList:[],
      genresList:[],
    }
  }
  
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerLeft: null,
    headerRight: (
      <TouchableOpacity
        onPress={
              () => navigation.navigate('ProfileEdit')
        }
      >
      <Icon name='menu' />
      <Text>Edit</Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#007bff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });


    _getCity = async () => {
      let that = this;
    Expo.Location.reverseGeocodeAsync(this.state.usercityobject).then(function(result){
      let reverseResult = result
      that.setState({ userzip: reverseResult[0].postalCode })
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref('users').child(userId).child('zipcode').set(reverseResult[0].postalCode)
    })
    .catch(function(error){
      console.log('there was an error :-(', error)
    });
  }

    _getLocationAsync = async () => {
    const { Location, Permissions } = Expo;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location })
    let thislat = this.state.location.coords.latitude
    let thislong = this.state.location.coords.longitude
    let usercityobject = {
      'latitude': thislat,
      'longitude': thislong,
    }
    this.setState({ usercityobject: usercityobject})
  };


 componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }
  componentDidMount(){
    let that = this;
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/'+ userId).child('userphoto').once('value').then((function(snapshot){
      let userphoto = (snapshot.val() || '');
      that.setState({userphoto:userphoto});
  // ...
    }));
    firebase.database().ref('/users/'+ userId).child('instruments').once('value').then((function(instruments){
      let jInstruments = instruments.toJSON()
      let instrumentList = []
      for (let key in jInstruments){
      instrumentList.push(jInstruments[key]);
    }
      that.setState(
        {instrumentsList:instrumentList}
      )
    }  
    ));
    firebase.database().ref('/users/'+ userId).child('genres').once('value').then((function(genres){
      let jGenres = genres.toJSON()
      let genreList = []
      for (let key in jGenres){
      genreList.push(jGenres[key]);
    }
      that.setState(
        {genresList:genreList}
      )
    }  
    ));

  }

  
    

  // Alert.alert('Successfully Logged In!')
  // console.log('the new currentuser', this.state.user)
  // console.log('state being saved for current user photo', this.state.userphoto)
  // console.log('first name and last name prop', this.props.firstname, this.props.lastname)
  

  render(){
    const { navigate } = this.props.navigation;
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }


    return(
      <Container>
       <Grid>
            <Row>
            <ProfileTop username={this.state.username} userphoto={this.state.userphoto} />
            </Row>
            <Row style={{ backgroundColor: '#72b4e0'}}>
              <Col>
                <Instruments instruments={this.state.instrumentsList} />
              </Col>
              <Col>
                <Genres genres={this.state.genresList}/>
              </Col>
            </Row>
        </Grid>
          <Footer>
             <FooterTab>
              <Button >
              <Icon name="contact" />
                <Text>Profile</Text>
              }
              </Button>
              <Button
              onPress={
                () => this._getCity().then(()=> navigate('Search'))
              }
              >
              <Icon name="people" />
                <Text>Search</Text>
              </Button>
              <Button
                onPress={
                () => navigate('Messages')
                }
              >
              <Icon name="chatboxes" />
                <Text>Messages</Text>
              </Button>
            </FooterTab>
        </Footer>


    </Container>
    )
  }
}

const styles = StyleSheet.create({
  helpText:{
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold',
    marginTop: 20,
    fontStyle:'italic',
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,.2)',
    height: window.height,
    width: window.width,
    flex:.5
  }
});

