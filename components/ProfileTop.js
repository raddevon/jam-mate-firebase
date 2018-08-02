import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, Platform} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, Footer, FooterTab, Thumbnail} from 'native-base';

export default class ProfileTop extends Component{
  constructor(props){
  super(props);
  }

  componentDidMount(){
    console.log('state check? username', this.props.username)
    console.log('state check? userphoto', this.props.userphoto)
  }

  render(){
    return(

      <View style={{ justifyContent: 'center',
        alignItems: 'center', flex: 1,
        flexDirection: 'column'}}>
            <Text style={{fontSize:25}}>Hi {this.props.username} !</Text>
            <Thumbnail large
              style={{width: 140, height: 180}}  
              source={{uri:this.props.userphoto}}
      />
      </View>
      )
  }


}