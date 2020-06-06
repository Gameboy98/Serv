
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

import { CheckBox } from 'react-native-elements';

export default class BuyPlanScreen extends Component {
    constructor(props) {
    super(props);
    this.state = {
      checked:0,
    };
  }

  CheckTextInput = () => {
    if (this.state.checked == 0) {
        alert('Please Confirm');
      } else {
        this.props.navigation.navigate("Main");
      }
  };

  render() {
    return (
      <View style={styles.view}>
        <ScrollView>
        <FlatList
          style={styles.list}
          horizontal={false}
          data={this.state.product_Data}  
          renderItem={({item}) =>  
            <View style={styles.box}>
              <Text style={styles.text4}>{item.age} days</Text>
              <Text style={styles.text4}>{item.category}</Text>
              <Text style={styles.text4}>{item.tag}</Text>
              {(item.status=="unassigned")? <Text style={styles.text4}>functional</Text>: <Text style={styles.text4}>{item.status}</Text>}
              <TouchableOpacity style={styles.call}><FeatherI style={styles.callIcon} name="phone-call" size={20} color="#ff8b1a"/><Text style={styles.text5}>Call Now</Text></TouchableOpacity>
              <TouchableOpacity style={{marginBottom:5}}><Text style={styles.text6}>Buy Plan Simply</Text><Text style={styles.text6}>Serv</Text></TouchableOpacity>
            </View>
        }
          keyExtractor={(item, index) => index.toString()}/>      
        </ScrollView>
        {this.problem()}
        <CheckBox
          center
          title='I hereby confirm that the product is in working condition and above provided information is true at this time.'
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        <TouchableOpacity
          style={styles.add}
          onPress={this.CheckTextInput}
          underlayColor='#fff'>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
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
  add:{
    alignSelf:"center",
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    height:50,
    marginBottom:23,
    backgroundColor:'#ff8b1a',
    borderRadius:10,
  },
  text:{
    alignSelf:"center",
    fontSize:18,
    fontWeight:"bold",
    color:"#ffffff",
  },
});


