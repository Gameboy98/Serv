import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/serv1.png'),
        require('../assets/serv2.png'),
        require('../assets/serv3.png'),
        require('../assets/serv4.png'),
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cont1}>
        <SliderBox
          style={styles.rect1}
          images={this.state.images}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            width:60,
            marginTop:0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            marginTop:10,
            backgroundColor: "#f79623"
          }}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
        <View style={styles.rect}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Landing")}
            style={styles.button}  >
            <Text style={styles.text2}>SignIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Sign")}
            style={styles.button2}  >
            <Text style={styles.text}>SignUp</Text>
          </TouchableOpacity>
          <Text style={styles.text1}>By continuing, you are indicating that you have read and agree to the Terms of use and Privacy Policy</Text>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cont1:{
    height:"70%",
    width:"90%",
    marginTop:10
  },
  button: {
    width: "108%",
    height: 50,
    backgroundColor: "#ff8b1a",
    borderRadius: 8,
    alignSelf:"center",
    justifyContent: "center",
    marginTop: 20,
  },
  button2: {
    width: "108%",
    height: 50,
    backgroundColor: "#ffffff",
    borderColor:"#000000",
    borderWidth:0.8,
    borderRadius: 8,
    alignSelf:"center",
    justifyContent: "center",
    marginTop: 5,
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text: {
    color: "#000000",
    alignSelf: "center"
  },
  text1: {
    marginTop:5,
    color: "#a9a9a9",
    alignSelf: "center"
  },
  rect: {
    width: 321,
    height: 328,
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf:"center",
  },
  rect1: {
    width: 321,
    height: 458,
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf:"center",
    marginTop:60,
  },
});