import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterTabs from './Footer';
 import SearchProfiles from './SearchProfiles';
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';


var users1 = [
  {
    name:'bob test1',
    instruments:[
      {89789:'guitar'},
      {87123:'bass'},
      {87321:'drums'}
    ],
    genres:[
      {12345:'rock'},
      {54321:'metal'},
      {51423:'bluegrass'}
    ]
  },
  {
  name:'steve test2',
  instruments:[
  'bass',
  'tamborine'
  ],
  genres:[
  'funk ',
  'metal ',
  'blues ',
  ]
  }
]


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

    let user = users1[0];
    console.log('what does user look like', user)
    let instrumentArray = Object.values(user.instruments)
    console.log('instrumentArray looks like', instrumentArray)

    var mappedInstruments = instrumentArray.map( function(instrument, index) {
        console.log('this is the return of mappedInstruments', index, instrument)
        return <Text key={index}>{instrument}</Text>;
    })

    return(
      <Container>
      <Content>
      <H2> Search Page </H2>
      <FlatList 
              data={users1}
              renderItem={({item, index}) => 
            <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
              <SearchProfiles instruments={item.instruments} name={item.name}/>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
    
              }
              keyExtractor={(item, index) => index}
              >
    </FlatList>


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


