import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex1Props {}

const Flex1 = (props: Flex1Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
      <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
      <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
    </View>
  );
};

export default Flex1;

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    
    backgroundColor:'#FCDDEC'
  },
  rect:{
    height:50,
    width:50,
    alignContent:'center',
    // alignSelf:'flex-end'
  },
});
