import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex6Props {}

const Flex6 = (props: Flex6Props) => {
  return (
    <View  style={[styles.container]}>
        <View style={{alignSelf:'flex-end',flex:1}}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
        <View style={{alignSelf:'center',flex:1,justifyContent:'center'}}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
        <View style={{ flexDirection:'column-reverse',flex:1,alignSelf:'flex-start'}}>
        <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
    </View>
  );
};

export default Flex6;

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
