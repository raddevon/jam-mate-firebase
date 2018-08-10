import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterTabs from './Footer';
 import SearchProfilesInstruments from './SearchProfilesInstruments';
 import SearchProfilesGenres from './SearchProfilesGenres';
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
      {77777:'rock'},
      {77776:'roll'},
      {77775:'country'}
    ]
  },
  {
  name:'sally test2',
  instruments:[
    {999111:'bass'},
    {111999:'tamborine'}
  ],
  genres:[
    {66665:'bluegrass'},
    {66664:'polka'}
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
    let instrumentArray = Object.values(user.instruments)

    var mappedInstruments = instrumentArray.map( function(instrument, index) {
        return <Text key={index}>{instrument}</Text>;
    })

    users1[0].instruments.forEach(function(itemObj, i){
    Object.keys(itemObj).forEach(function(indiviualItem, j){
    console.log(i+j+1, itemObj[indiviualItem]);
  });
});

    console.log('instruments:', Object.keys(users1[0].instruments))

    return(
      <Container>
      <Content>
      <H2> Search Page </H2>
      <FlatList 
              data={users1}
              key='temp'
              renderItem={({item, index}) => 
            <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
              <SearchProfilesInstruments instruments={item.instruments} name={item.name} key={'temp'} />
              <SearchProfilesGenres genres={item.genres} key={'temporary'}/>
                <Text style={{marginBottom:5, marginTop:20}}>additional text</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
          </List>
    
              }
              keyExtractor={(item, index) => 'S'+ index.toString()}
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


