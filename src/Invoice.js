
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
  AsyncStorage,Alert,
  KeyboardAvoidingView,
} from 'react-native';

import {WebView} from 'react-native-webview';
import {Header, Title, Body, Container} from 'native-base';
const MainHTML = require('./main.html');

export default class InvoiceScreen extends Component {
  render() {
    return (
      <View style={styles.view}>
        <WebView
          source={MainHTML}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    height:1000,
    marginTop:0,
    backgroundColor:"#fff",
    height:"100%",
  },
});


