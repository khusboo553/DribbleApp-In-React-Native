import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import DownloadClass from './DownloadScrenn.js';

const Navigation=StackNavigator({
   Download:{
     screen:DownloadClass
   },
});
// class RouteClass extends Component{
//   render(){
//     return(
//
//     )
//   }
// }
 export default Navigation;
