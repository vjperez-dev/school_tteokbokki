import React from 'react';
import {Text,View,Image,StyleSheet, ScrollView} from 'react-native';

export default class Category1 extends React.Component{
    render(){
        return(
            <View style={{height:100,width:120,marginLeft:20,borderWidth:0.9,borderColor:'#0c0c0c' }}>
            <View style={{flex:2}}>
            <Image source = {this.props.imageUri}
            style={{flex:1, width:null, height:null, resizeMode:'cover'}}
            />
            </View>
            <View style={{flex:1, paddingLeft:25, paddingTop:10}}>
                <Text style={{fontWeight:'700',}}>{this.props.name}</Text>
            </View>
            
        </View>

        );
    }
}

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });