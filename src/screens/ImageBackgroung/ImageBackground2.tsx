import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

interface ImageBackground2Props {}

const ImageBackground2 = (props: ImageBackground2Props) => {
  return (
    <ImageBackground
      style={styles.images}
      source={require('../../assets/images/MaskGroup.png')}
      resizeMode="cover"
    >
    <ImageBackground
    style={styles.images}
    source={require('../../assets/images/Blackmask.png')}
    resizeMode="cover"
    >
      <View style={styles.humanText}>
        <Text style={{fontWeight:'400',fontFamily:'ABeeZee-Regular',fontSize:40}}>Human Music</Text>
        
        <Text style={{fontSize:20,fontWeight:'700'}}>The Best Music App For</Text>
        <Text style={{fontSize:18, fontWeight:'700'}}>Young People</Text>
      </View>

      <View style={styles.logInViewPosition}>
      <Text>Already have a account?  <Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Log In</Text></Text>
      </View>


    </ImageBackground>

    </ImageBackground>
  );
};

export default ImageBackground2;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  images:{
    flex:1
  },
  text:{
    fontWeight:'bold',
    fontSize:22,
    padding:10,
    textAlign:'center'
  },  
  logInViewPosition:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end',
    // backgroundColor:'black',
    alignItems:'center',
    marginBottom:20,
    marginHorizontal:20
  },
  humanText:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20%',
    fontWeight:'bold',
  }
});
