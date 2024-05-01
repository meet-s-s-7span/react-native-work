import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Button } from 'react-native';
import NavigationExample from './NavigationExample';
import InputTextFiled from './InputTextFiled';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

interface TabNavigationBottomBarProps {}

const TabNavigationBottomBar = (props: TabNavigationBottomBarProps) => {
    const Tab = createMaterialTopTabNavigator();
    const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
        {/* <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About " component={About} />
         </Drawer.Navigator> */}
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>

    </NavigationContainer>
  );
};
function Home(){
    useFocusEffect(() => {
        console.log('useFocusEffect.......');
    
        return () => {
          console.log('Not ...useFocusEffect......');
        };
      })
      React.useEffect(() => {
        console.log('useEffect.......');
        return () => {
          console.log('Not ...useEffect......');
        };
    })
    
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            {/* <Button></Button> */}
        </View>
    )
}
function Profile(){
    useFocusEffect(() => {
        console.log('useFocusEffect.......');
    
        return () => {
          console.log('Not ...useFocusEffect......');
        };
      })
      React.useEffect(() => {
        console.log('useEffect.......');
        return () => {
          console.log('Not ...useEffect......');
        };
    })
    return(
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

function Settings(){
    useFocusEffect(() => {
        console.log('useFocusEffect.......');
    
        return () => {
          console.log('Not ...useFocusEffect......');
        };
      })
    React.useEffect(() => {
        console.log('useEffect.......');
        return () => {
          console.log('Not ...useEffect......');
        };
    })
    return(
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}

function About(){
    return(
        <View style={styles.container}>
            <Text>About</Text>
        </View>
    )
}

export default TabNavigationBottomBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ACAC73',
  }
});
