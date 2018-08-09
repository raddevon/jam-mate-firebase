import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity, ScrollView} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterTabs from './Footer';
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';

export default class SearchProfiles extends Component{
constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    let instrumentContainer = this.props.instruments
    let instrumentArr = [];
    this.props.instruments.forEach(function(itemObj, i){
    Object.keys(itemObj).forEach(function(individualItem, j){
      instrumentArr.push(itemObj[individualItem])
    console.log('in searchprofiles', i+j+1, itemObj[individualItem]);
    console.log('heres your instrumentsarr updated', instrumentArr)
    {itemObj[individualItem]}
  });
});

    return(
      <Container>
      <FlatList
      data={instrumentArr}
      renderItem={({item, index})=>
      <List>
      <ListItem>
      <Text> {item} </Text>
      </ListItem>
      </List>
      }
      keyExtractor={(item, index) => index.toString()}
      >
      </FlatList>
      </Container>

    )
  }
}