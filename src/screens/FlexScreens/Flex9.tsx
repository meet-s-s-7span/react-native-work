import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex9Props {}

const Flex9 = (props: Flex9Props) => {
  return (
    <View style={[styles.container,{flexDirection:'row'}]}>
    <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
    <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
    <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
  </View>
  );
};

export default Flex9;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FCDDEC'
      },
      rect:{
        height:50,
        width:50,
        alignSelf:'flex-end',
      },
});
