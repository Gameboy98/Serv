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
} from 'react-native';

import Modal from 'react-native-modal';
import {Header, Title, Body} from 'native-base';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FeatherI from 'react-native-vector-icons/Feather';

const icon = require('../assets/icon1.png');
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
const iconWarranty = require('../assets/app/warranty.png');
const Profile = require('../assets/profile.jpg');
export default class HomeScreen extends Component {
  state = {
    visibleModal: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile:'',
      searchString:'',
      product_Data:[],
      product:'',
      count:0,
    };
  }

  async componentDidMount() {
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

    let url0 = "https://locationapi-99.appspot.com/location/reverse?lat="+ this.state.latitude+ "&lon="+ this.state.longitude;
      const response0 = await fetch(url0, {
               method: 'GET',
            });
      const data0 = await response0.json();
      this.setState({place:data0.address.town});

    let url1 = "https://serve-api.appspot.com/api/get/product/list/updated/";
    let var1 =  await AsyncStorage.getItem("mobile");  
      this.setState({mobile:var1});
      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      mobile:this.state.mobile }),
            });
      const data1 = await response1.json();
      this.setState({product_Data:data1.product_data});    
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
    case 'Dish Washer':
        return (<Image resizeMode="contain" source={iconDishWasher} style={[styles.Image]} />);
    case 'Home UPS':
        return (<Image resizeMode="contain" source={iconUps} style={[styles.Image]} />);
    case 'LED Television':
        return (<Image resizeMode="contain" source={iconTV} style={[styles.Image]} />);
    default:
        return (
            <Text>{'Null'}</Text>
        );
    }
  }

  modalCall(){
    return(
      <Modal isVisible={this.state.visibleModal === 3}>
          <View style={styles.modalContent}>
          <View style={{width:"100%", marginTop:3, justifyContent:"center", height:70,}}><Text style={styles.text11}>Your product is within 1 year. It's advised to call Brand Call center</Text></View>
            <View style={styles.mod}>
              <View style={styles.mod12}><View><Text style={styles.text4}>Your Brand :-</Text><Text style={styles.text4}>Call Center No :-</Text></View></View>
              <View style={styles.mod12}><Text style={styles.text4}>{this.state.product.age}</Text></View>
            </View>
            <View style={styles.mod}>
              <TouchableOpacity onPress={() => this.setState({ visibleModal: null })} style={styles.button1}><Text style={styles.text512}>Confirm</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Complaint", {item:this.state.product}); this.setState({ visibleModal: null });}} style={styles.button1}><Text style={styles.text512}>Call</Text><Image resizeMode="contain" source={icon} style={[styles.Image1]} /></TouchableOpacity>
            </View>
          </View>
        </Modal>
      );
  }

  CheckCallStatus = (item) => {
    if (item.age >= 365) {
      this.props.navigation.navigate("Complaint", {item:this.state.product});
      } else {
        this.setState({ visibleModal: 3 });
        this.modalCall()
      }
  };

  modal(){
    return(
      <View>
        <Modal isVisible={this.state.visibleModal === 1}>
          <View style={styles.modalContent}>
            {this.renderImage(this.state.product.category)}
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Product Id</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.productId}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Brand</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.brand}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Model No.</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.modalNo}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Category</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.category}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Purchased On</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.date}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Status</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.status}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Order Id</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.orderId}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Eng. Name</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.partner_name}</Text></View>
            </View>
            <Text style={styles.text8}>Address:</Text>
            <Text style={styles.text9}>{this.state.product.address}</Text>
            <View style={styles.mod}>
              <TouchableOpacity onPress={() => this.setState({ visibleModal: null })} style={styles.button}><Text style={styles.text10}>Ok</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("Add"); this.setState({ visibleModal: null });}} style={styles.button}><Text style={styles.text10}>Add More</Text></TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={this.state.visibleModal === 2}>
          <View style={styles.modalContent}>
            <View style={{backgroundColor:"#ff8b1a", width:"100%", justifyContent:"center", height:35,}}><Text style={styles.text}>AMC Details</Text></View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Policy Id</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.policyId}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Validity Start</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.validityStart}</Text></View>
            </View>
            <View style={styles.mod}>
              <View style={styles.mod1}><Text style={styles.text7}>Validity End</Text></View>
              <View style={styles.mod1}><Text style={styles.text7}>{this.state.product.validityEnd}</Text></View>
            </View>
            <View style={styles.mod}>
              <TouchableOpacity onPress={() => this.setState({ visibleModal: null })} style={styles.button}><Text style={styles.text10}>Ok</Text></TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <Header style={styles.header}>
          <Text style={styles.text1}>YOU ARE IN</Text>
          <Text style={styles.text2}>{this.state.place}</Text>
        </Header>
        <View style={styles.view}>      
          <View style={styles.searchSection}>
            <FontAwesomeI style={styles.searchIcon} name="search" size={20} color="#d3d3d3"/>
            <TextInput
              style={styles.input}
              placeholder="Search Here"
              onChangeText={(text) => this.setState({searchString: text})}
              underlineColorAndroid="transparent"/>
            <FontAwesomeI style={styles.searchIcon} name="close" size={20} color="#d3d3d3"/>
          </View>
        <ScrollView>
          <View style={styles.body1}>
             <FlatList
                style={styles.list}
                horizontal={false}
                data={this.state.product_Data}
                renderItem={({item}) => {
                  return(
                    <View style={styles.box}>
                    <Text style={styles.text4}>{item.age} days</Text>
                    <Text style={styles.text4}>{item.category}</Text>
                    <TouchableOpacity onPress={() => {this.setState({product:item}); this.setState({ visibleModal: 1 });}}>{this.renderImage(item.category)}</TouchableOpacity>
                    {this.modal()}
                    <Text style={styles.text4}>{item.tag}</Text>
                    {(item.status=="unassigned")? <Text style={styles.text4}>Functional</Text>: <Text style={styles.text4}>{item.status}</Text>}
                    {(item.status=="unassigned")?<TouchableOpacity onPress={() => {this.setState({product:item}); this.CheckCallStatus(item);}} style={styles.call}><FeatherI style={styles.callIcon} name="phone-call" size={20} color="#ff8b1a"/><Text style={styles.text5}>Call Now</Text></TouchableOpacity>:
                     (item.status=="Assigned")?<View style={styles.call}><FeatherI style={styles.callIcon} name="phone-call" size={20} color="#a9a9a9"/><Text style={styles.text51}>Called</Text></View>:
                     (item.status=="oncall")?<View style={styles.call}><FeatherI style={styles.callIcon} name="phone-call" size={20} color="#a9a9a9"/><Text style={styles.text51}>Call Now</Text></View>:null}
                    {(item.amcStatus==0)?<TouchableOpacity style={{marginBottom:5}}><Text style={styles.text6}>Buy Plan Simply</Text><Text style={styles.text6}>Serv</Text></TouchableOpacity>:
                     (item.amcStatus==1)?<TouchableOpacity onPress={() => {this.setState({product:item}); this.setState({ visibleModal: 2 });}} style={{marginBottom:5, flexDirection:"row", justifyContent: 'center',}}><Image style={{height:28, width:28, alignSelf:"center",marginTop:6, marginRight:5,}} source={iconWarranty}/><View><Text style={styles.text61}>Pending</Text><Text style={styles.text6}>approval</Text></View></TouchableOpacity>:
                     (item.amcStatus==2 && item.age<365)?<TouchableOpacity onPress={() => {this.setState({product:item}); this.setState({ visibleModal: 2 });}} style={{marginBottom:5, flexDirection:"row", justifyContent: 'center',}}><Image style={{height:28, width:28, alignSelf:"center",marginTop:6,marginRight:5,}} source={iconWarranty}/><View><Text style={styles.text61}>365 days left</Text></View></TouchableOpacity>:
                     (item.amcStatus==2 && item.age>=365)?<TouchableOpacity onPress={() => {this.setState({product:item}); this.setState({ visibleModal: 2 });}} style={{marginBottom:5, flexDirection:"row", justifyContent: 'center',}}><Image style={{height:28, width:28, alignSelf:"center",marginTop:6,marginRight:5,}} source={iconWarranty}/><View><Text style={styles.text61}>{item.age} days left</Text></View></TouchableOpacity>:null}
                  </View>
                    )}}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}/>      
          </View>
        </ScrollView>
        </View>
        { (this.state.count>0)?
          <TouchableOpacity
          style={styles.add1}
          onPress={() => this.props.navigation.navigate("BuyPlan")}
          underlayColor='#fff'>
          <Text style={{fontSize:18, color:"#ffffff", marginTop:14,width:"60%",}}>{this.state.count} Selected</Text>
          <Text style={styles.text}>Proceed</Text>
          <FeatherI style={{padding:10}} name="arrow-right" size={30} color="#fff"/>
        </TouchableOpacity>:    
          <TouchableOpacity
            style={styles.add}
            onPress={() => this.props.navigation.navigate("Add")}
            underlayColor='#fff'>
            <Text style={styles.text}>Add Product</Text>
          </TouchableOpacity>}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  main:{
    backgroundColor:"#d3d3d3",
    height:"100%",
  },
  text:{
    alignSelf:"center",
    fontSize:18,
    fontWeight:"bold",
    color:"#ffffff",
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
  text4:{
    fontSize:14,
    color:"#000000",
    textAlign:"center",
    marginTop:2,
  },
  text5:{
    fontSize:14,
    color:"#000000",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10,
    marginLeft:5,
  },
  text51:{
    fontSize:14,
    color:"#a9a9a9",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10,
    marginLeft:5,
  },
  text512:{
    fontSize:14,
    color:"#000000",
    fontWeight:"bold",
    textAlign:"center",
  },
  text6:{
    fontSize:14,
    color:"#000000",
    fontWeight:"bold",
    marginTop:2,
    textAlign:"center",
  },
  text61:{
    fontSize:14,
    color:"#000000",
    fontWeight:"bold",
    marginTop:10,
    textAlign:"center",
  },
  text7:{
    fontSize:14,
    color:"#a9a9a9",
    marginLeft:5,
  },
  text8:{
    fontSize:14,
    color:"#a9a9a9",
    alignSelf:"center",
    fontWeight:"bold",
    marginTop:5
  },
  text9:{
    fontSize:14,
    color:"#a9a9a9",
    alignSelf:"center",
    marginTop:5,
    width:"90%"
  },
  text10:{
    fontSize:17,
    color:"#ff8b1a",
    fontWeight:"bold",
  },
  text11:{
    fontSize:17,
    color:"#000000",
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10,
  },
  view:{
    flex:1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list:{
    marginTop:-5,
  },
  mod:{
    flexDirection:"row",
  },
  mod1:{
    borderWidth:0.5,
    borderColor:"#d3d3d3",
    marginTop:3,
    justifyContent:"center",
    width:150,
    height:35,
  },
  mod12:{
    marginTop:3,
    justifyContent:"center",
    width:150,
    height:35,
    borderRadius:2,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:2,
    height:40,
    marginTop:6,
  },
  searchIcon: {
    padding: 10,
 },
callIcon: {
    marginTop: 10,
 },
  call: {
    width:"100%",
    height:40,
    borderWidth:0.8,
    borderColor:"#d3d3d3",
    justifyContent:"center",
    marginTop:10,
    flexDirection:"row",
},
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize:18,
    height:40,
},
  add:{
    alignSelf:"center",
    width:"95%",
    justifyContent:"center",
    height:50,
    marginBottom:3,
    backgroundColor:'#ff8b1a',
    borderRadius:10,
  },
  add1:{
    alignSelf:"center",
    width:"100%",
    justifyContent:"center",
    height:50,
    marginBottom:3,
    backgroundColor:'#000',
    flexDirection:"row",
  },
  body1:{
    marginTop:5,
    marginLeft:-8,
  },
  Image:{
    marginTop:10,
    height:80,
    width:80,
    alignSelf:"center",
  },
  Image1:{
    height:16,
    width:16,
    marginLeft:10,
    alignSelf:"center",
  },
  box:{
    backgroundColor:"#ffffff",
    borderRadius:3,
    marginLeft:14,
    width:"45.5%",
    textAlign:"center",
    alignSelf:"center",
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
    marginTop:10,
  },
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"40%",
    marginTop:15,
    marginBottom:15,
  },
  button1: {
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"45%",
    height:35,
    marginTop:15,
    marginBottom:15,
    flexDirection:"row",
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    width:"95%"
  },
});


