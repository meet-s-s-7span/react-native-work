import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex8Props {}

const Flex8 = (props: Flex8Props) => {
  return (
    <View style={[styles.container,{justifyContent:'flex-end'}]}>
    <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
    <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
    <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/> 
  </View>
  );
};

export default Flex8;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FCDDEC',
        flexDirection:'row'
      },
      rect:{
        height:50,
        width:50,
        alignSelf:'flex-end'
      },
});
