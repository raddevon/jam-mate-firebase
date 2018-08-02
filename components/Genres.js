import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, Platform} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';

export default class Genres extends Component{
  constructor(props){
  super(props);
  }

  componentDidMount(){
  }

  render(){
    return(
      <View>
      <H2>Genres:</H2>
      <Text> none currently</Text>
      </View>
    )
  }

}