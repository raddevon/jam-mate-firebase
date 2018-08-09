import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ImageBackground, Alert, Image, Platform, TouchableOpacity} from 'react-native';
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
    let instrumentArr = this.props.instruments ? Object.values(this.props.instruments) : {};
    console.log('from SearchProfiles - instrumentArr', instrumentArr)



    return(

      <Container>
      <Text> blah blah search profiles carried over </Text>
      </Container>
      )
  }

}