import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,ListView,Image,
} from 'react-native';
import singleToneDataManager from './SingleToneClass.js';
var existPointRebounds=0;
var reboundsArray=[];

var ds=new ListView.DataSource({
  rowHasChanged:(row1,row2)=>row1!==row2,
});

export default class ReboundsClass extends Component{
  constructor() {
    super();
    this.state = {
      dataSource:ds.cloneWithRows(reboundsArray),
    }
  }
  _DetailsSetArray(){
    existPointRebounds=1;
     this.setState({
        dataSource:ds.cloneWithRows(singleToneDataManager.getInstance().getReboundsArray()),
     });
   }

    render(){
      if (singleToneDataManager.getInstance().getReboundsArray().length!==0&&existPointRebounds==0){
        {this._DetailsSetArray()};
      }

      return(
        <View style={styles.lapsWrapper}>
        <ListView onEndReached={() => alert('Sorry No more data is there!!')} renderHeader={this._renderHeader}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData)=>(
            <View style={styles.lapRow}>
            <Image
            style={{backgroundColor:'white',height:180,width:350,marginLeft:10}}
             source={{uri:rowData.imageDictNormal}}
             />
             <View style={{flexDirection:'row'}}>
             <Image
             style={{backgroundColor:'red',height:50,width:50,borderRadius:25,marginLeft:10}}
              source={{uri:rowData.profilePic}}
              />
              <View style={{justifyContent:'space-around',flex:1,flexDirection:'row'}}>
              <Text style={styles.lapNumber}>{rowData.userName}</Text>
              <Text style={styles.lapTime}>{rowData.viewCount}></Text>
              </View>
            </View>
            </View>
          )}
          />
          </View>
      );
    }
  }
  const styles=StyleSheet.create(
    {
      lapsWrapper:{
        marginTop:10,
      },
      lapRow:{
        flexDirection:'column',
        //
        height:250,
        paddingTop:10,
        borderBottomWidth:2.0,
        borderLeftWidth:3.0,
        borderRightWidth:3.0,
        borderTopWidth:3.0,
        borderLeftColor:'#000080',
        borderRightColor:'#000080',
        borderTopColor:'#000080',
        borderBottomColor:'#000080',
        backgroundColor:'#e6e6fa',
      },
      lapNumber:{
        marginTop:15,
        fontSize:15,
        color:'#777',
        // marginLeft:0,
      },
      lapTime:{
        marginTop:15,
        color:'#000',
        fontSize:20,
          // marginRight:0,
        // fontWeight:'300'
      },
    }
  )
