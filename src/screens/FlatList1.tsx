import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

interface FlatList1Props {}

const FlatList1 = (props: FlatList1Props) => {

    const nameList = [
        {
            images : require('../assets/images/FlateScreenImages/Oval.png'),
            name : 'Martin Randolph'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval1.png'),
            name : 'Karen Castillo'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval2.png'),
            name : 'Kieron Dotson'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval3.png'),
            name : 'Karen Castillo'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval4.png'),
            name : 'Zack John'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval5.png'),
            name : 'Kieron Dotson'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval6.png'),
            name : 'Kieron Dotson'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval7.png'),
            name : 'Jamie Franco'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval8.png'),
            name : 'Martha Craig'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval9.png'),
            name : 'Martha Craig'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval10.png'),
            name : 'Maisy Humphrey'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval11.png'),
            name : 'Jamie Franco'
        },
        {
            images : require('../assets/images/FlateScreenImages/Oval12.png'),
            name : 'Jamie Franco'
        },

    ]

  return (
    <View style={styles.container}>
      <Text style={{color:'#007AFF',fontWeight:'400',fontSize:17 ,marginLeft:16,marginVertical:10}}>Edit</Text>
      <FlatList
      data={nameList}
      renderItem={
        ({item})=>
        <View style={{flexDirection:'row',paddingVertical:7}}>
            <Image source={(item.images)} style={{flex:0.2}} resizeMode='contain'/>
            <View style={{ flex:1,flexDirection:'row',justifyContent:'space-between', borderBottomColor:'#3C3C434A',borderBottomWidth:1,padding:9}}>
                <Text style={{marginLeft:15,color:'black',fontWeight:'500',fontSize:17,marginBottom:5}}>{item.name}</Text>
                <Image source={require('../assets/images/FlateScreenImages/info.png')}
                    style={{alignSelf:'center' , marginRight:16}}
                />
            </View>
        </View>     
    }

      />
    </View>
  );
};

export default FlatList1;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    height:56
  }
});
