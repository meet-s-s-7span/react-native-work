import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HooksExample from './hooks_example';
import MountingExample from './mounting_example';

interface HooksNavigationProps {}

const Stack = createNativeStackNavigator();

const HooksNavigation = (props: HooksNavigationProps) => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  name='HooksExample' component={HooksExample}/>
            <Stack.Screen  name='MountingExample' component={MountingExample}/>
        </Stack.Navigator>

    </NavigationContainer>
  );
};

export default HooksNavigation;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
