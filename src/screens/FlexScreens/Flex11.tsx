import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex11Props {}

const Flex11 = (props: Flex11Props) => {
  return (
    <View  style={[styles.container]}>
        <View style={{flex:1,flexDirection:'row-reverse',alignSelf:'flex-start'}}>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
        </View>
        <View style={{alignSelf:'center',flex:1,flexDirection:'row'}}>
        <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
    <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
    <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
        <View style={{ flexDirection:'row',alignSelf:'flex-end'}}>
        <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
    <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
    <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
    </View>
  );
};

export default Flex11;

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
