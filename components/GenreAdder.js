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
      refresher:false,
    }
  }

  _addGenre = () =>{
  let userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/users/' + userId).child('genres').push(this.state.formContent)
    this.setState({
      formContent:''
    })
  }


    _removeGenre = (key, index)=>{
    let that=this;
    refreshCheck = this.state.refresher
    let tempList = this.state.genreList
    let userId = this.props.userId;
    let ref = firebase.database().ref('/users/'+userId).child('genres');
    tempList.splice(index, 1)
    that.setState({
      refresher:!refreshCheck
    })
  ref.child(key).remove()
  }

  componentWillMount= ()=>{
    let newList=[];
    let that=this;
    let ref= firebase.database().ref('/users/'+ this.props.userId).child('genres');
    ref.orderByKey().on('child_added', function(snapshot){
      newList.push(snapshot);
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
              extraData={this.state.refresher}
              data={this.state.genreList}
              renderItem={({item, index}) => 
              <TouchableOpacity
              onPress={()=> this._removeGenre(item.key, index)}
              style={{margin:8, borderRadius:10, height:25, borderColor:'dodgerblue', borderWidth:1, flex:1}}
              >
              <Text style={{textAlign:'center',letterSpacing: 1.5, padding:4}}
              >
              {item.val()}
              </Text>
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
