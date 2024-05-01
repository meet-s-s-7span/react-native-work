import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import HomeNAV from './HomeNAV';
import Nav0 from './Nav0';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About';
import ProfileNAV from './ProfileNAV';
import SettingsNAV from './SettingsNAV';
import AboutNAV from './AboutNAV';
import DrawerNavExample from './DrawerNavExample';

interface MainStackProps {}
const Stack = createNativeStackNavigator();
// const Tab2 = createBottomTabNavigator();

const MainStack = (props: MainStackProps) => {
  return (
   <NavigationContainer>
        <Stack.Navigator initialRouteName='DrawerNavExample'>
            <Stack.Screen name="Nav0" component={Nav0} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="HomeNAV" component={HomeNAV}/>
            <Stack.Screen name="ProfileNAV" component={ProfileNAV} />
            <Stack.Screen name="SettingsNAV" component={SettingsNAV} />
            <Stack.Screen name="AboutNAV" component={AboutNAV} />
            <Stack.Screen name="DrawerNavExample" component={DrawerNavExample} options={{ headerShown: false }}/>
        </Stack.Navigator>
        {/* <Tab2.Navigator  >
            <Tab2.Screen name="Home" component={Home} />
            <Tab2.Screen name="Profile" component={Profile} />
            <Tab2.Screen name="Settings" component={Settings} />
            <Tab2.Screen name="About" component={About} />
        </Tab2.Navigator> */}
   </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {}
});
