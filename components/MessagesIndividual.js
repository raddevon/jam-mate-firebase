import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList} from 'react-native';
import { Container, Content, Header, Footer, FooterTab, Form, Icon, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox, Separator } from 'native-base';
 import FooterNav from './FooterNav';
 import * as firebase from 'firebase';

 export default class Messages extends Component{
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    title: 'message to someone',
    headerStyle: {
      backgroundColor: '#007bff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render(){
    const { navigation } = this.props;
    const username = navigation.getParam('name', 'name-goes-here');
    console.log(username)
    return(
      <Container>
        <Content>
          <Text> {username} </Text>
        </Content>
      </Container>
    )
  }
}