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
      refresher:false,
    }
  }

  _addInstrument = () =>{
  let userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/users/' + userId).child('instruments').push(this.state.formContent)
    this.setState({
      formContent:''
    })
  }

  _removeInstrument = (key, index)=>{
    let that=this;
    refreshCheck = this.state.refresher
    let tempList = this.state.instrumentList
    console.log('tempList sanity check', tempList)
    let userId = this.props.userId;
    let ref = firebase.database().ref('/users/'+userId).child('instruments');
    console.log('that state of instrumentList', this.state.instrumentList)
    console.log('what is being removed', tempList[index])
    tempList.pop(index)
    console.log('after popping', tempList)
    console.log('using index -- instrumentList item pulled', this.state.instrumentList[index])
    that.setState({
      refresher:!refreshCheck
    })
  ref.child(key).remove()
  console.log('refresher status:', this.state.refresher)
  console.log('after - instrument still there?', this.state.instrumentList)
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
    let ref= firebase.database().ref('/users/'+ this.props.userId).child('instruments');
    ref.orderByKey().on('child_added', function(snapshot){
      newList.push(snapshot);
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
              extraData={this.state.refresher}
              style={{flexDirection:'row'}}
              data={this.state.instrumentList}
              renderItem={({item, index}) => 
              <TouchableOpacity
                onPress={()=> this._removeInstrument(item.key, index)}
                style={{padding:4, marginBottom:6, borderRadius:10, borderColor:'dodgerblue', borderWidth:1, flexDirection:'row',alignSelf: 'center'}}
                >
                <Text
                style={{textAlign:'center',letterSpacing: 1.5,}}
                >
                {item.val()}and index {index}
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
