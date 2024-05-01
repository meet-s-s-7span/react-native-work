import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex5Props {}

const Flex5 = (props: Flex5Props) => {
  return (
    <View  style={[styles.container]}>
        <View style={{flex:1}}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
        <View style={{justifyContent:'center',alignSelf:'center',flex:1}}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
        <View style={{justifyContent:'flex-end',alignSelf:'flex-end',flex:1,}}>
        <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
    </View>
  );
};

export default Flex5;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FCDDEC',
      },
      rect:{
        height:50,
        width:50,
      }
});
