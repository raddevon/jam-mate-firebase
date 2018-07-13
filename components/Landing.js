import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H1, H2, H3 } from 'native-base';

export default class Landing extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <Container>
      <ImageBackground
       style={{flex:1, width: window.width, 
        height: window.height}}
      source={require('../img/music.jpg')}>
      <View>
      <Left />
      <Body>
      <H1 style={styles.title}> Jammate </H1>
      </Body>
      <Right />
      <Button
      style={{alignSelf:'center', margin:20}} 
      success
      rounded
      active
      onPress={
        () => navigate('Home')}
      >
      <Text style={{color:'white', padding:5}}> Get Started </Text>
      </Button>
      </View>
      </ImageBackground>
      </Container>
      )
  }

}

const styles = StyleSheet.create({
  title:{
    fontSize:100, paddingTop:140, marginBottom:50, fontFamily:'Noteworthy',
    color:'#007bff', fontWeight:'300', alignSelf:'auto'
  },
    statements: {
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
    fontSize: 30,
  },
  advice: {
        fontWeight: 'bold',
    color: 'rgba(250,250,240,.8)',
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,.25)',
    height: 100,
    width: 400,
    flex:1
  }
});

