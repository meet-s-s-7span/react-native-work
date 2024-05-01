import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Nav1 from './Home';
import Nav2 from './Profile';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import About from './About';
import { Drawer } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';

interface Nav0Props {}

const Tab1 = createBottomTabNavigator();
// const Drawer1 = createDrawerNavigator();

const Nav0 = (props: Nav0Props) => {

  return (
    // <NavigationContainer>

      // {/* <Drawer1.Navigator>
      //   <Drawer1.Screen name='Home' component={Home}/>
      // </Drawer1.Navigator> */}
        <Tab1.Navigator >
            <Tab1.Screen name="Home" component={Home}
               options={{
                tabBarIcon: () => (
                  <Image
                    source={require('../../assets/images/TabbarImages/i1.png')}
                    style={{ width: 24, height: 24 }}
                  />
                ),
              }}
            />
            <Tab1.Screen name="Profile" component={Profile}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/images/TabbarImages/i22.png')}
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
            />
            <Tab1.Screen name="Settings" component={Settings} 
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/images/TabbarImages/i3.png')}
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
            />
            <Tab1.Screen name="About" component={About} 
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('../../assets/images/TabbarImages/i4.png')}
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
            />
        </Tab1.Navigator>
    // </NavigationContainer>
  );
};

export default Nav0;

// const styles = StyleSheet.create({
//   container: {}
// });
