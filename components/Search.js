import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterTabs from './Footer';
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';


var instruments1 = {
  instruments:[
    'guitar',
    'bass',
    'drums'
  ],
  genres:[
  'rock',
  'metal',
  'blues'
  ],
  };


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
    console.log('what is instruments1', instruments1)

    return(
      <Container>
      <Content>
      <H2> Search Page </H2>
      <FlatList 
              data={instruments1}
              renderItem={({item, index}) => 
            <Card>
              <CardItem>
                <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                <List>
                  <ListItem>
                  <Text>{item.instruments}</Text>
                  </ListItem>
                </List>
                </Body>
              </Left>
            </CardItem>
            
                </Card>          
              }
              keyExtractor={(item, index) => index}
              >
    </FlatList>

                    <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>

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


