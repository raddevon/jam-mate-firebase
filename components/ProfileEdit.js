import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem} from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';

 export default class Home extends Component{
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'Edit Profile',
    headerStyle: {
      backgroundColor: '#007bff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render(){
        const { navigate } = this.props.navigation;
        let items = [
        'Guitar',
        'Bass',
        'Drums',
        'Vocals (aggressive)',
        'Vocals'
        ]


    return(

      <Container>
          <H3>Your Zipcode: </H3>
          <Grid>
            <Row>
              <H3>Instruments You Play: </H3>
              <FlatList 
              data={items}
              horizontal={true}
              renderItem={({item}) => 
              <Button
              rounded
              >
              <Text>{item}</Text>
              </Button>    
              }>
              </FlatList>
            </Row>
            <Row>
          <H3>Genres You Play: </H3>
            </Row>
          </Grid>
      </Container>

      )
  }
}