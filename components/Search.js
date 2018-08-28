import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail, Ul, Li} from 'native-base';
 import FooterTabs from './Footer';
 import SearchProfilesCard from './SearchProfilesCard';
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
      usersArray: []
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

  componentWillMount= () =>{
  }
  

  componentDidMount=()=>{
    let newList=[];
    let that = this;
    let ref = firebase.database().ref('/users/');
    ref.orderByKey().once("value").then(function(snapshot) {
      snapshot.forEach(function(userSnapshot){
      let myObj = {}
        console.log('userSnapShot', userSnapshot)
      myObj['userid'] = userSnapshot.key
      myObj['data'] = userSnapshot
      newList.push(myObj)
        console.log('how did the newList push end up?')
      })
      console.log('newList.push(snapshot)')
      console.log('things getting pushed?')
      that.setState({
        usersArray: newList,
      })
    })
  }
//     const results = {}
//     users.forEach(function(obj, idx){
//     console.log(obj, idx);
// })

//     console.log('messing with users instead of state', users)
//     console.log('looping through users data instruments', users.forEach((item=>
//       item.data.forEach((data=>
//         console.log('data instruments')
//       )
//       )
//     ))
//     )
    // console.log('Object.entries(this.state.usersArray).map(item => ({...item[1], key: item[0]}))');

    // console.log('users array state', this.state.usersArray)


 _getArray=(users)=>{
  console.log('what is users?', users)
  let results = [];

  // Loop through each user
  users.forEach(function(originalObj, idx){
    let obj = originalObj.data.toJSON();
    
    // Get the genres
    let genres = [];
    for (let key in obj.genres){
      genres.push(obj.genres[key]);
    }

    // Get the instruments
    let instruments = [];
    for (let key in obj.instruments){
      instruments.push(obj.instruments[key]);
    }

    // Add the result to the table
    results.push({
      userid: originalObj.userid,
      key: idx, 
      firstname: obj.firstname, 
      lastname: obj.lastname, 
      zipcode: obj.zipcode, 
      userphoto: obj.userphoto || 'http://temp.changeme.com', 
      genres: genres, 
      instruments: instruments});
  });

  return results;
}

  render(){
    const { navigate } = this.props.navigation;
    let users = this.state.usersArray
    var results = this._getArray(users);
    console.log('results is equal to', results);


    // users1[0].instruments.forEach(function(itemObj, i){
    //   Object.keys(itemObj).forEach(function(indiviualItem, j){
    //   console.log('i+j+1, itemObj[indiviualItem]');
    //   });
    // });
    // console.log('this.state.usersArray[0]')

    // console.log('object.keys(users1[0].instruments')
    // for (let key in this.state.usersArray[0]){
    //   console.log('trying to log instruments', key.instruments)
    //   console.log('key in usersArray', this.state.usersArray[key])
    //   for (deeper in this.state.usersArray[0]){
    //     console.log('this is deeper')
    //   }
    //   console.log('here is a key')
    // }

    return(
      <Container>
      <Content>
      <H2> Search Page </H2>
      <FlatList 
              data={results}
              extraData={results}
              keyExtractor={(item) => item.userid}
              renderItem={({item, index}) => 
            <List
              listKey={item.userid}
              >
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: item.userphoto }} />
              </Left>
              <Body>
              <Text>{item.userid}</Text>
              <Text>{item.firstname}</Text>

                <SearchProfilesCard general={item} instruments={item.instruments|| []} genres={item.genres||[]} name={item.firstname||[]} />

                <Text style={{marginBottom:5, marginTop:20}}>additional text</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
          </List>
    
              }
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


