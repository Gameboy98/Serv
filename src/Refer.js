
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

import Icon from 'react-native-vector-icons/Ionicons';

export default class ReferScreen extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.image}>
          <Image
            resizeMode="strech"
            style={{alignSelf:"center", height:240, width:"100%", marginTop:-20}}
            source={require('../assets/friends.jpg')}/>   
        </View>
        <View style={styles.Cont}>
          <View style={styles.Container}>
            <Text style={styles.header}>Get Your customers joined in Serv</Text>
            <Text style={styles.header}>Simplified</Text>
            <Text style={styles.text}>Let them have same joy like you</Text>
            <Text style={styles.text1}>My referral code is:</Text>
            <View style={styles.code}>
              <Text style={styles.text2}>SERVC461824230</Text>
              <TouchableOpacity><Icon style={styles.Icon} name="md-paper-plane" size={30} color="#a9a9a9"/></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>Your Added Friends List(0)</Text>
        </View>
      </View>
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
  image:{
    alignSelf:"center",
    width:"100%",
    justifyContent:"center",
  },
  header:{
    fontWeight:"bold",
    fontSize:17,
    color:"#000"
  },
  Cont:{
    backgroundColor:"#fff",
    marginTop:-50,
    width:"90%",
    borderWidth:0.5,
    borderColor:"#d3d3d3",
    alignSelf:"center",
    borderRadius:5,
  },
  Container:{
    marginTop:"8%",
    marginLeft:"8%",
    height:190,
  },
  text:{
    fontSize:19,
    color:"#a9a9a9",
    marginTop:20,
  },
  text1:{
    fontSize:16,
    color:"#a9a9a9",
    marginTop:20,
  },
  text2:{
    fontSize:19,
    color:"#ff8b1a",
    marginTop:20,
    width:"80%",
    fontWeight:"bold",
  },
  Icon:{
    marginTop:18,
  },
  code:{
    flexDirection:"row",
  },
  list:{
    marginLeft:20,
  },
});


