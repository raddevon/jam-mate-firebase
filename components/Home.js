import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab} from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';


export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      username:firebase.auth().currentUser.displayName,
      user:firebase.auth().currentUser,
      userphoto:firebase.auth().currentUser.photoURL,
      uid:firebase.auth().currentUser.uid
    }
  }
  
  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#007bff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount(){
    let that = this;
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/'+ userId).child('userphoto').once('value').then(function(snapshot) {
    let userphoto = (snapshot.val() || '');
    that.setState({userphoto:userphoto});
    console.log(userphoto)
  // ...
    });
  // Alert.alert('Successfully Logged In!')
  // console.log('the new currentuser', this.state.user)
  // console.log('state being saved for current user photo', this.state.userphoto)
  // console.log('first name and last name prop', this.props.firstname, this.props.lastname)
  }

  render(){
        const { navigate } = this.props.navigation;


    return(
      <Container>
       <Grid>
            <Row>
            <Text style={{fontSize:25}}>Hi {this.state.username} !</Text>
            <Image
              style={{width: 220, height: 250, borderRadius: 150/2, alignSelf:"center", margin:3}}  
              source={{uri:this.state.userphoto}}
            />
            </Row>
            <Text> Your UID is: {this.state.uid}</Text>
            <Row style={{ backgroundColor: '#2E0094'}}>
            <Text style={styles.helpText}>Genres To Play</Text>
            <Text>Instruments</Text>
            </Row>
        </Grid>
          <Footer>
          <FooterTab>
            <Button 
            onPress={
              () => navigate('ProfileEdit')
            }
            >
              <Text>Profile</Text>
            </Button>
            <Button>
              <Text>Search</Text>
            </Button>
            <Button>
              <Text>Messages</Text>
            </Button>
            <Button>
              <Text>somethingelse</Text>
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

