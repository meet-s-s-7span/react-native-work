import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex10Props {}

const Flex10 = (props: Flex10Props) => {
  return (
    <View style={[styles.container,{flexDirection:'row'}]}>
    <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
    <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
    <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
  </View>
  );
};

export default Flex10;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FCDDEC'
      },
      rect:{
        height:50,
        width:50,
      
      },
});
