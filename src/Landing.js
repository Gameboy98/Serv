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

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mobile: '',
        otp:Math.floor(1000 + Math.random() * 9000),
        referal_code:'',
        code:'',
    };
  }

  async fetchData() {
  let url = "https://serve-api.appspot.com/api/customer/login/";
    const response = await fetch(url, {
             method: 'POST',
             body: JSON.stringify({
    mobile:this.state.mobile,
    otp:this.state.otp,
    referal_code:this.state.referal_code, }),
          });
    const data = await response.json();
    if(data.response.data.value.confirmation == 1){
       this.setState({code:data.response.data.value.customer_referal}); 
       this.props.navigation.navigate("Otpscreen", {otp:this.state.otp, mobile:this.state.mobile});
       this.storeData(data);
     }else {
       alert("User Don't Exist");
     }
  }

  CheckTextInput = () => {
    if (this.state.mobile == '') {
        alert('Please Enter Mobile');
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
                style={{width: 170, height: 128.7, marginTop:-20}}
                source={require('../assets/servlogo1.png')}/>
            </View> 
            <TextInput placeholder="Enter Mobile No." style={styles.textInput}  returnKeyType="done"
              keyboardType="numeric"
              onChangeText={(text) => this.setState({mobile: text}) }/>
            <TouchableOpacity
              onPress={this.CheckTextInput}
              style={styles.button2}  >
              <Text style={styles.text2}>Already User? Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Signup")}
              style={styles.button2}  >
              <Text style={styles.text2}>New User? Sign up here</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>By continuing, you are indicating that you have read and agree to the Terms of use and Privacy Policy</Text>
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
    height: 288,
    marginTop: "90%",
    alignSelf: "center"
  },
  rect: {
    width: 321,
    height: 328,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop:-70,
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
    marginTop:-40,
    marginBottom:20,
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
    alignSelf: "center"
  },
  button: {
    height: 23,
    backgroundColor: "#ffb347",
    marginTop: 34,
    marginRight: 174
  },
  text3Filler: {
    flex: 1
  },
  text3: {
    color: "#a9a9a9",
    justifyContent: "space-between",
    marginBottom: 4,
    marginLeft: 11
  },
  text1: {
    color: "#a9a9a9",
    alignSelf:"center",
    marginLeft: 11,
    fontSize:12,
    marginTop:10,
  },
  spinnerTextStyle: {
    color: '#FFF'
  }
});