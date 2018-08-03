import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox } from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';

 export default class ProfileEdit extends Component{
  constructor(props){
    super(props);
    this.state={
      toggle:false,
      userzip:null,
      instruments:null,
      genres:null
    }
  }

  _onPress(){
    let newState = !this.state.toggle;
    this.setState({
      toggle:newState
    })
  }

  _onStateChange(newState){
    this.setState({toggleState:value})
  }

  static navigationOptions = {
    title: 'Edit Profile',
    headerStyle: {
      backgroundColor: '#007bff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  checkBoxTest(){
    alert('value changed')
  }

  componentWillMount(){
      let that = this;
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/users/'+ userId).child('zipcode').once('value').then((function(snapshot){
      let userzip = (snapshot.val() || '');
      that.setState({
        userzip:userzip
      })
      }));
  }

  componentDidMount(){
  }

  render(){
        const { navigate } = this.props.navigation;
        const { toggle } = this.state
        const textValue = toggle?"On":"Off";
        const buttonBg = toggle?"dodgerblue":"white";
        const textColor = toggle?"white":"black";

        let items = [
        'Guitar',
        'Bass',
        'Drums',
        'Vocals (aggressive)',
        'Vocals'
        ]


    return(

      <Container>
          <H3>Your current location: </H3> 
          <Text> {this.state.userzip} </Text>
          <H3>Instruments You Play: </H3>

          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Guitar</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Bass</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Drums</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="red"/>
            <Body>
              <Text>Vocals(Aggressive)</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="red"/>
            <Body>
              <Text>Vocals</Text>
            </Body>
          </ListItem>
          


          <Grid>
            <Row>
          <H3>Genres You Play: </H3>
            </Row>
          </Grid>
      </Container>

      )
  }

}

const styles = StyleSheet.create({
  buttons: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexWrap: 'wrap', 
    flexDirection:'column',
   },
});
