/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Loading from './screens/Loading';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Main from './screens/Main';
import Calc from './screens/Calc';
import Slot from './screens/Slot';
import Worker from './screens/Worker';

const AppStack = createStackNavigator({ 
  Login: Login,
  Main: Main,
  Worker: Worker,
  Calc: Calc,
  Slot: Slot, });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Loading,
    Login: Login,
    SignUp: SignUp,
    Main: Main,
    Worker: Worker,
    Calc: Calc,
    Slot: Slot,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));