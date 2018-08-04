import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox, Icon } from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';

var tempGenreList = []

export default class GenreAdder extends Component{
  constructor(props){
    super(props);
    this.state={
      formContent:'',
      genreList:[],
    }
  }

  _addGenre = () =>{
  let userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/users/' + userId).child('genres').push(this.state.formContent)
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

  componentWillMount= ()=>{
    let newList=[];
    let that=this;
    console.log('did that userid pass down?', this.props.userId)
    let ref= firebase.database().ref('/users/'+ this.props.userId).child('genres');
    console.log('whats a ref', ref)
    ref.orderByKey().on('child_added', function(snapshot){
      console.log('whats the snapshot with key?', snapshot.key)
      console.log('whats the snapshot with...nothing', snapshot)
      console.log('whats the snapshot with val', snapshot.val())
      newList.push(snapshot);
      console.log('new list after change', newList)
      that.setState({
        genreList:newList
      })
    })
  }

  render(){
  return(
    <Container>
    <Content>
    <Form>
    <Input 
    placeholder="Genres..."
    onChangeText={(formContent)=> this.setState({formContent})}
    value={this.state.formContent}
     /> 
    }
    <Button
    onPress={()=> this._addGenre()}
    > 
    <Icon name="add" />
    </Button>
    </Form>

    <List>
    <FlatList 
              extraData={this.state.formContent}
              data={this.state.genreList}
              renderItem={({item}) => 
              <TouchableOpacity
              style={{margin:8, borderRadius:10, height:25, borderColor:'dodgerblue', borderWidth:1, flex:1}}
              >
              <Text style={{textAlign:'center',letterSpacing: 1.5, padding:4}}>{item.val()}</Text>
              </TouchableOpacity>    
              }
              keyExtractor={(item) => item.key}
              >
</FlatList>
    </List>
</Content>

    </Container>
    )
}

} 
