import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity, ScrollView} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterTabs from './Footer';
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';

export default class SearchProfilesGenres extends Component{
constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    let genreContainer = this.props.genres
    let genreArr = [];
    this.props.genres.forEach(function(itemObj, i){
      Object.keys(itemObj).forEach(function(individualItem, j){
        genreArr.push(itemObj[individualItem])
        console.log('heres your genrearr updated', genreArr)
  }
  )
});
    console.log('this should be checkpoint for instrumentArr', genreArr)

    return(
      <View>
      <Card>
            <CardItem>
              <Body>
      <FlatList
      data={genreArr}
      renderItem={({item, index})=>
      <List listKey={index}>
      <ListItem>
      <Text> {item} </Text>
 
      </ListItem>
      </List>
      }
      keyExtractor={(item, index) => 'G'+ index.toString()}

      >
      </FlatList>

              </Body>
            </CardItem>
          </Card>
      </View>

    )
  }
}