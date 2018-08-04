import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, Image, FlatList, TouchableOpacity} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox, Icon } from 'native-base';
 import FooterTabs from './Footer'
 import * as firebase from 'firebase';

var tempInstrumentList = []

export default class InstrumentAdder extends Component{
  constructor(props){
    super(props);
    this.state={
      formContent:'',
      instrumentList:[],
    }
  }

  _addInstrument = () =>{
  let userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/users/' + userId).child('instruments').push(this.state.formContent)
    this.setState({
      formContent:''
    })
  }

  _removeInstrument = (key)=>{
    let userId = this.props.userId;
    let ref = firebase.database().ref('/users/'+userId).child('instruments');
    console.log('that state of instrumentList', this.state.instrumentList)

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
    let ref= firebase.database().ref('/users/'+ this.props.userId).child('instruments');
    console.log('whats a ref', ref)
    ref.orderByKey().on('child_added', function(snapshot){
      console.log('whats the snapshot val', snapshot.val())
      newList.push(snapshot);
      console.log('new list after change', newList)
      console.log('this is what that order sent back:', snapshot.val())
      that.setState({
        instrumentList:newList
      })
    })
  }

  render(){
  return(
    <Container>
    <Content>
    <Form>
    <Input 
    placeholder="Enter New Instrument..."
    onChangeText={(formContent)=> this.setState({formContent})}
    value={this.state.formContent}
     /> 
    }
    <Button
    onPress={()=> this._addInstrument()}
    > 
    <Icon name="add" />
    </Button>
    </Form>

    <View style={{flexDirection:'row', alignItems:'flex-start'}}>
    <List>
    <FlatList 
              extraData={this.state}
              style={{flexDirection:'row'}}
              data={this.state.instrumentList}
              renderItem={({item}) => 
              <TouchableOpacity
                onPress={()=> this._removeInstrument(item.key)}
                style={{padding:4, marginBottom:6, borderRadius:10, borderColor:'dodgerblue', borderWidth:1, flexDirection:'row',alignSelf: 'center'}}
                >
                <Text
                style={{textAlign:'center',letterSpacing: 1.5,}}
                >
                {item.val()}
                <Icon name="close" style={{textAlign: 'right'}} />
                </Text>
              </TouchableOpacity>    
              }
              keyExtractor={(item) => item.key}
              >
    </FlatList>
    </List>
    </View>
    </Content>
    </Container>
    )
}

} 
