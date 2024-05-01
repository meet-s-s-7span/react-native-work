import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Button } from 'react-native';

interface ImageTask3Props {}

const ImageTask3 = (props: ImageTask3Props) => {
  return (
    <ImageBackground
    style={styles.images}
    source={require('../../assets/images/rectt.png')}
    resizeMode='cover'
    >
        <View style={styles.reducingText}>
        <Text style={{fontWeight:'800',fontFamily:'Outfit-VariableFont_wght',fontSize:30,bottom:12}}>Reducing Carbon</Text>
        <Text style={{fontWeight:'800',fontFamily:'Outfit-VariableFont_wght',fontSize:30,bottom:12}}>(CO2)</Text>
        <Text style={{fontFamily:'Outfit-VariableFont_wght',fontSize:16,color:'white'}}>Lorem ipsum dolor sit amet, consectetur</Text>
        <Text style={{fontFamily:'Outfit-VariableFont_wght',fontSize:16,color:'white'}}>adipiscing elit mauris sed</Text>
        </View>
         
        <View  style={styles.vectorimages}>
        <Image 
        source={require('../../assets/images/img33.png')}
        resizeMode='cover'
        />
        </View>
        <View  style={styles.bottomText}>
          <View style={{flexDirection:'row',justifyContent:'space-between',flex:0.2,bottom:12}}>
          <View style={[styles.rect,{backgroundColor:'white'}]}/>
        <View style={[styles.circle,{backgroundColor:'white',}]}/>
        <View style={[styles.circle,{backgroundColor:'white'}]}/>
          </View>
        
        
        <View style={[styles.bottomText,{borderRadius:100,backgroundColor:'white',height:73,width:73,justifyContent:'center',zIndex:5,padding:25,bottom:10}]}>
              <Image 
              source={require('../../assets/images/vec1.png')}
              resizeMode='cover'
              />
        </View>
        <Text style={{fontWeight:'bold',bottom:18,right:2}}>Skip</Text>
        </View>
        
        

    </ImageBackground>
  );
};

export default ImageTask3;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  images:{
    flex:1
  },
  vectorimages:{
    flex:1,
    justifyContent:'flex-end'
  },
  bottomText:{
    zIndex:6,
    marginTop:"-11%",
    flexDirection:'row',
    justifyContent:'space-around'
  },
  rect:{
    height:4,
    width:30,
    borderRadius:40
  },
  circle:{
    height:6,
    width:6,
    borderRadius:50,
  },
  reducingText:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:"70%"
  }
  // buttons:{
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 12,
  //   paddingHorizontal: 32,
  //   borderRadius: 4,
  //   elevation: 3,
  //   backgroundColor: 'black',
  // }
});
