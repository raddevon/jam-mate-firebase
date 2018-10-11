import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox, Separator } from 'native-base';
 import InstrumentAdder from './InstrumentAdder'
 import GenreAdder from './GenreAdder'
 import * as firebase from 'firebase';

 export default class ProfileEditContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      toggle:false,
      userzip:null,
      contactinfo:null,
      instruments:null,
      genres:null
    }
  }

  _onPress(){
    let newState = !this.state.toggle;
    this.setState({
      toggle:newState
    })
  }

  _onStateChange(newState){
    this.setState({toggleState:value})
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

  checkBoxTest(){
    alert('value changed')
  }

  componentWillMount(){
      let that = this;
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/users/'+ userId).once('value').then((function(snapshot){
      const user = snapshot.val();
      that.setState({
        userzip: user.zipcode || '',
        contactinfo: user.contactinfo || ''
      })
      }));
  }

  componentDidMount(){
  }

  render(){
        const { toggle } = this.state
        const textValue = toggle?"On":"Off";
        const buttonBg = toggle?"dodgerblue":"white";
        const textColor = toggle?"white":"black";
        let userId = firebase.auth().currentUser.uid;

        let items = [
        'Guitar',
        'Bass',
        'Drums',
        'Vocals (aggressive)',
        'Vocals'
        ]


    return(

      <Container>
              <Item fixedLabel>
                      <Label>Contact info</Label>
                      <Input
                        onChangeText={(contactinfo) => {
                          this.setState({contactinfo});
                          }
                        }
                        value={this.state.contactinfo}
                      />
              </Item>
              <InstrumentAdder userId={userId}/>
              <GenreAdder userId={userId}/>
      </Container>

      )
  }

}

const styles = StyleSheet.create({
  buttons: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexWrap: 'wrap', 
    flexDirection:'column',
   },
});
