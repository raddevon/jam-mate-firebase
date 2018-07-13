import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2 } from 'native-base';


export default class App extends React.Component {
  render() {
    return (
      <Container>
      <View>
        <Header>
            <Left>
            <Title style={{fontSize:20, color:'rgba(255,  180, 80, 1)', fontWeight:'bold'}}>Home</Title>
            </Left>
            <Body>
            </Body>
            <Right />
            </Header>
        </View>
        <Text>Edits are happening. Boom.</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    overlay:{
    backgroundColor:'rgba(0,0,0,.2)',
    height: window.height,
    width: window.width,
    flex:.5
  },
});
