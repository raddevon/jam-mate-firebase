import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList} from 'react-native';
import { Container, Content, Header, Footer, FooterTab, Form, Icon, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox, Separator } from 'native-base';
 import FooterNav from './FooterNav';
 import * as firebase from 'firebase';
 import { GiftedChat } from 'react-native-gifted-chat';


 export default class Messages extends Component{
  constructor(props){
    super(props);
    this.state={
      messages: [],
      messagers: [],
    }
    _getMessages = () =>{
      console.log(this.state.messages[0].message)
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

  componentWillMount() {
        this.setState({
      messages: [
        {
          message: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    // this.setState(previousState => ({
    //   messages: GiftedChat.append(previousState.messages, messages),
    // }))
  }

  componentDidMount(){
    _getMessages()
  }


  render(){
    const { navigate } = this.props.navigation;

    return(
      <Container>
        <Content>

        </Content>

        <Footer>
          <FooterTab>
            <Button
              onPress={
                () => navigate('Home')
              }
            >
            <Icon name="contact" />
              <Text>Profile</Text>
            </Button>
            <Button
              onPress={
                () => navigate('Search')
              }
            >
            <Icon name='people' />
              <Text>Search</Text>
            </Button>
            <Button>
            <Icon name="chatboxes" />
              <Text>Messages</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

      )
  }

}

Messages.defaultProps={
  messages:[]
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
