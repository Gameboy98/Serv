
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
  Picker,
  AsyncStorage,Alert,
  KeyboardAvoidingView,
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

export default class ComplaintScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item: props.navigation.getParam('item', ''),
        complain_data:[],
        val:"",
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

   async fetchData() {      
    let url1 = "https://serve-api.appspot.com/api/get/complain/list/";
      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({
      product:this.state.item.category}),
            });
      const data1 = await response1.json();
      this.setState({complain_data:data1.complain_data});
      console.log(this.state.complain_data);    
  }  

  render() {
    return (
      <View style={styles.view}>
          <View style={styles.cat}>
            <Text style={styles.text1}>Problem Type</Text>
          </View>
          <Text style={{fontSize:22,marginLeft:"2.5%", marginTop:"5%"}}>*  Price ₹250</Text>
          <Text style={{fontSize:14,marginLeft:"20%", marginTop:"2.5%", color:"#a9a9a9"}}>* 1st Service Free</Text>
          <Text style={{fontSize:14,marginLeft:"20%", marginTop:"2.5%", color:"#a9a9a9"}}>* Code on Payments Page</Text>
          <Text style={{fontSize:14,marginLeft:"20%", marginTop:"2.5%", color:"#a9a9a9"}}>* 1st For first time user of Serve Simplified</Text>
          <Text style={{fontSize:14,marginLeft:"20%", marginTop:"2.5%", color:"#a9a9a9"}}>* 1st Pay as per hourly charges, follow rate-card shared next</Text>
          <Text style={{fontSize:14,marginLeft:"20%", marginTop:"2.5%", color:"#a9a9a9"}}>* For first 30 min only</Text>
         <TouchableOpacity onPress={() => this.props.navigation.navigate("SelectEng")} style={styles.button}><Text style={styles.text}>Next</Text></TouchableOpacity>
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
  text:{
    marginTop:5,
    fontWeight:"bold",
    alignSelf:"center",
    color:"#fff",
  },
  text1:{
    fontSize:14,
    color:"#838383",
    marginLeft:10,
    marginTop:10,
  },
  cat:{
    alignSelf:"center",
    width:"95%",
    height:72,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:"#838383",
    marginTop:45,
  },
  button: {
    marginTop:200,
    backgroundColor: '#ff8b1a',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"baseline",
    width:"95%",
    margin:"2.5%",
    borderRadius:10,
    height:40,
  },
});


