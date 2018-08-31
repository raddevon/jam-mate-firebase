import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { TabNavigator } from "react-navigation";
import {View} from 'react-native';

export default class FooterNav extends Component {
   constructor(props){
    super(props);
  }
  
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Footer>
          <FooterTab>
            <Button 
            onPress={
              () => navigate('ProfileEdit')
            }
            >
              <Text>Profile</Text>
            </Button>
            <Button>
              <Text>Search</Text>
            </Button>
            <Button>
              <Text>Messages</Text>
            </Button>
            <Button>
              <Text>somethingelse</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}