import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import CusHome from './CusHome';
import CusGraph from './CusGraph';
import CusReplay from './CusReplay';
import CusFile from './CusFile';
import CusProfile from './CusProfile';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface CustomNavProps {}
const Tab3 = createBottomTabNavigator();
const CustomNav = (props: CustomNavProps) => {
  return (
    <NavigationContainer >
        <Tab3.Navigator>
            <Tab3.Screen name ="CusHome" component={CusHome}
            options={{
            
              // tabBarActiveTintColor:'black',
              tabBarShowLabel: false,
              // tabBarLabelPosition:'below-icon'
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('../../assets/images/CustomNavImages/home.png')}
                  style={
                    { width: 24, height: 24 , 
                      tintColor:focused?"#3500D4":null,}
                    // color:{color}
                    // color ? { tintColor: 'black' } : { tintColor: 'white' }, // Change 'selected_color' to the desired color
                  }
                  // tintColor={color}
                />
               
              ),
              tabBarStyle:{height:105,paddingBottom:41,paddingTop:40,paddingHorizontal:18,borderTopWidth: 0}
            }}
            />
            <Tab3.Screen name ="CusGraph" component={CusGraph}
            options={{
              // tabBarActiveBackgroundColor:'#42f44b',
              // tabBarActiveTintColor:"#42f44b",
    
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
               
                <Image
                  source={require('../../assets/images/CustomNavImages/Graph.png')}
                  style={
                    { width: 24, height: 24, tintColor:focused?"#3500D4":null, }
                    // focused ? { tintColor: 'black' } : null, // Change 'selected_color' to the desired color
                  }
                  // tintColor={color}
                />
              ),
              
              tabBarStyle:{height:105,paddingBottom:41,paddingTop:40,paddingHorizontal:18}
            }}
            />
            <Tab3.Screen name ="CusReplay" component={CusReplay}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View style={{height:64,width:64,justifyContent:'center',backgroundColor:'#3500D4',shadowColor:'#1DCC98',shadowOpacity:10,borderRadius:100,alignItems:'center',marginBottom:41}}>
                <Image
                  source={require('../../assets/images/CustomNavImages/Repeat.png')}
                  style={{ width: 24, height: 24, tintColor:focused?"#3500D4":null,}}
                  // tintColor={color}
                />
                </View>
              ),
              tabBarStyle:{height:105,paddingHorizontal:18}
            }}
            />
            <Tab3.Screen name ="CusFile" component={CusFile}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('../../assets/images/CustomNavImages/file.png')}
                  style={{ width: 24, height: 24 ,tintColor:focused?"#3500D4":"#E5E6EB",}}
                  // tintColor={color}
                />
          
              ),
              tabBarStyle:{height:105,paddingBottom:41,paddingTop:40,paddingHorizontal:18,borderTopWidth: 0,borderWidth:0,borderColor:"#ffffff",elevation:0}
            }}
            />
            <Tab3.Screen name ="CusProfile" component={CusProfile}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Image
                  source={require('../../assets/images/CustomNavImages/Profile.png')}
                  style={{ width: 24, height: 24, tintColor:focused?"#3500D4":null,}}
                  // tintColor={color}
                />
              ),
              tabBarStyle:{height:105,paddingBottom:41,paddingTop:40,paddingHorizontal:18,borderTopWidth: 0,borderWidth:0,borderColor:"#ffffff",elevation:0}
            }}
            />
            
        </Tab3.Navigator>
    </NavigationContainer>
  );
};

export default CustomNav;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFFFFF',
    borderRadius:0,
    borderColor:'#FFFFFF',
  }
});
