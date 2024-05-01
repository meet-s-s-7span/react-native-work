import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NativeScreenContainer } from 'react-native-screens';
import Home from '../Home';
import { NavigationContainer } from '@react-navigation/native';

interface HomeNAVProps {}

const Stack = createNativeStackNavigator()  

const HomeNAV = (props: HomeNAVProps) => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    <View style={styles.container}>
      <Text>HomeNAV</Text>
    </View>
    // </NavigationContainer>
  );
};

export default HomeNAV;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#a1f1f1'
  }
});
