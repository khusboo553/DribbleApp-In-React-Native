import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,TouchableHighlight,CameraRoll,Alert
} from 'react-native';
import singleToneDataManager from './SingleToneClass.js';
import RNFetchBlob from 'react-native-fetch-blob';


export default class DownloadClass extends Component{

  constructor() {
    super();
}
DownloadButtonPressed(value){
  console.log(value);
  CameraRoll.saveToCameraRoll(value)
       .then(Alert.alert('Success', 'Photo added to camera roll!'))
  // RNFetchBlob
  //   .config({
  //     // add this option that makes response data to be stored as a file,
  //     // this is much more performant.
  //     fileCache : true,
  //     appendExt : 'png',
  //   })
  //   .fetch('GET', value, {
  //     //some headers ..
  //   })
  //   .then((res) => {
  //     // the temp file path
  //     console.log('The file saved to ', res.path());
  //
  //   })
}
render(){
  console.log(this);
  return(
    <View style={{marginTop:50}}>
    <Image
    style={{backgroundColor:'white',height:180,width:350,marginLeft:10}}
     source={{uri:this.props.navigation.state.params.value.imageDictHd}}
     />
     <TouchableHighlight value={this.props.navigation.state.params.value.imageDictHd} onPress={() =>
       this.DownloadButtonPressed(this.props.navigation.state.params.value.imageDictHd)}>
       <Image
      style={{height:60,marginTop:40,marginLeft:10,marginRight:10}}
      source={require('./image/download.png')}
     />
     </TouchableHighlight>
    </View>
  );
}
}
var styles = StyleSheet.create({

thumbnail: {
    width:50,
    height:50,
  }
});
