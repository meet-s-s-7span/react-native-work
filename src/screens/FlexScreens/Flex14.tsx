import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex14Props {}

const Flex14 = (props: Flex14Props) => {
  return (
    <View style={styles.container}>
        <View style={[,{flex:1,justifyContent:'center',alignItems:'center'}]}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A',marginLeft:'-25%'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98',marginTop:"-15%"}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4',marginTop:"-15%",marginRight:"-25%"}]}/>
        </View>
    </View>
     
        
  );
};

export default Flex14;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FCDDEC',
      },
      rect:{
        height:100,
        width:100,
      }
});
