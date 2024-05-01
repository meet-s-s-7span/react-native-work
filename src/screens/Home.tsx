import * as React from 'react';
import { Text, View, StyleSheet, BackHandler, Button } from 'react-native';

interface HomeProps {}
// type GreetingProps = {
//   name: string;
// };
// const Greeting = (props: GreetingProps) => {
//   return (
//     <View style={styles.center, {top: 5,left:150}}>
//       <Text>Hello {props.name}!</Text>
//     </View>
//   );
// };

const Home = (props: HomeProps) => {
  return (
    <View style={{backgroundColor: "#E90", flex:2,}}>
    {/* <View>
    <Greeting name="Meet" />
      </View>       */}
   <View style={[styles.container,
    {justifyContent:'center',
    // maxHeight:5000,
    overflow:'scroll',
    margin:50,
    padding:95,
    // start:50
    zIndex:1
    
    }]}>
      <Text>HomeView</Text>
    </View>
    <View style={[styles.container,
        {borderBottomWidth:5,
          // borderLeftWidth:50
          // columnGap:5,
          backgroundColor:'black',
          gap:100,
          justifyContent:'center'
          // display:'none'
          // flexDirection:'column-reverse'
          // flexGrow:5
        }
    
      // {alignSelf:'center'}
      ]}>
      <Text>Parent</Text>
      <Button title="Submit" />
    </View>
    <View style={[styles.container,
    {justifyContent:'center',
    // maxHeight:5000,
    overflow:'scroll',
    margin:50,
    padding:95,
    // start:50
    zIndex:1
    
    }]}>
      <Text>HomeView</Text>
    </View>
    <View style={[styles.container,
        {borderBottomWidth:5,
          // borderLeftWidth:50
          // columnGap:5,
          backgroundColor:'black',
          gap:100,
          justifyContent:'center'
          // display:'none'
          // flexDirection:'column-reverse'
          // flexGrow:5
        }
    
      // {alignSelf:'center'}
      ]}>
      <Text>Parent</Text>
      <Button title="Submit" />
    </View>
    
    </View>
    
    
    

  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e90000',
  },
});