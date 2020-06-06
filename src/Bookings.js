import * as React from 'react';
import { Component } from "react";
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
  AsyncStorage,Alert,
  Dimensions, StatusBar,
} from 'react-native';

import IoniconsI from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {Header, Title, Body} from 'native-base';

const iconAC = require('../assets/app/ac.png');
const iconAirCooler = require('../assets/app/aircooler.png');
const iconAudio = require('../assets/app/audio.png');
const iconBDryer = require('../assets/app/Bdryer.png');
const iconCamera = require('../assets/app/camera.png');
const iconDeepFreezer = require('../assets/app/deepfreezer.png');
const iconDishWasher = require('../assets/app/dishwasher.png');
const iconElectrical = require('../assets/app/electrical.png');
const iconFridge = require('../assets/app/fridge.png');
const iconGeyser = require('../assets/app/geyser.png');
const iconHobs = require('../assets/app/hobs.png');
const iconHood = require('../assets/app/hood.png');
const iconLaptop = require('../assets/app/laptop.png');
const iconMixer = require('../assets/app/mixer.png');
const iconOven = require('../assets/app/oven.png');
const iconTV = require('../assets/app/tv.png');
const iconUps = require('../assets/app/ups.png');
const iconWachineMachine = require('../assets/app/washingmachine.png');
const iconWaterPurifier = require('../assets/app/waterpurifier.png');

export default class BookingsScreen extends React.Component {
  state = {
    mobile: "",
    latitude:'',
    longitude:'',
    place:'',
    running_data:[],
    complete_data:[],
    amc_data:[],
    index: 0,
    routes: [
      { key: 'first', title: 'Ongoing' },
      { key: 'second', title: 'History' },
      { key: 'third', title: 'AMC History' },
    ],
  };

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

