import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Button, Pressable } from 'react-native';

interface FigmaDesignProps {}

const FigmaDesign = (props: FigmaDesignProps) => {
  return (
  <View style={styles.container}>
      <ImageBackground  
      style={styles.images}
      source={require('../../assets/images/BackImage1.png')}
      resizeMode="cover"
      >
        <Image
        style={styles.logo}
        source={require('../../assets/images/LOGO.png')}
        />
        <View style={styles.viewposition}>

        <Text 
              style={styles.text}
              >Too tired to walk your dog? Let’s help you!</Text> 

        <View style={{
          backgroundColor:'#FE904B',
          borderRadius:13,
          marginVertical:22,
          paddingHorizontal:50,
          paddingVertical: 4
        }}>   
        
          <Pressable 
          onPress={()=>console.warn("JOINED SUCCESS FULLY.......")}
          >
          <Text style={[styles.text,{
                  // backgroundColor:'#FE904B',
                  // borderRadius:13,
                  
                  // height:56,
                  // width:324
                  }]}>Join our community</Text>
          </Pressable>
             
                </View> 
                <View style={{flexDirection:'row',gap:5}}>
                <Text style={{fontSize:13,fontFamily:'Poppins-Regular'}}>Already a member?</Text>
                <Text style={styles.signintext}>Sign in</Text>
                </View>
         
        </View> 
          
    </ImageBackground>
  </View>
  );
};

export default FigmaDesign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images:{
    flex: 1,
  },
  logo:{
    left:16,
    marginTop:16
  },
  viewposition:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end',
    // backgroundColor:'black',
    alignItems:'center',
    marginBottom:20,
    marginHorizontal:20
  },
  text:{
    fontWeight:'bold',
    fontSize:22,
    color:"white",
    padding:10,
    textAlign:'center'
  },
  signintext:{
    color:"#FE904B",
    fontWeight:'bold',
  }
  
});
