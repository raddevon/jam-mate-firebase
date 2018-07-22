import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {View} from 'react-native';

export default class FooterTabs extends Component {
  render() {
    return (
      <View>
        <Footer>
          <FooterTab>
            <Button active>
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