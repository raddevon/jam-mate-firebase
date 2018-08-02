import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem} from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';

 export default class ProfileEdit extends Component{
  constructor(props){
    super(props);
    this.state={
      userzip:null,
      instruments:null,
      genres:null
    }
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

  componentWillMount(){
      let that = this;
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/users/'+ userId).child('zipcode').once('value').then((function(snapshot){
      let userzip = (snapshot.val() || '');
      that.setState({
        userzip:userzip
      })
      }));
  }

  componentDidMount(){
  }

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
          <H3>Your current location: </H3> 
          <Text> {this.state.userzip} </Text>
          <Grid>
          <View style={styles.container}>
            <Row>
              <H3>Instruments You Play: </H3>
              <FlatList 
              data={items}
              renderItem={({item}) => 
              <TouchableOpacity
              >
              <Text>{item}</Text>
              </TouchableOpacity>    
              }>
              </FlatList>
            </Row>
          </View>
            <Row>
          <H3>Genres You Play: </H3>
            </Row>
          </Grid>
      </Container>

      )
  }

}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
   },
});
