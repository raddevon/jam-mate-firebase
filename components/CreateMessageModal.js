import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styles from './styles'
import { Text, View, StyleSheet, ImageBackground, Alert, Image, TouchableHighlight, FlatList} from 'react-native';
import { Container, Content, Header, Footer, FooterTab, Form, Icon, Input, Item, Button,
 Label, Left, Body, Right, Title, H3, H2, Grid, Col, Row, List, ListItem, CheckBox, Separator } from 'native-base';
 import * as firebase from 'firebase';

  const CreateMessageModal=({
    isVisible, onBackdropPress,
  }) => (
    <Modal 
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
    >
    <View style={{height: "25%", width:"100%"}}>

    </View>
    </Modal>
  );

  CreateMessageModal.propTypes = {
    isVisible: PropTypes.bool,
    onBackdropPress: PropTypes.func,
  };

  export default CreateMessageModal;
