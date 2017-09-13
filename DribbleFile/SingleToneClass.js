import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class singleToneDataManager{
  static sharedInstance = null;
  _userID = "";
  _DictDetailsArray=[];
  _HomeArray=[];
  _TeamsArray=[];
  _ReboundsArray=[];

  ServiceArray=[
    {name:"https://api.dribbble.com/v1/shots?sort=&access_token=a589847521cfb6420457b84d97addee8c7b108ad49d9a5768f66109bc0bbea21"},
    {name:"https://api.dribbble.com/v1/shots?sort=&list=rebounds&access_token=a589847521cfb6420457b84d97addee8c7b108ad49d9a5768f66109bc0bbea21"},
    {name:"https://api.dribbble.com/v1/shots?sort=&list=teams&access_token=a589847521cfb6420457b84d97addee8c7b108ad49d9a5768f66109bc0bbea21"}
  ];

  static getInstance() {

      if (this.sharedInstance == null) {
          this.sharedInstance = new singleToneDataManager();
      }

      return this.sharedInstance;
  }
  getUserID() {
      return this._userID;
  }
  setUserID(id){
     this._userID=id;
  }
  get_DictDetailsArray() {
      return this._DictDetailsArray;
  }
  set_DictDetailsArray(id){
     this._DictDetailsArray=id;
  }
  getHomeArray() {
      return this._HomeArray;
  }
  setHomeArray(id){
     this._HomeArray=id;
  }
  getTeamsArray() {
      return this._TeamsArray;
  }
  setTeamsArray(id){
     this._TeamsArray=id;
  }
  getReboundsArray() {
      return this._ReboundsArray;
  }
  setReboundsArray(id){
     this._ReboundsArray=id;
  }

}
