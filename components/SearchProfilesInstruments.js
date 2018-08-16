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
    console.log('this props instruments', this.props.instruments)
    let instrumentArr = [];
    this.props.instruments.forEach(function(itemObj, i){
      Object.keys(itemObj).forEach(function(individualItem, j){
        let myObj = {};
        myObj['key'] = itemObj[individualItem];
        myObj['color'] = 'blue';
        myObj['type'] = 'instrument';
        instrumentArr.push(myObj);
      });
    });   
    instrumentArr.push({'key': '', 'color': '', 'type': ''});
    this.props.genres.forEach(function(itemObj, i){
      Object.keys(itemObj).forEach(function(individualItem, j){
        let myObj = {}
        myObj['key'] = itemObj[individualItem];
        myObj['color'] = 'green';
        myObj['type'] = 'genre';
        instrumentArr.push(myObj);
      });
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
                renderItem={({item, index}) => {
                  return (
                    <List>
                    <ListItem listKey={'a' + index.toString()}>
                      <Text>{item.type} {item.key}</Text>
                    </ListItem>
                    </List>
                  );
                }}>
              </FlatList>
            </Body>
            <Button>
              <Text>Message {this.props.name}</Text>
            </Button>
          </CardItem>
        </Card>
      </View>
    )
  }
}

SearchProfilesInstruments.defaultProps = {
  instruments: [],
  genres:[],
  firstname:[],
  lastname:[],
  name:[]
};
