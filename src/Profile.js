
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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ProfileScreen extends Component {
  
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.Cont}>
          <View style={styles.Container}>
            <View style={styles.Container1}>
              <View style={styles.Image}>
                <Image
                  resizeMode="contain"
                  style={{alignSelf:"center", height:100, width:100, borderRadius:50,}}
                  source={require('../assets/profile.jpg')} defaultSource={require('../assets/profile.jpg')}/>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileEdit")} style={styles.Icon}><Icon style={{alignSelf:"center"}} name="pencil" size={20} color="#fff"/></TouchableOpacity>
            </View>
            <View style={styles.Detail}>
              <View style={styles.Details}>
              <Text style={styles.text1}>Name</Text>
              <Text style={styles.text2}>Saurabh</Text>
            </View>
            <View style={styles.Details}>
              <Text style={styles.text1}>Email</Text>
              <Text style={styles.text2}>saurabh@innobins.com</Text>
            </View>
            <View style={styles.Details}>
              <Text style={styles.text1}>DOB</Text>
              <Text style={styles.text2}>12 Dec 2019</Text>
            </View>
            <View style={styles.Details}>
              <Text style={styles.text1}>Gender</Text>
              <Text style={styles.text2}>Male</Text>
            </View>
            <View style={styles.Details}>
              <Text style={styles.text1}>Mobile No.</Text>
              <Text style={styles.text2}>9166024618</Text>
            </View>
            </View>
          </View>
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
  Cont:{
    backgroundColor:"#fff",
    width:"90%",
    borderWidth:0.5,
    alignSelf:"center",
    borderRadius:5,
    marginTop:10,
    borderColor:"#d3d3d3"
  },
  Container:{
    margin:"3%",
    height:290,
    borderWidth:0.5
  },
  Container1:{
    flexDirection:"row",
    marginTop:10,
  },
  Image:{
    alignSelf:"center",
    width:"100%",
    marginTop:10,
  },
  Icon:{
    marginTop:5,
    marginLeft:"-14%",
    height:30,
    width:30,
    backgroundColor:"#ff8b1a",
    borderRadius:15,
    justifyContent: 'center',
  },
  Detail:{
    marginTop:30,
  },
  Details:{
    flexDirection:"row",
    marginTop:6,
  },
  text1:{
    fontSize:16,
    color:"#a9a9a9",
    marginLeft:12,
    width:120,
  },
  text2:{
    fontSize:16,
    color:"#000",
  },
  code:{
    flexDirection:"row",
  },
  list:{
    marginLeft:20,
  },
});


