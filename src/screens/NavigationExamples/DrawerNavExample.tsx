import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from '../Home';
import Profile from './Profile';
import HomeNAV from './HomeNAV';
import Nav0 from './Nav0';

interface DrawerNavExampleProps {}
const Drawer = createDrawerNavigator();
const DrawerNavExample = (props: DrawerNavExampleProps) => {
  return (
   
    <Drawer.Navigator>
        <Drawer.Screen name="Nav0" component={Nav0}/>
        <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>

  );
};

export default DrawerNavExample;

const styles = StyleSheet.create({
  container: {}
});
