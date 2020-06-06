  /* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Home';
import BookingsScreen from './Bookings';
import WalletScreen from './Wallet';
import MenuScreen from './Menu';

const iconHome = require('../assets/tabbar/home1.png');
const iconBookings = require('../assets/tabbar/calendar.png');
const iconWallet = require('../assets/tabbar/wallet.png');
const iconMenu = require('../assets/tabbar/menu.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    paddingHorizontal: 20,
  },
  tabBarIcon: {
    width: 23,
    height: 20,
  },
  tabBarIconFocused: {
    tintColor: "#ff8b1a"
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Bookings: {
      screen: BookingsScreen,
      navigationOptions: {
        header: null,
      },
    },
    Wallet: {
      screen: WalletScreen,
      navigationOptions: {
        header: null,
      },
    },
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Bookings':
            iconSource = iconBookings;
            break;
          case 'Wallet':
            iconSource = iconWallet;
            break;
          case 'Menu':
            iconSource = iconMenu;
            break;
          default:
            iconSource = iconHome;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor:'#ff8b1a',
      inactiveTintColor:'#a9a9a9',
      showLabel: true,
      style: {
        backgroundColor: "#ffffff",
        borderTopWidth: 2,
        borderTopColor: '#ffffff',
      },
      labelStyle: {
        color: "#a9a9a9",
        fontweight:"bold",
        fontSize: 15,
      },
    },
  },
);
