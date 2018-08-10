import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity, ScrollView} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterTabs from './Footer';
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';

export default class SearchProfilesInstruments extends Component{
constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    let instrumentContainer = this.props.instruments
    let instrumentKeyArr = []
    console.log('this props instruments', this.props.instruments)
    let genreContainer = this.props.genres
    console.log('this props genres', this.props.genres)
    let instrumentArr = [];
    let genreArr = [];
    this.props.instruments.forEach(function(itemObj, i){
      Object.keys(itemObj).forEach(function(individualItem, j){
        instrumentKeyArr.push(individualItem)
        instrumentArr.push(itemObj[individualItem])
        console.log('in searchprofiles instrument arr', instrumentArr);
        console.log('in searchprofiles instrument key arr', instrumentKeyArr);
        console.log('heres your instrumentsarr updated', instrumentArr)
  }
  )
});    
    this.props.genres.forEach(function(itemObj, i){
      Object.keys(itemObj).forEach(function(individualItem, j){
        genreArr.push(itemObj[individualItem])
        console.log('in searchprofiles', i+j+1, itemObj[individualItem]);
        console.log('heres your genrearr updated', genreArr)
  }
  )
});
    console.log('this should be checkpoint for instrumentArr', instrumentArr)

    return(
      <View>
      <Card>
            <CardItem>
              <Body>
      <H3>{this.props.name}</H3>
      <FlatList
      data={instrumentArr}
      renderItem={({item, index})=>
      <List>
      <ListItem>
      <Text> {item} </Text>
 
      </ListItem>
      </List>
      }
              keyExtractor={(item, index) => 'i'+ index.toString()}
      >
      </FlatList>
      
              </Body>
      <Button ><Text>Message {this.props.name}</Text></Button>
            </CardItem>
          </Card>
      </View>

    )
  }
}