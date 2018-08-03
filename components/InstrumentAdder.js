import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox, Icon } from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';

var items = ['nothing yet']

export default class InstrumentAdder extends Component{
  constructor(props){
    super(props);
    this.state={
      formContent:''
    }
  }

  _addInstrument= () =>{
  const { navigate } = this.props.navigation;
  let userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/users/' + userid).child(key).child('instruments').set(this.state.formContent)
    this.setState({
      formContent:''
    })
  }

  _putOnPage = () =>{
    items.push(this.state.formContent)
    this.setState({
      formContent:""
    })
    console.log('submit?', this.state.formContent)
    console.log(items)
  }

  render(){
  return(
    <Container>
    <Content>
    <Form>
    <Input 
    placeholder="something here"
    onChangeText={(formContent)=> this.setState({formContent})}
    value={this.state.formContent}
     /> 
    }
    <Text> {this.state.formContent}</Text>
    <Button
    onPress={()=> this._putOnPage()}
    > 
    <Icon name="add" />
    </Button>
    </Form>

    <List containerStyle={{borderTopWidth:0, borderBottomWidth:0}}>
    <FlatList 
              extraData={this.state.formContent}
              data={items}
              renderItem={({item}) => 
              <TouchableOpacity
              style={{margin:8, height:25, borderColor:'dodgerblue', borderWidth:1}}
              >
              <Text style={{textAlign:'center',letterSpacing: 1.5, padding:4}}>{item}</Text>
              </TouchableOpacity>    
              }
              keyExtractor={(item, index) => index.toString()}
              >
</FlatList>
    </List>

    </Content>

    </Container>
    )
}

} 
