
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

import {Header, Title, Body, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Autocomplete from 'react-native-autocomplete-input';
import ModalDropdown from 'react-native-modal-dropdown';

export default class AddressScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.view}>
        <TouchableOpacity
          style={styles.add}
          onPress={() => this.props.navigation.navigate("AddMap")}
          underlayColor='#fff'>
          <Text style={styles.text}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    marginTop:-120,
    height:1000,
    marginTop:0,
    backgroundColor:"#fff",
    height:"100%",
  },
  add:{
    alignSelf:"center",
    width:"95%",
    justifyContent:"center",
    height:50,
    marginBottom:3,
    backgroundColor:'#ff8b1a',
    borderRadius:10,
    marginTop:10,
  },
  text:{
    marginLeft:20,
    color:"#fff"
  },
});


