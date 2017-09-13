import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import singleToneDataManager from './SingleToneClass.js';
export default class UserClass extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  static sharedInstance = null;

  static getInstance() {

      if (this.sharedInstance == null) {
          this.sharedInstance = new UserClass();
      }

      return this.sharedInstance;
  }

  _setDetailsFunc(){
    console.log("%%%%%%");
    if (singleToneDataManager.getInstance().get_DictDetailsArray().length!==0) {
      console.log("++++++++++");
      var homeArray=[];
      var teamArray=[];
      var reboundsArray=[];

       for (var i = 0; i < singleToneDataManager.getInstance().get_DictDetailsArray().length; i++)
     {
       var userNameArray=[];
       var viewCountArray=[];
       var profileArray=[];
       var imageDictArray=[];
        var hdImageDictArray=[];
    for (var k = 0; k < singleToneDataManager.getInstance().get_DictDetailsArray()[i].length; k++) {

          var userName=singleToneDataManager.getInstance().get_DictDetailsArray()[i][k]["user"]["username"];
          if (userNameArray==undefined) {
            userNameArray=userName;
          }else {
            userNameArray.push(userName);
          }

          var viewCount=singleToneDataManager.getInstance().get_DictDetailsArray()[i][k]["views_count"];
          if (viewCountArray==undefined) {
            viewCountArray=viewCount;
          }else {
            viewCountArray.push(viewCount);
          }

          var profilePic=singleToneDataManager.getInstance().get_DictDetailsArray()[i][k]["user"]["avatar_url"];
          if (profileArray==undefined) {
            profileArray=profilePic;
          }else {
            profileArray.push(profilePic);
          }


          var normalImage=singleToneDataManager.getInstance().get_DictDetailsArray()[i][k]["images"]["normal"];
          if (imageDictArray==undefined) {
            imageDictArray=normalImage;
          }else {
            imageDictArray.push(normalImage);
          }

        var hdImage=singleToneDataManager.getInstance().get_DictDetailsArray()[i][k]["images"]["hidpi"];
        if (hdImageDictArray==undefined) {
          hdImageDictArray=hdImage;
        }else {
          hdImageDictArray.push(hdImage);
        }

       }
     if (i==0) {
       for (var j = 0; j< userNameArray.length; j++) {
         if (homeArray==undefined) {
           homeArray=[{
             userName:userNameArray[j],
             viewCount:viewCountArray[j],
             profilePic:profileArray[j],
             imageDictNormal:imageDictArray[j],
             imageDictHd:hdImageDictArray[j],
           }];
         }else {
           homeArray.push({
             userName:userNameArray[j],
             viewCount:viewCountArray[j],
             profilePic:profileArray[j],
             imageDictNormal:imageDictArray[j],
             imageDictHd:hdImageDictArray[j],
           });
       }
     }
   }else if (i==1) {
     for (var j = 0; j< userNameArray.length; j++) {
       if (teamArray==undefined) {
         teamArray=[{
           userName:userNameArray[j],
           viewCount:viewCountArray[j],
           profilePic:profileArray[j],
           imageDictNormal:imageDictArray[j],
           imageDictHd:hdImageDictArray[j],
         }];
       }else {
         teamArray.push({
           userName:userNameArray[j],
           viewCount:viewCountArray[j],
           profilePic:profileArray[j],
           imageDictNormal:imageDictArray[j],
           imageDictHd:hdImageDictArray[j],
         });
     }
   }
 }else {
   for (var j = 0; j< userNameArray.length; j++) {
     if (reboundsArray==undefined) {
       reboundsArray=[{
         userName:userNameArray[j],
         viewCount:viewCountArray[j],
         profilePic:profileArray[j],
         imageDictNormal:imageDictArray[j],
         imageDictHd:hdImageDictArray[j],
       }];
     }else {
       reboundsArray.push({
         userName:userNameArray[j],
         viewCount:viewCountArray[j],
         profilePic:profileArray[j],
         imageDictNormal:imageDictArray[j],
         imageDictHd:hdImageDictArray[j],
       });
   }
 }
 }
// }
 }
 singleToneDataManager.getInstance().setHomeArray(homeArray);
 singleToneDataManager.getInstance().setTeamsArray(teamArray);
 singleToneDataManager.getInstance().setReboundsArray(reboundsArray);
  console.log(singleToneDataManager.getInstance().getHomeArray());
  console.log(singleToneDataManager.getInstance().getTeamsArray());
  console.log(singleToneDataManager.getInstance().getReboundsArray());
  }
}
}
