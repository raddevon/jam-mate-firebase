import React, { Component } from 'react';
import App from '../App';
import Landing from '../components/Landing'
import Home from '../components/Home'
import { createStackNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { Text, View, ImageBackground } from 'react-native';


const Router = createStackNavigator({
    Landing: Landing,
    Home: Home,
  },
  {
    initialRouteName: 'Landing',
  }  
);

export default Router;

