import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Flex4Props {}

const Flex4 = (props: Flex4Props) => {
  return (
    <View  style={[styles.container]}>
        <View style={{alignSelf:'flex-end'}}>
            <View style={[styles.rect,{backgroundColor:'#F61C7A'}]}/>
            <View style={[styles.rect,{backgroundColor:'#1DCC98'}]}/>
            <View style={[styles.rect,{backgroundColor:'#3500D4'}]}/>
        </View>
        <View style={{ flexDirection:'column-reverse',flex:1,alignSelf:'flex-start'}}>
              <View style={[styles.rect, { backgroundColor: '#3500D4'}]} />
              <View style={[styles.rect, { backgroundColor: '#1DCC98'}]} />
              <View style={[styles.rect, { backgroundColor: '#F61C7A'}]} />
        </View>
    </View>
  );
};

export default Flex4;

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
