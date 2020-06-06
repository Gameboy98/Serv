
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Item,
  Constants,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Card,
  AppRegistry,
  TextInput,
  Button,
  Linking,
  AsyncStorage,Alert,
  KeyboardAvoidingView,
} from 'react-native';

import {WebView} from 'react-native-webview';

export default class TermsScreen extends Component {
  render() {
    return (
        <WebView
        source={{uri: 'https://www.servsimplified.com/terms'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    width:"90%",
    alignSelf:"center",
    height:1000,
    marginTop:0,
    backgroundColor:"#fff",
    height:"100%",
  },
  text:{
    marginTop:20,
  },
});


