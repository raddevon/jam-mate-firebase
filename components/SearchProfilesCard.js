import React, { Component } from 'react';
import { Alert, FlatList, Text, View, StyleSheet, ImageBackground, Image, Platform, TouchableOpacity, ScrollView} from 'react-native';
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

  }

  _addContact = (targetUser) => {
    let currentuser = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + targetUser).child('connectedusers').push(currentuser)
  }

  render(){


    let combo = ["INSTRUMENTS"].concat(this.props.instruments, [" ", "GENRES"], this.props.genres);

    return(
      <View>
        <Card>
          <CardItem>
            <Body>
              <H3>{this.props.name}</H3>
              <H2>{this.props.userid}</H2>
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
            <Button
              onPress={ () => {
                this._addContact(this.props.userid)
                Alert.alert('connection sent to', this.props.name)
              }
              }
            >
              <Text> Send Contact Info to {this.props.name} </Text>
            </Button>
            </Body>
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
