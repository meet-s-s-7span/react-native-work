import * as React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import CustomTextInputField from '../Custom_Componant/custom_text_input_filed';


interface ImputTextFieldTask2Props {}

const ImputTextFieldTask2 = (props: ImputTextFieldTask2Props) => {
  return (
    //  <KeyboardAvoidingView
    //   style={{ flex: 1 }}529314
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    // >
    <KeyboardAvoidingView behavior='padding' style={styles.container} keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 10}>
        <View style={styles.topBar}>
        <Image source={require('../../assets/images/backTask2.png')} resizeMode='cover' style={styles.backImage}/>
            <Text style={styles.topBarTitle}>Change Address</Text>
        </View>
        <ScrollView>
        <View >
   
     <View >
     <Image source={require('../../assets/images/TextInputTask2Map.png')} resizeMode='contain' style={styles.mapImage}/>
     
        <CustomTextInputField placeHolderValue='Title' isMultiLineRequired={false}/>
        </View> 
        <View style={styles.customFiledStyle}>
        <CustomTextInputField placeHolderValue='Address' isMultiLineRequired={true}/>
        </View>
       
        <View style={styles.customFiledStyle}>
        <CustomTextInputField placeHolderValue='Street Address' isMultiLineRequired={true}/>
        </View>
        
        <View style={styles.customFiledStyle}>
        <CustomTextInputField placeHolderValue='Postal/Zip Code' isMultiLineRequired={false}/>
        
        </View>
        
       
       
    <View style={styles.button}>
    <Text style={{fontFamily:'Outfit-VariableFont_wght',fontSize:20,fontWeight:'bold',textAlign:'center',marginVertical:18,color:'white'}}>Save</Text>
    </View>
    </View>
    </ScrollView>
    {/* </KeyboardAvoidingView> */}
    </KeyboardAvoidingView>
   
   
    
  );
};

export default ImputTextFieldTask2;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFFFFF'
  },
  topBar:{
    flexDirection:'row',
    marginVertical:13.5
  },
  topBarTitle:{
    flex:0.9,
    color:'#1C1C1C',
    fontSize:16,
    fontWeight:'700',
    textAlign:'center'
  },
  backImage:{
    // flex:0.1,
    marginLeft:16
  },
  mapImage:{
    width:'auto',
    marginBottom:24
  },
  button:{
    position:'relative',
    borderRadius:100,
    backgroundColor:'#F7A16A',
    marginVertical:54,
    marginHorizontal:20
  },
  customFiledStyle:{
    // paddingVertical:29,
    marginTop:29,
    top:6
  }
});
