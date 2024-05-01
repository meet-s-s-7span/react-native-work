import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex2Props {}

const Flex2 = (props: Flex2Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
      <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
      <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
    </View>
  );
};

export default Flex2;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FCDDEC',
    flexDirection:'column-reverse'
  },
  rect:{
    height:50,
    width:50,
    alignContent:'center',
    alignSelf:'flex-end', 
  }
});
