import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface SettingsProps {}

const Settings = (props: SettingsProps) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button title='SettingsNAV' onPress={() => props.navigation.navigate('SettingsNAV')}/>
   
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'green',
  }
});
