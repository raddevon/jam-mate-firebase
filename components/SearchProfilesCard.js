import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity, ScrollView} from 'react-native';
import { Card, CardImage, CardItem, Container, Content, Header, Form, Input, Icon, Item, Button,
 Label, Left, List, ListItem, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';
 import FooterNav from './FooterNav';
 import * as firebase from 'firebase';
 import * as Animatable from 'react-native-animatable';

export default class SearchProfilesCard extends Component{
constructor(props){
    super(props);
    this.state={

    }
  }

  componentDidMount = () =>{
    // console.log('this.props.general', this.props.general)
    // console.log('this.props.general.firstname', this.props.general.firstname)


    // console.log('can o worms Object.values(this.props.general)')
    // console.log('this props general . data  instruments')
        
    // console.log('working?')
    // for (let [key, val] in this.props.general){
    //       console.log('this.props.general[key]')
    //       console.log('just the val')
    //     }
  }

  render(){


    let combo = ["INSTRUMENTS"].concat(this.props.instruments, [" ", "GENRES"], this.props.genres);
    // console.log('what is passed for instruments', this.props.instruments)
    // let instrumentArr = [];
    // this.props.instruments.forEach(function(itemObj, i){
    //   Object.keys(itemObj).forEach(function(individualItem, j){
    //     let myObj = {};
    //     myObj['key'] = itemObj[individualItem];
    //     myObj['color'] = 'blue';
    //     myObj['type'] = 'instrument';
    //     instrumentArr.push(myObj);
    //   });
    // });   
    // instrumentArr.push({'key': '', 'color': '', 'type': ''});
    // this.props.genres.forEach(function(itemObj, i){
    //   Object.keys(itemObj).forEach(function(individualItem, j){
    //     let myObj = {}
    //     myObj['key'] = itemObj[individualItem];
    //     myObj['color'] = 'green';
    //     myObj['type'] = 'genre';
    //     instrumentArr.push(myObj);
    //   });
    // });  
    // console.log('this should be checkpoint for instrumentArr', instrumentArr)

    return(
      <View>
        <Card>
          <CardItem>
            <Body>
              <H3>{this.props.name}</H3>
              <FlatList
                data={combo}
                keyExtractor={(item, index)=> index.toString()} 
                renderItem={({item, index}) => {
                  return (
                    <List>
                      <ListItem listKey={'a' + index.toString()}>
                        <Text>{item}</Text>
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

SearchProfilesCard.defaultProps = {
  instruments: [],
  genres:[],
  firstname:[],
  lastname:[],
  name:[]
};
