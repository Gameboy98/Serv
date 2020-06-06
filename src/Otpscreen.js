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
  TextInput,
  AppRegistry,
  AsyncStorage,Alert
} from 'react-native';

//import Spinner from 'react-native-loading-spinner-overlay';

export default class Otpscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        otp: props.navigation.getParam('otp', ''),
        mobile: props.navigation.getParam('mobile', ''),
        otp1:'',
    };
  }


  CheckTextInput = () => {
    if (this.state.otp1 == '') {
        alert("Enter OTP");
      } else {
        this.CheckOTP()
      }
  };

  CheckOTP = () => {
    if (this.state.otp1 == this.state.otp) {
        this.storeData();
        this.props.navigation.navigate("Main");
      } else {
        alert('Wrong OTP');
      }
  };

  async storeData() {
    try {
       await AsyncStorage.setItem("isLogin", "1");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <View style={styles.rect}>
            <View style={styles.image}>
               <Text style={styles.text4}>Enter Verification Code</Text>
                <Text style={styles.text5}>We have sent you the 4 digit verification code</Text>
                 <Text style={styles.text4}>{this.state.mobile}</Text>
            </View> 
            <TextInput placeholder="Enter OTP" style={styles.textInput} returnKeyType="done"
              keyboardType="numeric"
              onChangeText={(text) => this.setState({otp1: text}) }/>
            <TouchableOpacity
              onPress={this.CheckTextInput} 
              style={styles.button2}  >
              <Text style={styles.text2}>Validate OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: 321,
    height: 200,
    marginTop: 100,
    alignSelf: "center"
  },
  rect: {
    width: 321,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf:"center",
  },
  textInput: {
    width: "105%",
    height: 50,
    color: "#121212",
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1,
    alignSelf: "center",
    textAlign:"center",
    margin:5,
  },
  image: {
    flex: 1,
    alignSelf:"center",
  },
  button2: {
    width: "105%",
    height: 50,
    backgroundColor: "#ff8b1a",
    borderRadius: 8,
    alignSelf:"center",
    justifyContent: "center",
    marginTop: 20,
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight:"bold"
  },
  text4: {
    fontSize:15,
    alignSelf: "center"
  },
  text5: {
    fontSize:12,
    alignSelf: "center"
  },
  button: {
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 34,
    marginRight: 174
  },
  text3Filler: {
    flex: 1
  },
  text3: {
    color: "#e9602a",
    justifyContent: "space-between",
    marginBottom: 4,
    marginLeft: 11
  },
  spinnerTextStyle: {
    color: '#FFF'
  }
});
