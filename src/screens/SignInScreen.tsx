import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import InputTextFiled from './InputTextFiled';

interface SignInScreenProps {}

const SignInScreen = (props: SignInScreenProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.images}
        source={require('../assets/images/GreenFootLogo1.png')}>
          <Image
          style={styles.logo}
          source={require('../assets/images/back.png')}
        />
            <Text
            style={styles.imagetext}
            >
            Sign in to your Account
            </Text>
      </ImageBackground>

      <View style={styles.lowerView}>
          <View style={{padding:20,marginTop:"5%"}}>
          <Text style={{color:'black',fontFamily:'Outfit-VariableFont_wght',fontSize:15,fontWeight:'600'}}> Email</Text>
        <TextInput
          style={[styles.borderSty]}
          placeholderTextColor={'grey'}
          placeholder='Enter Email'
          inputMode='email'
        />
          </View>
          <View style={{padding:20,}}>
          <Text style={{color:'black',fontFamily:'Outfit-VariableFont_wght',fontSize:15,fontWeight:'600'}}> Password</Text>
        <TextInput
          style={[styles.borderSty]}
          placeholder='Enter Password'
          placeholderTextColor={'grey'}
          secureTextEntry={true}
        />

          <Text style={{color:'#9A9A9A',fontFamily:'Outfit-VariableFont_wght',fontSize:18,fontWeight:'600',
            textAlign:'right',marginTop:20,
          }}> Forgot password? </Text>

          <View style={[styles.button]}>
            <Text style={{fontFamily:'Outfit-VariableFont_wght',fontSize:20,fontWeight:'bold',textAlign:'center',marginVertical:18,color:'white'}}>Sign In</Text>
          </View>
          {/* <Text style={{fontFamily:'Outfit-VariableFont_wght',fontSize:20,fontWeight:'bold',textAlign:'center',color:'#06D0B3'}}>Sign Up</Text>
           */}
          </View>
        

      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  images:{
    flex:0.5,
    width:'auto',
    height:390
  },
  imagetext:{
    flex:1,
    textAlignVertical:'bottom',
    marginLeft:20,
    color:'white',
    fontWeight:'bold',fontFamily:'Outfit-VariableFont_wght',fontSize:26,bottom:20
  },
  logo:{
    marginTop:16
  },
  lowerView : {
    flex:0.6,
backgroundColor:'white',
color:'black',
paddingLeft:20
  },
  borderSty:{
    color:'black',
    borderBottomColor : '#EDEDED',
    borderBottomWidth :1.6,
    fontWeight:"bold"
  },
  button:{
    borderRadius:100,
    backgroundColor:'#06D0B3',
    marginVertical:40
  }
});
