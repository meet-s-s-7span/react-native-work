import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, AccessibilityInfo, ImageBackground } from 'react-native';

interface SafeAreaExampleProps {}

const SafeAreaExample = (props: SafeAreaExampleProps) => {
  return (
    <View style={{flex:1,backgroundColor:"green"}}>
    {/* <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Safe Area Example</Text>
    </SafeAreaView> */}
    {/* <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}
      {/* <Image
        style={styles.images}
        // source={require('./assets/images/MJPG')}
        source={require('./assets/images/M.jpg')}
      // defaultSource={}
      height={100}
      alt='hello'
      blurRadius={5}
      progressiveRenderingEnabled={true}
      referrerPolicy='no-referrer-when-downgrade'
      testID='123'
      // tintColor={'red'}
      borderBottomLeftRadius={50}
      borderTopLeftRadius={50}
      crossOrigin='use-credentials'
      /> */}

      <ImageBackground 
       style={styles.image}
       source={require('../assets/images/M.jpg')}
       borderRadius={50} >
        <Text>Hellloooo</Text>

      </ImageBackground>
      
       
    
      
    
    </View>
  );
};

export default SafeAreaExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "200",
  },
  logo:{
    width:100,
    height:90,
  },
  images:{
    flex:1
    // width:100,
    // height:100,
    // resizeMode:'contain',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});