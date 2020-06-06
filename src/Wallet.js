import React, { Component } from "react";
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
  AsyncStorage,Alert
} from 'react-native';
import {Header, Title, Body} from 'native-base';

const iconWallet = require('../assets/walle.png');

export default class WalletScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet_data:"",
      total:"",
      place:"",
      mobile:"",
      latitude:'',
      longitude:'',
    };
  }

  componentDidMount() {
   navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.fetchData();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

   async fetchData() {
    let var1 =  await AsyncStorage.getItem("mobile");  
      this.setState({mobile:var1});

    let url0 = "https://locationapi-99.appspot.com/location/reverse?lat="+ this.state.latitude+ "&lon="+ this.state.longitude;
      const response0 = await fetch(url0, {
               method: 'GET',
            });
      const data0 = await response0.json();
      this.setState({place:data0.address.town});   

    let url1 = "https://serv-customer.appspot.com/api/get/customer/wallet/";
      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      mobile:this.state.mobile }),
            });
      const data1 = await response1.json();
      this.setState({wallet_data:data1.wallet_data});
      this.setState({total:data1.total});
  }  

  render() {
    return (
      <View style={styles.main}>
        <Header style={styles.header}>
          <Text style={styles.text1}>YOU ARE IN</Text>
          <Text style={styles.text2}>{this.state.place}</Text>
        </Header>
        <View style={{height:130, width:"100%"}}>
          <Text style={{margin:20,fontSize:16, fontWeight:"bold"}}>Serv Simplified Wallet</Text>
          <Text style={{marginLeft:20,fontSize:16, fontWeight:"bold"}}>₹   {this.state.total}.0</Text>
        </View>
        <View style={{backgroundColor:"#000", width:"100%", height:5}}></View>
        <View style={{backgroundColor:"#6a0dad", width:"100%", height:5}}></View>
        <View style={{backgroundColor:"#d3d3d3", width:"100%", height:25, justifyContent: 'center',}}><Text style={{fontWeight:"bold", marginLeft:10}}>Recents</Text></View>
        <ScrollView style={styles.view}>
           <FlatList
            style={styles.list}
            horizontal={false}
            data={this.state.wallet_data}
            renderItem={({item}) =>  
              <View style={styles.box}>
                <View style={{backgroundColor:"#a9a9a9", width:"100%", height:25, justifyContent: 'center',}}><Text style={{fontWeight:"bold", marginLeft:10}}>{item.paymentDate}</Text></View>
                <View style={{backgroundColor:"#fff", width:"100%", flexDirection:"row",}}>
                  <Image resizeMode="contain" source={iconWallet} style={{margin:20, height:50, width:50}} />
                  <View style={styles.Details}>
                    <Text style={{fontWeight:"bold",}}>{item.reason}</Text>
                    <Text style={{fontWeight:"bold", marginTop:10}}>{item.paymentFrom}</Text>
                    <View style={{flexDirection:"row"}}><Text style={{color:"#a9a9a9", marginTop:10}}>{item.time}</Text><Text style={{color:"#9E1A1A",fontWeight:"bold", marginTop:10, marginLeft:"50%"}}>-₹{item.balance}</Text></View>
                    <Text style={{color:"#a9a9a9", marginTop:10}}>Txn Id: {item.paymentId}</Text>
                  </View>
                </View>
              </View>
            }
            keyExtractor={(item, index) => index.toString()}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main:{
    backgroundColor:"#ffffff",
    height:"100%",
  },
  header:{
    width: "100%",
    backgroundColor:"#ff8b1a",
    alignSelf:"center",
    flexDirection:"column",
  },
  text1:{
    marginTop:5,
    fontSize:14,
    color:"#ffffff",
    marginLeft:10,
  },
  text2:{
    fontSize:18,
    color:"#ffffff",
    fontWeight:"bold",
    marginLeft:10,
  },
  view:{
    flex:1,
  },
  Details:{
    margin:10,
    width:"75%",
    marginLeft:0,
  },
});