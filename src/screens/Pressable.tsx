import * as React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

interface Pressable1Props {}

const Pressable1 = (props: Pressable1Props) => {

    const namess = () =>{
        console.warn('meeettttt........');
      }

  return (
    <View style={styles.container}>
        <TouchableOpacity
        activeOpacity={1}
            onPress={(Event)=>console.log(Event)}
            onLongPress={()=>{console.warn('longggggggpressiinngggg.....')}}
            onPressIn={()=>{console.warn('in in in in')}}
            onPressOut={()=>{console.warn('out out')}}
        > 
        <Text style={styles.texts}>Pressable1</Text>
        </TouchableOpacity>


      
    </View>
  );
};

export default Pressable1;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'blue'
  },
  texts:{
    backgroundColor:'orange',
    textAlign:'center',
    color:'blue',
    margin:50,
    padding:20,
    fontSize:50,
    borderRadius: 50,

  }
});
