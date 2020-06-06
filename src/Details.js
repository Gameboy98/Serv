
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

export default class DetailsScreen extends Component {
    constructor(props) {
    super(props);
    this.state = {
        item: props.navigation.getParam('item', ''),
        data:'',
        part:[],
        price:[],
        length:0,
    };
  }

  componentDidMount() {
    this.fetchData();
   }

   async fetchData() {
    let url0 = "https://serve-api.appspot.com/api/order/data/orderid/";
      const response0 = await fetch(url0, {
               method: 'POST',
               body: JSON.stringify({
      orderId:this.state.item.orderId}),
            });
      const data0 = await response0.json();
      this.setState({data:data0.complete_data[0]});
      this.setState({part:this.state.data.replacedPartList.split("|")});
      this.setState({price:this.state.data.replacedPartCostList.split("|")});
      this.setState({length:this.state.part.length}); 
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
    return (
      <ScrollView style={styles.view}>
        <View>{this.renderImage(this.state.item.category)}</View>
        <View style={styles.mod2}>
          <Text style={{alignSelf:"center", }}>{this.state.item.customer_name}</Text>
          <Text style={styles.text}>{this.state.item.address}</Text>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.partner_time}</Text></View>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.order_time}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.customer_mobile}</Text></View>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.status}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.productId}</Text></View>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.orderId}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.category}</Text></View>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.brand}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.item.problemType}</Text></View>
          <View style={styles.mod1}><Text style={styles.text1}>{this.state.data.invoiceTotalAmount}</Text></View>
        </View>
        <Text style={styles.text2}>Receipt Details:</Text>
          {this.state.part.map((value, index) => {
        return <View><View style={styles.mod}>
                  <View style={styles.mod1}><Text style={styles.text}>Part Name</Text></View>
                  <View style={styles.mod1}><Text style={styles.text}>{value}</Text></View>
                </View>
                <View style={styles.mod}>
                  <View style={styles.mod1}><Text style={styles.text}>Part Price</Text></View>
                  <View style={styles.mod1}><Text style={styles.text}>{this.state.price[index]}</Text></View>
                </View></View>
      })}
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>Labour Charge</Text></View>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.data.totalLabourCharge}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>Remarks</Text></View>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.data.remarks}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>Job Done</Text></View>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.data.jobDone}</Text></View>
        </View>
        <View style={styles.mod}>
          <View style={styles.mod1}><Text style={styles.text}>Total Tax</Text></View>
          <View style={styles.mod1}><Text style={styles.text}>{this.state.data.invoiceTotalAmount}</Text></View>
        </View>
        <View style={styles.mod}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")} style={styles.button}><Text style={styles.text3}>Ok</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Invoice")} style={styles.button}><Text style={styles.text3}>Invoice</Text></TouchableOpacity>
        </View>
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
  },
  text1:{
    fontSize:14,
    fontWeight:"bold",
  },
  text2:{
    fontSize:14,
    fontWeight:"bold",
    margin:10,
  },
  text3:{
    fontSize:14,
    fontWeight:"bold",
    alignSelf:"center",
    color:"#fff",
    marginTop:-17,
  },
  button: {
    backgroundColor: '#ff8b1a',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"45%",
    margin:"2.5%",
    borderRadius:10,
    height:40,
  },
});


