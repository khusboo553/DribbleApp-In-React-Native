import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeClass from './Home.js';
import TeamsClass from './Team.js';
import ReboundsClass from './Rebounds.js';
import singleToneDataManager from './SingleToneClass.js';
import APIProject from './APIHelperClass.js'
import UserClass from './UserModelClass.js'
import {StackNavigator} from 'react-navigation';

var ScrollableTabView = require('react-native-scrollable-tab-view');
var self;
export default class UIClass extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home Page',

      // headerLeft:(<Button onPress={() => navigation.goBack(null)} />)
  });
  constructor(){
    super();
    this.state={
      ArrayDetails:null,
    }
  }
  static sharedInstance = null;

  static getInstance() {

      if (this.sharedInstance == null) {
          this.sharedInstance = new UIClass();
      }

      return this.sharedInstance;
  }
async componentWillMount(){
    console.log("sdfhsg");
  await APIProject.getInstance().getDetailsFromApi();
  await UserClass.getInstance()._setDetailsFunc();
  console.log(singleToneDataManager.getInstance().get_DictDetailsArray().length);
 if (singleToneDataManager.getInstance().get_DictDetailsArray().length!==0) {
    this.setState({
      ArrayDetails:singleToneDataManager.getInstance().get_DictDetailsArray(),
    });
    console.log("ghgh");
  }

  }
  render() {
     self=this;
      return (
        <ScrollableTabView style={{marginTop:40}}>
          <HomeClass tabLabel="Home" address={self}/>
          <TeamsClass tabLabel="Team" address={self} />
          <ReboundsClass tabLabel="Rebounds" address={self} />
        </ScrollableTabView>
     );
  }
}
