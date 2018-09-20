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

  componentWillMount(){

  }

  componentWDidMount(){

  }

  componentWillUnmount(){

  }

  render(){
    const { navigation } = this.props;
    const username = navigation.getParam('name', 'name-goes-here');
    const messages = navigation.getParam('messages', null)
    .filter((item, index, arr) => arr.indexOf(item.user) == index)
    .map((item => item.message))
    console.log('username passed?', username)
    console.log('messages passed?', messages)

    return(
      <Container>
        <Content>
        <FlatList 
                data={messages}
                extraData={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                  <List>
                  <ListItem>
                      <Text> {item} </Text>
                  </ListItem>
                </List>    
                }
        >
        </FlatList>
        </Content>
      </Container>
    )
  }
}