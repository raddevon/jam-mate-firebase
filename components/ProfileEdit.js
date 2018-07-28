import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row} from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';

 export default class Home extends Component{
  constructor(props){
    super(props)
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

  render(){
        const { navigate } = this.props.navigation;

    return(

      <Container>
          <H3>Some title</H3>
      </Container>

      )
  }
}