import React, { Component } from 'react';
import App from '../App';
import Landing from '../components/Landing'
import { createStackNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { Text, View, ImageBackground } from 'react-native';

const Router = StackNavigator({
  Landing:{
    screen:Landing
  }
});

export default Router;

