import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

interface BookingImageInfoProps {
  hairStyleData :any;
}

const BookingImageInfo = (props:BookingImageInfoProps) => {
  
  const { hairStyleData} = props;
  // console.log(hairStyleData),
  console.log(props.route.params.hairStyleData)
  
  return (
    <View style={styles.container}>
      {
        props.route.params.hairStyleData.map((item, index) => {
          console.log(item)
          return (
            <View style={styles.item} key={index}>
              <Image source={item.brideImage}/> 
            </View>
          )
        })
      }
    </View>
  );
};

export default BookingImageInfo;

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor: 'red',
  },
  item:{
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  }
});
