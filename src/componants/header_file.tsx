import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface HeaderFileProps {}

const HeaderFile = (props: HeaderFileProps) => {

  const cartData = useSelector((state)=>state.reducer);
  const [cartValues , setCartValues]=React.useState(0)

  

  console.log(cartData);
  React.useEffect(
    ()=>{
      setCartValues(cartData.length);
    },[cartData]
  )

  return (
    <View style={styles.container}>
      <Text style={{textAlign:"center"}}>{cartValues}</Text>
    </View>
  );
};

export default HeaderFile;

const styles = StyleSheet.create({
  container: {
    // flex:1
  }
});
