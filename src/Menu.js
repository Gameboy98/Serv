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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
       { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
     );
   }

   async fetchData() {

    let url0 = "https://locationapi-99.appspot.com/location/reverse?lat="+ this.state.latitude+ "&lon="+ this.state.longitude;
      const response0 = await fetch(url0, {
               method: 'GET',
            });
      const data0 = await response0.json();
      this.setState({place:data0.address.town});     
  }

  Logout = () => {
    this.props.navigation.navigate("Landing");
    this.storeData();
  };  

  async storeData() {
    try {
       await AsyncStorage.setItem("mobile",'');
       await AsyncStorage.setItem("isLogin","0");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <Header style={styles.header}>
          <Text style={styles.text1}>YOU ARE IN</Text>
          <Text style={styles.text2}>{this.state.place}</Text>
        </Header>
        <ScrollView style={styles.view}>
          <View style={styles.container}>
            <View style={styles.container1}>
              <Text style={styles.text3}>My Appliances data</Text>
            </View>
            <TouchableOpacity style={styles.container1} onPress={() => this.props.navigation.navigate("Add")}>
              <Text style={styles.text4}>Add Appliances</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1} onPress={() => this.props.navigation.navigate("Address")}>
              <Text style={styles.text4}>Add Address</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.container1}>
              <Text style={styles.text3}>Buy Appliance Care</Text>
            </View>
            <TouchableOpacity style={styles.container1}>
              <Text style={styles.text4}>Buy Appliance Care Plan</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1}>
              <Text style={styles.text4}>Buy New Appliances</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1}>
              <Text style={styles.text4}>Scrap Old Appliances</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1} onPress={() => this.props.navigation.navigate("Terms")}>
              <Text style={styles.text4}>View Terms and Conditions</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.container1}>
              <Text style={styles.text3}>Share Happiness</Text>
            </View>
            <TouchableOpacity style={styles.container1} onPress={() => this.props.navigation.navigate("Refer")}>
              <Text style={styles.text4}>Refer Friends as Customers</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1} onPress={() => this.props.navigation.navigate("ReferEng")}>
              <Text style={styles.text4}>Refer Service Engineer</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1}>
              <Text style={styles.text4}>Serv Advisor</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.container1}>
              <Text style={styles.text3}>Other</Text>
            </View>
            <TouchableOpacity style={styles.container1} onPress={() => this.props.navigation.navigate("Profile")}>
              <Text style={styles.text4}>Profile Update</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1}>
              <Text style={styles.text4}>Pay / Recharge</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1}>
              <Text style={styles.text4}>Terms of use</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container1}>
              <Text style={styles.text4}>Privacy policy</Text>
              <Icon style={styles.Icon} name="chevron-right" size={20} color="#d3d3d3"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.Logout} style={styles.container1}>
              <Text style={styles.text4}>Logout</Text>
              <Icon style={styles.Icon} name="logout" size={25} color="#d3d3d3"/>
            </TouchableOpacity>
          </View>
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
  text3:{
    fontSize:17,
    color:"#000",
    fontWeight:"bold",
    marginLeft:10,
    marginTop:15,
  },
  text4:{
    width:"88%",
    fontSize:14,
    color:"#a9a9a9",
    marginLeft:10,
    marginTop:15,
  },
  Icon:{
    marginTop:15,
  },
  container:{
    width:"96%",
    marginTop:12,
    borderWidth:0.5,
    borderColor:"#a9a9a9",
    alignSelf:"center",
    borderRadius:5,
  },
  container1:{
    flexDirection:"row",
    borderColor:"#d3d3d3",
    borderWidth:0.3,
    height:45,
  },
  view:{
    flex:1,
  },
});
