import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex7Props {}

const Flex7 = (props: Flex7Props) => {
  return (
    <View style={[styles.container,{flexDirection:'row',justifyContent:'flex-end'}]}>
     <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
    <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
    <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
  
  </View>
  );
};

export default Flex7;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FCDDEC'
  },
  rect:{
    height:50,
    width:50,
    alignContent:'flex-start'
  },
});
