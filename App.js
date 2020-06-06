import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,Platform, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
const { width } = Dimensions.get('window');

import MainTabNavigator from './src/MainTabNavigator';
import SplashScreen from './src/SplashScreen';
import LandingScreen from './src/Landing';
import SignupScreen from './src/Signup';
import Otpscreen from './src/Otpscreen';
import SignScreen from './src/Sign';
import AddProductScreen from './src/AddProduct';
import AddressScreen from './src/Address';
import TermsScreen from './src/Terms';
import ReferScreen from './src/Refer';
import ReferEngScreen from './src/ReferEng';
import ProfileScreen from './src/Profile';
import ProfileEditScreen from './src/ProfileEdit';
import DetailsScreen from './src/Details';
import BuyPlanScreen from './src/BuyPlan';
import InvoiceScreen from './src/Invoice';
import VerifyIdScreen from './src/VerifyId';
import OtpDetailsScreen from './src/OtpDetails';
import ComplaintScreen from './src/Complaint';
import SelectEngScreen from './src/SelectEng';
import PayScreen from './src/Pay';

const headerBackground = require('./assets/header.png');

const stackNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Pay: {
      screen: PayScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Landing: {
      screen: LandingScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Sign: {
      screen: SignScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Otpscreen: {
      screen: Otpscreen,
      navigationOptions: () => ({
        title: 'Verify Mobile Number',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Add: {
      screen: AddProductScreen,
      navigationOptions: () => ({
        title: '+ Add your Product',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Address: {
      screen: AddressScreen,
      navigationOptions: () => ({
        title: 'Address',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Terms: {
      screen: TermsScreen,
      navigationOptions: () => ({
        title: 'Simply Serv Plan T&C',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Refer: {
      screen: ReferScreen,
      navigationOptions: () => ({
        title: 'Refer Friends',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    ReferEng: {
      screen: ReferEngScreen,
      navigationOptions: () => ({
        title: 'Add Service Engineer',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: 'Personal details',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    ProfileEdit: {
      screen: ProfileEditScreen,
      navigationOptions: () => ({
        title: 'Personal details',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        title: 'Order History details',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    BuyPlan: {
      screen: BuyPlanScreen,
      navigationOptions: () => ({
        title: 'Plan Simply Serv QC',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Invoice: {
      screen: InvoiceScreen,
      navigationOptions: () => ({
        title: 'Transaction Pdf',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    VerifyId: {
      screen: VerifyIdScreen,
      navigationOptions: () => ({
        title: 'Verified Id',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    OtpDetails: {
      screen: OtpDetailsScreen,
      navigationOptions: () => ({
        title: 'Order details',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Complaint: {
      screen: ComplaintScreen,
      navigationOptions: () => ({
        title: 'Complaint',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    SelectEng: {
      screen: SelectEngScreen,
      navigationOptions: () => ({
        title: 'Select Engineer',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight:"bold",
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
  },
);


export default createAppContainer(stackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 18,
    height: 25,
    marginBottom:10
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 0,
    marginBottom:5,
  },
  iconRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15
  },
  icon2: {
    color: "rgba(250,250,250,1)",
    fontSize: 25
  }
});