    let url1 = "https://serve-api.appspot.com/api/get/running/order/";
      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      mobile:this.state.mobile }),
            });
      const data1 = await response1.json();
      this.setState({running_data:data1.running_data});

    let url2 = "https://serve-api.appspot.com/api/get/complete/order/";
      const response2 = await fetch(url2, {
               method: 'POST',
               body: JSON.stringify({
      mobile:this.state.mobile }),
            });
      const data2 = await response2.json();
      this.setState({complete_data:data2.complete_data});  

    let url3 = "https://serve-api.appspot.com/api/get/amc/purchased/";
      const response3 = await fetch(url3, {
               method: 'POST',
               body: JSON.stringify({
      phoneNo:this.state.mobile }),
            });
      const data3 = await response3.json();
      this.setState({amc_data:data3.amc_data});    
  }

  renderImage(img) {
    switch (img) {
      case 'Water Purifiers':
          return (<Image resizeMode="contain" source={iconWaterPurifier} style={[styles.Image]} />);
      case 'Geyser':
          return (<Image resizeMode="contain" source={iconGeyser} style={[styles.Image]} />);
      case 'Air Conditioner':
          return (<Image resizeMode="contain" source={iconAC} style={[styles.Image]} />);
      case 'Laptop':
          return (<Image resizeMode="contain" source={iconLaptop} style={[styles.Image]} />);
      case 'Microwave Oven':
          return (<Image resizeMode="contain" source={iconOven} style={[styles.Image]} />);
      case 'Digital Camera':
          return (<Image resizeMode="contain" source={iconCamera} style={[styles.Image]} />);
      case 'Chest Freezer':
          return (<Image resizeMode="contain" source={iconDeepFreezer} style={[styles.Image]} />);
      case 'Home Audio':
          return (<Image resizeMode="contain" source={iconAudio} style={[styles.Image]} />);
      case 'Electrical Items':
          return (<Image resizeMode="contain" source={iconElectrical} style={[styles.Image]} />);
      case 'Chimneys':
          return (<Image resizeMode="contain" source={iconHood} style={[styles.Image]} />);
      default:
          return (
              <Text>{'Null'}</Text>
          );
      }
  }

  render() {
    const FirstRoute = () => (
      <View style={[styles.scene, { backgroundColor: '#d3d3d3' }]}>
        <FlatList
          style={styles.list}
          horizontal={false}
          data={this.state.running_data}
          renderItem={({item}) =>  
            <View style={styles.box}>
              <Text style={styles.text}>{item.category}</Text>
              <Image
                  style={{alignSelf:"center", height:70, width:70, borderRadius:35, marginTop:10}}
                  source={{uri: item.image_path + item.image_name}} defaultSource={require('../assets/profile.jpg')}/>
              <View style={styles.icon1}><Text style={styles.text}>{item.name}</Text></View>
              <View style={styles.icon}><IoniconsI style={styles.searchIcon} name="ios-people" size={15} color="#ff8b1a"/><Text style={styles.text3}>{item.totalCall} visited</Text></View>
              <View style={styles.icon}><IoniconsI style={styles.searchIcon} name="ios-star" size={15} color="#ff8b1a"/><Text style={styles.text3}>{item.rating}</Text></View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("VerifyId")} style={styles.button1}><Text style={styles.text3}>Verify Id</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button1}><Text style={styles.text3}>Track</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("OtpDetails", {item:item})} style={styles.button1}><Text style={styles.text3}>View OTP</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button1}><Text style={styles.text3}>Cancel Order</Text></TouchableOpacity>
            </View>
          }
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}/>      
      </View>
  );

  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#d3d3d3',}]}>
        <FlatList
          style={styles.list}
          horizontal={false}
          data={this.state.complete_data}
          renderItem={({item}) =>  
            <View style={styles.box1}>
              <View style={styles.icon}>
                <View>{this.renderImage(item.category)}</View>
                <View style={styles.Details}>
                  <Text>{item.orderId}</Text>
                  <Text style={styles.text5}>{item.address}</Text>
                  <Text style={styles.text5}>{item.status}</Text> 
                </View>
              </View>
              <View style={styles.icon}>
                  <View style={styles.brand}><Text style={styles.text5}>{item.category}</Text></View>
                  <View style={styles.brand}><Text style={styles.text5}>{item.brand}</Text></View>
                </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Details", {item:item})} style={styles.button2}><Text style={styles.text4}>Show Detail</Text></TouchableOpacity>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}/>      
      </View>
  );
  
  const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#d3d3d3',}]}>
        <FlatList
          style={styles.list}
          horizontal={false}
          data={this.state.amc_data}
          renderItem={({item}) =>  
            <View style={styles.box2}>
              <Text style={{alignSelf:"center", fontSize:18, marginTop:5, marginBottom:5,}}>{item.planName}</Text>
              <View style={styles.icon}>
                <View style={styles.brand1}><Text style={styles.text6}>Product Name</Text><Text style={styles.text7}>{item.productName}</Text></View>
                <View style={styles.brand1}><Text style={styles.text6}>Plan Price</Text><Text style={styles.text7}>{item.planPrice}</Text></View>
              </View>
              <View style={styles.icon}>
                <View style={styles.brand1}><Text style={styles.text6}>Validity Start</Text><Text style={styles.text7}>{item.validityStart}</Text></View>
                <View style={styles.brand1}><Text style={styles.text6}>Validity End</Text><Text style={styles.text7}>{item.validityEnd}</Text></View>
              </View>
              <View style={styles.icon}>
                <View style={styles.brand1}><Text style={styles.text6}>Aging</Text><Text style={styles.text7}>{item.ageing}</Text></View>
                <View style={styles.brand1}><Text style={styles.text6}>Status</Text><Text style={styles.text7}>{item.verifyStatus}</Text></View>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Invoice", {item:item})} style={styles.button3}><Text style={styles.text4}>Invoice</Text></TouchableOpacity>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}/>      
      </View>
  );
    return (
      <View style={styles.main}>
        <Header style={styles.header}>
          <Text style={styles.text1}>YOU ARE IN</Text>
          <Text style={styles.text2}>{this.state.place}</Text>
        </Header>
        <View style={styles.view}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
              third: ThirdRoute,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={{ backgroundColor: '#d3d3d3',}}
            renderTabBar={(props) =>
                    <TabBar
                      {...props}
                      indicatorStyle={{ backgroundColor: '#d3d3d3' }}
                      style={{backgroundColor: "#ff8b1a", height: 50,}}
                      indicatorStyle={{backgroundColor: "#fff"}}
                    />
                  }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   main:{
    backgroundColor:"#d3d3d3",
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
  scene: {
    flex:1,
  },
  box:{
    width:"48%",
    backgroundColor:"#fff",
    borderRadius:5,
    alignSelf:"center",
    alignItems:"center",
    marginLeft:"1%",
    marginTop:10,
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
  },
  box1:{
    width:"100%",
    backgroundColor:"#fff",
    alignSelf:"center",
    marginTop:5,
  },
  box2:{
    width:"98%",
    backgroundColor:"#fff",
    alignSelf:"center",
    marginTop:5,
  },
  text:{
    marginTop:5,
    alignSelf:"center",
  },
  text3:{
    alignSelf:"center",
  },
  text4:{
    alignSelf:"center",
    color:"#fff",
    fontWeight:"bold",
  },
  text5:{
    color:"#a9a9a9",
  },
  text6:{
    color:"#a9a9a9",
    margin:5,
  },
  text7:{
    color:"#000",
    margin:5,
  },
  icon:{
    flexDirection:"row",
  },
  icon1:{
    height:45,
  },
  Image:{
    marginTop:10,
    height:80,
    width:80,
    alignSelf:"center",
    margin:20,
  },
  button1:{
    borderRadius:2,
    borderWidth:1,
    borderColor:"#ff8b1a",
    width:"95%",
    height:25,
    justifyContent:"center",
    marginBottom:5,
  },
  button2:{
    borderRadius:8,
    backgroundColor:"#ff8b1a",
    width:"95%",
    height:40,
    justifyContent:"center",
    marginBottom:5,
    marginTop:5,
    alignSelf:"center",
  },
  button3:{
    borderRadius:8,
    backgroundColor:"#ff8b1a",
    width:"95%",
    height:40,
    justifyContent:"center",
    marginBottom:5,
    marginTop:10,
    alignSelf:"center",
  },
  Details:{
    marginTop:20,
    width:"60%",
  },
  brand:{
    justifyContent:"center",
    borderWidth:0.5,
    height:40,
    width:"50%",
    borderColor:"#d3d3d3",
    alignItems:"center",
  },
  brand1:{
    justifyContent:"center",
    borderWidth:0.5,
    width:"50%",
    borderColor:"#d3d3d3",
  },
});