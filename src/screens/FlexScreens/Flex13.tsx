import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex13Props {}

const Flex13 = (props: Flex13Props) => {
  return (
    <View style={styles.container}>
        <View style={[styles.container,{flexDirection:'row',justifyContent:'space-around',alignItems:'flex-end'}]}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98',}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
        <View style={[styles.container,{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}]}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98',}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
    </View>
  );
};

export default Flex13;

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
