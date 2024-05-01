import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex12Props {}

const Flex12 = (props: Flex12Props) => {
  return (
    <View style={styles.container}>
        <View style={[{flex:1,flexDirection:'row',justifyContent:'flex-end'}]}>
        <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
   <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
   <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
    

   <View style={{alignSelf:'center',flex:1,justifyContent:'center'}}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>

        <View style={{flexDirection:'row-reverse',flex:1,alignItems:"flex-end", alignSelf:'flex-start'}}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
 </View>


  );
};

export default Flex12;

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
