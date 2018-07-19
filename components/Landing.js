import React, { Component } from 'react';
import Login from "./Login";
import { Text, View, ImageBackground, StyleSheet, StatusBar, Image, Alert} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H1, H2, H3 } from 'native-base';
import * as firebase from 'firebase';

export default class Landing extends Component{
  constructor(props){
    super(props);
    this.state={
      username:null,
      user:null,
      userphoto:null,
      firstname:null,
      lastname:null
    }
  }


  componentDidMount(){

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
      }
    })
  }

  async loginWithFacebook(){
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('2085907415001272', {permissions:['public_profile', 'email']})
    if(type == 'success'){
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large),first_name,last_name`);
      const jresponse = await response.json();
      this.setState({userphoto:jresponse.picture.data.url, firstname:jresponse.first_name, lastname:jresponse.last_name}, () => {
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
        firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(){
          userId = firebase.auth().currentUser.uid;
          if (userId) {
            firebase.database().ref('users').child(userId).child('firstname').set(jresponse.first_name);
            firebase.database().ref('users').child(userId).child('lastname').set(jresponse.last_name);
            firebase.database().ref('users').child(userId).child('userphoto').set(jresponse.picture.data.url);
          }
        }).catch((error)=>{
          console.log(error)
        });
      });
      
    }
  }
  


  render(){
    const { navigate } = this.props.navigation;

    return(
      <Container>
      <ImageBackground
       style={{flex:1, width: window.width, 
        height: window.height}}
      source={require('../img/music.jpg')}>
      <View style={styles.overlay}>
      <Left />
      <Body>
      <H1 style={styles.title}> Jammate </H1>
      </Body>
      <Right />
      <Button
      style={{alignSelf:'center', margin:20}} 
      success
      rounded
      active
      onPress={
        () => this.loginWithFacebook().then(function(){
          navigate('Home') 
        })
      }
      >
      <Image
       source={require('../img/facebook_login.png')}
       style={{flex:1, height: '100%', width: '100%'}}

      />
      </Button>
      </View>
      </ImageBackground>
      </Container>
      )
  }

}

const styles = StyleSheet.create({
  title:{
    fontSize:100, paddingTop:140, marginBottom:50, fontFamily:'Noteworthy',
    color:'#007bff', fontWeight:'300', alignSelf:'auto'
  },
    statements: {
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
    fontSize: 30,
  },
  advice: {
        fontWeight: 'bold',
    color: 'rgba(250,250,240,.8)',
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,.25)',
    height: window.height,
    width: window.width,
    flex:1
  }
});

