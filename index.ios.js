/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeClass from './DribbleFile/Home.js';
import UIClass from './DribbleFile/Route.js';
import {StackNavigator} from 'react-navigation';
import DownloadClass from './DribbleFile/DownloadScreen.js';


const Navigation=StackNavigator({
  UIclass:{
    screen:UIClass
  },
  Home:{
    screen:HomeClass
  },
   Download:{
     screen:DownloadClass
   },
});


export default class DribbleProject extends Component {
  render() {
    return (
      <UIClass/>
     );
  }
}


AppRegistry.registerComponent('DribbleProject', () => Navigation);
