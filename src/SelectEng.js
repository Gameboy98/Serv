
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
  Dimensions, StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import IoniconsI from 'react-native-vector-icons/Ionicons';

export default class SelectEngScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: props.navigation.getParam('item', ''),
      mobile: "",
      latitude:'',
      longitude:'',
      online_data:[],
      online_data1:[],
      date:"",
      time:"",
      cost:"250",
      index: 0,
      routes: [
        { key: 'first', title: 'Select' },
        { key: 'second', title: 'Prefered' },
      ],
    };
  }
componentDidMount() {
  var date = new Date().getDate(); 
  var month = new Date().getMonth() + 1; 
  var year = new Date().getFullYear(); 
  var hours = new Date().getHours(); 
  var min = new Date().getMinutes(); 
  var sec = new Date().getSeconds(); 
  this.setState({date: date + '/' + month + '/' + year});
  this.setState({time: hours + ':' + min + ':' + sec});
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
    let var2 =  await AsyncStorage.getItem("code");  
      this.setState({mobile:var1});
      this.setState({code:var2});

    let url1 = "https://serve-api.appspot.com/api/complete/online/partner/";
      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      skillName:"",
      lat:this.state.latitude,
      lang:this.state.longitude }),
            });
      const data1 = await response1.json();
      this.setState({online_data:data1.online_data});

    let url2 = "https://serve-api.appspot.com/api/get/prefered/partner/";
      const response2 = await fetch(url2, {
               method: 'POST',
               body: JSON.stringify({
      skillName:"",
      mobile:this.state.mobile}),
            });
      const data2 = await response2.json();
      this.setState({online_data1:data2.online_data});
  }

  async AutomaticBook() {
    let url1 = "https://serve-api.appspot.com/api/customer/order/broadcast/";
      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      customer_mobile:this.state.mobile,
      productId:"PRN348183",
      cost:this.state.cost,
      date:this.state.date,
      time:this.state.time,
      problemType:"No Cooling",
      created_by:this.state.code }),
            });
      const data1 = await response1.json();  
  }

  async Book() {
    let url1 = "https://serve-api.appspot.com/api/customer/order/broadcast/";
      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      customer_mobile:this.state.mobile,
      productId:"PRN348183",
      cost:this.state.cost,
      date:this.state.date,
      time:this.state.time,
      problemType:"No Cooling",
      created_by:this.state.code }),
            });
      const data1 = await response1.json();
 
  }

  render() {
    const FirstRoute = () => (
      <View style={[styles.scene, { backgroundColor: '#d3d3d3' }]}>
        <FlatList
          style={styles.list}
          horizontal={false}
          data={this.state.online_data}
          renderItem={({item}) =>  
            <View style={styles.box}>
              <View style={{flexDirection:"row",}}>
                <View style={{width:"48%", marginTop:10, marginBottom:10,}}>
                  <Image
                   style={{alignSelf:"center", height:70, width:70, borderRadius:35, marginTop:10}}
                   source={{uri: item.image_path + item.image_name}} defaultSource={require('../assets/profile.jpg')}/>
                </View>
                <View style={{width:"48%", marginTop:10, marginBottom:10,}}>
                  <View style={styles.icon1}><Text style={styles.text}>{item.full_name}</Text></View>
                  <View style={styles.icon}><IoniconsI style={{marginTop:5}} name="ios-people" size={15} color="#ff8b1a"/><Text style={styles.text3}>{item.totalCall} visited</Text></View>
                  <View style={styles.icon}><IoniconsI style={{marginTop:5}} name="ios-star" size={15} color="#ff8b1a"/><Text style={styles.text3}>{item.rating}</Text></View>
                </View>
              </View>
              <TouchableOpacity style={styles.button1}><Text style={{color:"#fff", alignSelf:"center"}}>Select Engineer</Text></TouchableOpacity>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}/>
        <TouchableOpacity
          style={styles.add}
          onPress={() => this.AutomaticBook()}
          underlayColor='#fff'>
          <Text style={styles.text4}>Automatic Booking</Text>
        </TouchableOpacity>      
      </View>
  );

  const SecondRoute = () => (
      <View style={[styles.scene, { backgroundColor: '#d3d3d3' }]}>
        <FlatList
          style={styles.list}
          horizontal={false}
          data={this.state.online_data1}
          renderItem={({item}) =>  
            <View style={styles.box}>
              <View style={{flexDirection:"row",}}>
                <View style={{width:"48%", marginTop:10, marginBottom:10,}}>
                  <Image
                   style={{alignSelf:"center", height:70, width:70, borderRadius:35, marginTop:10}}
                   source={{uri: item.image_path + item.image_name}} defaultSource={require('../assets/profile.jpg')}/>
                </View>
                <View style={{width:"48%", marginTop:10, marginBottom:10,}}>
                  <View style={styles.icon1}><Text style={styles.text}>{item.full_name}</Text></View>
                  <View style={styles.icon}><IoniconsI style={{marginTop:5}} name="ios-people" size={15} color="#ff8b1a"/><Text style={styles.text3}>{item.totalCall} visited</Text></View>
                  <View style={styles.icon}><IoniconsI style={{marginTop:5}} name="ios-star" size={15} color="#ff8b1a"/><Text style={styles.text3}>{item.rating}</Text></View>
                </View>
              </View>
              <TouchableOpacity style={styles.button1}><Text style={{color:"#fff", alignSelf:"center"}}>Select Engineer</Text></TouchableOpacity>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}/>
        <TouchableOpacity
          style={styles.add}
          onPress={() => this.AutomaticBook()}
          underlayColor='#fff'>
          <Text style={styles.text4}>Automatic Booking</Text>
        </TouchableOpacity>      
      </View>
  );

    return (
      <View style={styles.view}>
         <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
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
    width:"95%",
    backgroundColor:"#fff",
    borderRadius:5,
    alignSelf:"center",
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
  text:{
    marginTop:5,
  },
  text3:{
    alignSelf:"center",
    marginTop:5,
  },
  text4:{
    alignSelf:"center",
    color:"#fff",
    fontWeight:"bold",
  },
  text5:{
    color:"#a9a9a9",
  },
  icon:{
    flexDirection:"row",
  },
  Image:{
    marginTop:10,
    height:80,
    width:80,
    alignSelf:"center",
    margin:50,
  },
  button1:{
    borderRadius:2,
    backgroundColor:"#ff8b1a",
    width:"95%",
    height:35,
    justifyContent:"center",
    alignSelf:"center",
    marginBottom:5,
  },
  button2:{
    borderRadius:8,
    backgroundColor:"#ff8b1a",
    width:"95%",
    height:40,
    justifyContent:"center",
    marginBottom:5,
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
  add:{
    alignSelf:"center",
    width:"95%",
    justifyContent:"center",
    height:50,
    marginBottom:20,
    backgroundColor:'#ff8b1a',
    borderRadius:10,

  },
});


