import React, { Component } from 'react';
import App from '../App';
import Landing from '../components/Landing'
import Home from '../components/Home'
import ProfileEdit from '../components/ProfileEdit'
import Search from '../components/Search'
import FooterNav from '../components/FooterNav'
import Messages from '../components/Messages'
import MessagesIndividual from '../components/MessagesIndividual'
import { createStackNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { Text, View, ImageBackground } from 'react-native';


const Router = createStackNavigator({
    Landing: Landing,
    Home: Home,
    ProfileEdit: ProfileEdit,
    Search: Search,
    Messages:Messages,
    MessagesIndividual:MessagesIndividual,
    FooterNav:FooterNav,

  },
  {
    initialRouteName: 'Landing',
  }  
);

export default Router;

