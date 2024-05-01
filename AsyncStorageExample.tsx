import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, NativeModules } from 'react-native';

interface AsyncStorageExampleProps {}

const {CalendarModule} = NativeModules;
const AsyncStorageExample = (props: AsyncStorageExampleProps) => {

  
  const [user, setUser] = useState('');

  const setData = async () => {
    try {
      await AsyncStorage.setItem("user", "Meet");
      console.log("Data set successfully");
    } catch (error) {
      console.error("Error setting data:", error);
    }
  }

  const getData = async () => {
    try {
      const result = await AsyncStorage.getItem("user");
      console.log("Data retrieved:", result);
      setUser(result || ''); // Set user to empty string if result is null
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem("user");
      console.log("Data deleted successfully");
      setUser(''); // Clear user state
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }

  const mergeData = async () => {
    try {
      await AsyncStorage.mergeItem("user", "New Value");
      console.log("Data merged successfully");
    } catch (error) {
      console.error("Error merging data:", error);
    }
  }

  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared");
      setUser(''); // Clear user state
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  }

  const getAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log("All keys:", keys);
    } catch (error) {
      console.error("Error getting all keys:", error);
    }
  }

  const flushRequests = async () => {
    try {
      await AsyncStorage.flushGetRequests();
      console.log("Get requests flushed");
    } catch (error) {
      console.error("Error flushing get requests:", error);
    }
  }

  const getMultipleData = async () => {
    try {
      const keys = ["key1", "key2", "key3"];
      const data = await AsyncStorage.multiGet(keys);
      console.log("Multiple data:", data);
    } catch (error) {
      console.error("Error getting multiple data:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>AsyncStorageExample - {user}</Text>
      <Button title='Set Data' onPress={setData} />
      <Button title='Get Data' onPress={getData} />
      <Button title='Delete Data' onPress={deleteData} />
      <Button title='Merge Data' onPress={mergeData} />
      <Button title='Clear AsyncStorage' onPress={clearData} />
      <Button title='Get All Keys' onPress={getAllKeys} />
      <Button title='Flush Get Requests' onPress={flushRequests} />
      <Button title='Get Multiple Data' onPress={getMultipleData} />
    </View>
  );
};

export default AsyncStorageExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
