import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2 } from 'native-base';
 import * as firebase from 'firebase';


export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      username:firebase.auth().currentUser.displayName,
      user:firebase.auth().currentUser,
      userphoto:firebase.auth().currentUser.photoURL
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
  Alert.alert('Successfully Logged In!')
  console.log('the new currentuser', this.state.user)
  console.log('state being saved for current user photo', this.state.userphoto)
  console.log('first name and last name prop', this.props.firstname, this.props.lastname)
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <Text>Hi {this.state.username} !</Text>
        <Image
          style={{width: 150, height: 150, borderRadius: 150/2}}
          source={{uri:this.state.userphoto}}
          />
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

