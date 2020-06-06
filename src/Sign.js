import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  AsyncStorage,Alert
} from "react-native";
//import Spinner from 'react-native-loading-spinner-overlay';

export default class SignScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        referal_code: '',
        mobile: '',
        otp:Math.floor(1000 + Math.random() * 9000),
    };
  }

  async fetchData() {
  let url = "https://serve-api.appspot.com/api/user/singup/";
    const response = await fetch(url, {
             method: 'POST',
             body: JSON.stringify({
    mobile:this.state.mobile,
    otp:this.state.otp,
    referal_code:this.state.referal_code }),
          });
    const data = await response.json();
    if(data.response != "Success"){
       alert(data.response.message);
     }else {
       this.storeData(data);
       this.props.navigation.navigate("Otpscreen", {otp:this.state.otp, mobile:this.state.mobile});
     }
  }

  CheckTextInput = () => {
    var val = Math.floor(1000 + Math.random() * 9000);
        this.setState({ otp: val });
    if (this.state.mobile == '' ) {
        alert('Please Enter Fields');
      } else {
        this.fetchData();
      }
  };

  async storeData(response) {
    try {
       await AsyncStorage.setItem("mobile",this.state.mobile);
       await AsyncStorage.setItem("code",this.state.code);
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
            <Image 
                style={{width: 170, height: 128.7}}
                source={require('../assets/servlogo1.png')}/>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.text1}>Mobile Number</Text>
            <TextInput placeholder="Enter Mobile No." style={styles.textInput}
              keyboardType="numeric" returnKeyType="done"
              onChangeText={(text) => this.setState({mobile: text}) }/>
            <Text style={styles.text1}>Enter Referral Code</Text>
            <TextInput placeholder="Enter Referral Code" style={styles.textInput}
              keyboardType="numeric" returnKeyType="done"
              onChangeText={(text) => this.setState({referal_code: text}) }/>
          </View>
            <TouchableOpacity
              onPress={this.CheckTextInput}
              style={styles.button2}  >
              <Text style={styles.text2}>SignUp</Text>
            </TouchableOpacity>
            <Text style={styles.text4}>By continuing, you are indicating that you have read and agree to the Terms of use and Privacy Policy</Text>
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
    height: 108,
    marginTop: 188,
    alignSelf: "center"
  },
  rect: {
    width: 300,
    height: 440,
    alignSelf:"center",
    backgroundColor: "rgba(255,255,255,1)",
    marginTop:-100,
  },

  textInput: {
    width: 335,
    height: 50,
    color: "#121212",
    borderRadius: 5,
    borderColor: "#e9602a",
    borderWidth: 1,
    textAlign: "center",
    alignSelf: "center",
  },
  image: {
    flex: 1,
    alignSelf:"center",
    marginTop:20,
    marginBottom:20,
  },
  button2: {
    width: 335,
    height: 50,
    backgroundColor: "#ff8b1a",
    borderRadius: 5,
    borderColor: "#e9602a",
    borderWidth: 1,
    alignSelf:"center",
    justifyContent: "center",
    marginTop: 19,
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text1: {
    color: "#000000",
    fontWeight:"bold",
    alignSelf: "center",
    marginTop:10,
    marginBottom:10,
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
  text4: {
    color: "#a9a9a9",
    alignSelf:"center",
    fontSize:12,
    marginTop:10,
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
