import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterTabs from './Footer';
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';




export default class Search extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#007bff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  componentWillMount() {

  }
  
  componentDidMount(){

  }


  render(){
    const { navigate } = this.props.navigation;

    return(
      <Container>
      <Content>
      <H2> Search Page </H2>

      </Content>
          <Footer>
          <FooterTab>
            <Button >
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


