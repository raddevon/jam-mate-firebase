import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail, Ul, Li} from 'native-base';
 import FooterTabs from './Footer';
 import SearchProfilesCard from './SearchProfilesCard';
 import SearchProfilesGenres from './SearchProfilesGenres';
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';

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
      myObj['userid'] = userSnapshot.key
      myObj['data'] = userSnapshot
      newList.push(myObj)
      })
      that.setState({
        usersArray: newList,
      })
    })
  }

 _getArray=(users)=>{
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
        <Button
          onPress={
          () => navigate('Home')
          }
        >
          <Text>Profile</Text>
        </Button>
        <Button>
          <Text>Search</Text>
        </Button>
        <Button
          onPress={
            ()=> navigate('Messages')
          }
        >
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


