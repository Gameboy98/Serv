
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

export default class OtpDetailsScreen extends Component {
      constructor(props) {
    super(props);
    this.state = {
        item: props.navigation.getParam('item', ''),
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.mod}>
          <View style={styles.mod1}>
            <Text style={styles.text}>Engineer Pic</Text>
            <Image
              style={{alignSelf:"center", height:100, width:100, borderRadius:50, marginTop:10}}
              source={{uri: this.state.item.image_path + this.state.item.image_name}} defaultSource={require('../assets/profile.jpg')}/>
          </View>
          <View style={styles.mod1}>
            <Text style={styles.text}>Product Pic</Text>
             <Image
              style={{alignSelf:"center", height:100, width:100, borderRadius:50, marginTop:10}}
              source={{uri: this.state.item.model_image}} defaultSource={require('../assets/profile.jpg')}/>
          </View>
        </View>
        <Text style={styles.text1}>{this.state.item.name}</Text>
        <Text style={styles.text}>{this.state.item.rating} Rating</Text>
        <Text style={styles.text}>{this.state.item.verification_status}</Text>
        <Text style={styles.text}>{this.state.item.address}</Text>
         <View style={styles.mod}>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.partner_time}</Text></View>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.order_time}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.customer_mobile}</Text></View>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.status}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.productId}</Text></View>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.orderId}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.category}</Text></View>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.brand}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.problemType}</Text></View>
          <View style={styles.mod3}><Text style={styles.text}>{this.state.item.cost}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod3}><Text style={styles.text}>OTP</Text></View>
          <View style={styles.mod3}><Text style={styles.text2}>{this.state.item.otp}</Text></View>
        </View>
         <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")} style={styles.button}><Text style={styles.text3}>OK</Text></TouchableOpacity>
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
  Image:{
    marginTop:30,
    height:100,
    width:100,
    alignSelf:"center",
  },
  mod:{
    flexDirection:"row",
  },
  mod1:{
    borderWidth:0.5,
    borderColor:"#d3d3d3",
    justifyContent:"center",
    width:"50%",
    alignItems:"center",
    height:180,
  },
  mod3:{
    borderWidth:0.5,
    borderColor:"#d3d3d3",
    justifyContent:"center",
    width:"50%",
    alignItems:"center",
    height:35,
  },
  mod2:{
    borderWidth:0.5,
    borderColor:"#d3d3d3",
    marginTop:3,
    justifyContent:"center",
    width:"100%",
    paddingTop:10,
    paddingBottom:10,
  },
  text:{
    fontSize:14,
    color:"#a9a9a9",
    alignSelf:"center",
    marginBottom:5,
  },
  text1:{
    fontSize:14,
    alignSelf:"center",
    marginTop:5,
  },
  text2:{
    fontSize:14,
    color:'red',
    margin:10,
  },
  text3:{
    marginTop:5,
    fontWeight:"bold",
    alignSelf:"center",
    color:"#fff",
  },
  button: {
    marginTop:45,
    backgroundColor: '#ff8b1a',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"95%",
    margin:"2.5%",
    borderRadius:10,
    height:40,
  },
});


