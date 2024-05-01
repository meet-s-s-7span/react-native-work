import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BookingInfo from '../Booking_Info';
import BookingImageInfo from './Booking_Image_Info';

interface BookingNavigationProps {}
const Stack = createNativeStackNavigator();

const BookingNavigation = (props: BookingNavigationProps) => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='BookingInfo' component={BookingInfo} options={{ headerShown: false }}/>
            <Stack.Screen name='BookingImageInfo' component={BookingImageInfo}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default BookingNavigation;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
