import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import HomeClass from './Home.js';
// import TeamsClass from './Team.js';
// import ReboundsClass from './Rebounds.js';
import singleToneDataManager from './SingleToneClass.js';
import UIClass from './Route.js';

var ScrollableTabView = require('react-native-scrollable-tab-view');



var ArrayResponse=[];
export default class APIProject extends Component {

  static sharedInstance = null;
  static getInstance() {

      if (this.sharedInstance == null) {
          this.sharedInstance = new APIProject();
      }

      return this.sharedInstance;
  }

 async getDetailsFromApi() {
   var ServiceArray=  singleToneDataManager.getInstance().ServiceArray;
    for (var i = 0; i < ServiceArray.length; i++) {
      await fetch(ServiceArray[i]["name"])
         .then((response) => response.json())
        .then((responseJson) => {
          if (ArrayResponse==undefined) {

            ArrayResponse=(responseJson);

          }else {
            ArrayResponse.push(responseJson);

          }
              /*return responseJson.movies; */
          //  alert("result:"+JSON.stringify(responseJson))
      //     this.setState({
      //  dataSource:this.state.dataSource.cloneWithRows(responseJson)
      //      })
        }).catch((error) => {
    console.error(error);
    });
    }
    singleToneDataManager.getInstance().set_DictDetailsArray(ArrayResponse);
    // console.log(singleToneDataManager.getInstance().get_DictDetailsArray());
}

  render() {
       {this.getDetailsFromApi()};
    return (
         <Text>hello</Text>
     );
  }
}
