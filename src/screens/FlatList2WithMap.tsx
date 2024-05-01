import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, FlatList, ScrollView } from 'react-native';

interface FlatList2WithMapProps {}

const FlatList2WithMap = (props: FlatList2WithMapProps) => {
    const listdata = [
        {
            id:1,
            name:'PVR Musarambagh -Hyderabad'
        },
        {
            id:2,
            name:'PVR Mallapur Hyderabad'
        },
        {

            name:'PVR IRRUM MANZIL Hyderabad'
        },
        {
            name:'PVR Panjagutta Hyderabad'
        },
        {
            name:'PVR Kukatpally Hyderabad'
        },
        {
            name:'PVR RK Cineplex Hyderabad'
        },
        {
          name:'PVR Musarambagh -Hyderabad'
      },
      {
          name:'PVR Mallapur Hyderabad'
      },
      {
          name:'PVR IRRUM MANZIL Hyderabad'
      },
      {
          name:'PVR Panjagutta Hyderabad'
      },
      {
          name:'PVR Kukatpally Hyderabad'
      },
      {
          name:'PVR RK Cineplex Hyderabad'
      },

    ]

  const imagesCity = [  
    {
      img : require('../assets/images/PVR/Rectangle11.png'),
      cname: 'Delhi'
    },
    {
      img : require('../assets/images/PVR/Mumbai.png'),
      cname: 'Mumbai'
    },
    {
      img : require('../assets/images/PVR/Rectangle.png'),
      cname: 'Chennai'
    },
    {
      img : require('../assets/images/PVR/Noida.png'),
      cname: 'Noida'
    },
    {
      img : require('../assets/images/PVR/Rectangle11.png'),
      cname: 'Coimbatore'
    },
  ]
  return (
    <View style={styles.container}>
        {/* <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{ flex: 1 }}>
      <View>
        <Text>Your content here</Text>
      </View>
    </LinearGradient> */}
      {/* <Text>FlatList2</Text> */}
      <ImageBackground
        style={styles.images}
        source={require('../assets/images/Background.png')}
        resizeMode='cover'
      >
       
          <View style={{flexDirection:'row' , justifyContent:'space-between',paddingVertical:16,paddingHorizontal:20}}>
          <View style={{elevation:5,opacity:1,borderLeftWidth: 1,pointerEvents:'box-none',shadowColor:"#60FFCA",borderColor:'#60FFCA',borderTopWidth:1,borderRadius:100,backgroundColor:'#2E1371',padding:6}}>
            <Image source={require('../assets/images/ArrowLeft.png')} style={{}}/>
            </View>
            <Text style={{padding:6,fontFamily:'Poppins-Regular',fontWeight:'700',fontSize:18}}>PVR Cinemas</Text>
            <View style={{elevation:5,opacity:1,borderLeftWidth: 1,pointerEvents:'box-none',shadowColor:"#60FFCA",borderColor:'#60FFCA',borderTopWidth:1,borderRadius:100,backgroundColor:'#2E1371',padding:6}}>
            <Image source={require('../assets/images/carbon_location-filled.png')}/>
            </View>
        </View>
        <View style={{marginHorizontal:10}}>
          {/* <Image source={require('../assets/images/PVR/ser.png')}/> */}
        <TextInput
        style={{ backgroundColor:"#170641",borderRadius:20,marginVertical:5}}
        placeholder='Tap to search'
        />
        <ScrollView horizontal={true}>
        {
                imagesCity.map(
                    (item)=>
                    <View style={{margin:5}}>
                    <Image source={item.img} resizeMode='contain'style={{marginBottom:15,alignSelf:'center'}}/>
                    <View style={{elevation:5,opacity:1,borderLeftWidth: 1,pointerEvents:'box-none',shadowColor:"#60FFCA",borderColor:'#60FFCA',borderTopWidth:1.4,borderRadius:100,backgroundColor:'#2E1371'}}>
                    <Text style={{alignSelf:'center',padding:2,marginHorizontal:5,flexWrap:'wrap'}}>{item.cname}</Text>
                    </View>
                    </View>
                )
            }

        </ScrollView>
        </View>
        
        <View>
            {
                listdata.map(({name})=>
                <View style={{backgroundColor:"#170641",borderRadius:20,margin:10, shadowColor:'#170641',elevation:8,borderBottomColor:"#170656"}}>
         
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:22 }}>
                    <Text style={{fontSize:18,fontWeight:'500'}}>{name}</Text>
                    <Image source={require('../assets/images/PVR/vecto.png')} style={{marginTop:6}}/>
                    </View>
                  </View>)
            }
        </View>


      </ImageBackground>
    </View>
  );
};

export default FlatList2WithMap;

const styles = StyleSheet.create({
    container: {
        flex:1,
      },
      images:{
        flex:1
      }
});
