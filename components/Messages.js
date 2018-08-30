import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList} from 'react-native';
import { Container, Content, Header, Footer, FooterTab, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox, Separator } from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';

 export default class Messages extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  static navigationOptions = {
    title: 'Messages',
    headerLeft: null,
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

  componentDidMount(){
  }

  render(){
    const { navigate } = this.props.navigation;


    return(

      <Container>
        <Content>
          <Text>Messages</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={
                () => navigate('Home')
              }
            >
              <Text>Profile</Text>
            </Button>
            <Button
              onPress={
                () => navigate('Search')
              }
            >
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
  buttons: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexWrap: 'wrap', 
    flexDirection:'column',
   },
});
