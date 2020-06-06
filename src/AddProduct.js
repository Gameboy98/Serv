
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
import Autocomplete from 'react-native-autocomplete-input';
import ModalDropdown from 'react-native-modal-dropdown';

export default class AddProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_list:[],
      query:'',
      category:'',
      brand:'',
      date:'',
      address:'',
      model:'',
      barcode:'',
      invoice:'',
    };
  }

  componentDidMount() {
    this.fetchData();
   }

   async fetchData() {
    let url1 = "https://serve-api.appspot.com/api/product/list/";
      const response1 = await fetch(url1, {
               method: 'POST',
               body: JSON.stringify({}),
            });
      const data1 = await response1.json();
      const { data2: product_list } = json;
      this.setState({ product_list });   
  }

  findFilm(query) {
    if (query === '') {
      return [];
    }
    const { product_list } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return product_list.filter(product_list => product_list.title.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const product_list = this.findFilm(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <ScrollView style={styles.view} >
        <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.cat}>
          <Text style={styles.text3}>Category*</Text>
        </View>
        <View style={styles.cat}>
          <Text style={styles.text3}>Model Type*</Text>
        </View>
        <View style={styles.cat}>
          <Text style={styles.text3}>Brand*</Text>
        </View>
        <View style={styles.cat}>
          <Text style={styles.text3}>Purchased On*</Text>
        </View>
        <View style={styles.cat2}>
          <Text style={styles.text3}>Select Address*</Text>
          <TouchableOpacity
            style={styles.address}>
            <Text style={styles.text31}>Select Address</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cat1}>
          <Text style={styles.text3}>Model</Text>
          <View style={styles.model}>
            <TouchableOpacity
              style={styles.capture}>
              <Text style={styles.text4}>Capture Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.capture1}>

            </TouchableOpacity>
          </View>
          <Text style={styles.text5}>Or</Text>
          <TextInput placeholder="Enter model number" style={styles.input}
            keyboardType="numeric" returnKeyType="done"
            onChangeText={(text) => this.setState({model_number: text}) }/>
        </View>
        <View style={styles.cat1}>
          <Text style={styles.text3}>Model</Text>
          <TouchableOpacity
            style={styles.capture2}>
            <Text style={styles.text4}>Click here to scan</Text>
          </TouchableOpacity>
          <Text style={styles.text5}>Or</Text>
          <TextInput placeholder="Enter Barcode" style={styles.input}
            keyboardType="numeric" returnKeyType="done"
            onChangeText={(text) => this.setState({model_number: text}) }/>
        </View>
        <View style={styles.cat}>
          <Text style={styles.text3}>Add Invoice</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.text6}>SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.text6}>CANCEL</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    marginTop:120,
    backgroundColor:"#fff",
    height:"100%",
  },
  header:{
    width: "100%",
    marginTop:20,
    backgroundColor:"#ff8b1a",
    height: 60, 
    alignSelf:"center",
    flexDirection:"column",
  },
  text1:{
    marginTop:-15,
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
    fontSize:14,
    color:"#838383",
    marginLeft:10,
    marginTop:10,
  },
  text31:{
    fontSize:17,
    color:"#838383",
    marginLeft:10,
  },
  text4:{
    fontSize:14,
    color:"#838383",
    alignSelf:"center",
  },
  text5:{
    fontSize:14,
    color:"#ff8b1a",
    alignSelf:"center",
  },
  text6:{
    fontSize:14,     
    color:"#fff",
    fontWeight:"bold",
    alignSelf:"center",
  },
  view:{
    flex:1,
    marginTop:-120,
    height:1000,
    marginTop:0,
    backgroundColor:"#fff",
    height:"100%",
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth:0.5,
    borderRadius:8,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    width:"95%",
    textAlign:"center",
    borderColor:"#838383",
    alignSelf:"center",
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize:14,
    borderWidth:0.5,
    borderRadius:8,
    height:35,
    marginBottom:10,
  },
  cat:{
    alignSelf:"center",
    width:"95%",
    height:72,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:"#838383",
    marginTop:15,
  },
  cat1:{
    alignSelf:"center",
    width:"95%",
    height:135,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:"#838383",
    marginTop:15,
  },
  cat2:{
    alignSelf:"center",
    width:"95%",
    height:92,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:"#838383",
    marginTop:15,
  },
  capture:{
    width:"80%",
    height:35,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:"#838383",
    marginTop:8,
    marginLeft:10,
    justifyContent:"center",
  },
  capture2:{
    width:"95%",
    height:35,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:"#838383",
    marginTop:8,
    marginLeft:10,
    justifyContent:"center",
  },
  address:{
    width:"100%",
    height:55,
    justifyContent:"center",
  },
  capture1:{
    width:"10%",
    height:35,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:"#838383",
    marginTop:8,
    marginLeft:10,
    justifyContent:"center",
  },
  model:{
    flexDirection:"row"
  },
  buttons:{
    flexDirection:"row",
    width:"100%",
    height:100,
  },
  button:{
    width:"45%",
    borderRadius:3,
    backgroundColor:"#ff8b1a",
    height:40,
    justifyContent:"center",
    marginLeft:10,
    marginTop:20,
  },
});


