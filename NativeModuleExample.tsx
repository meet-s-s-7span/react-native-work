import * as React from 'react';
import { Text, View, StyleSheet, Button, NativeModules } from 'react-native';

const { CalendarModule } = NativeModules;

const onPress = () => {
  console.log("Press Event", CalendarModule);
  CalendarModule.createCalendarEvent('testName', 'testLocation');
  CalendarModule.getModuleName((name) => {
    console.log("Module Name: ", name);
  });
};

const NativeModuleExample = (props) => {
  return (
    <View style={styles.container}>
      <Text>NativeModuleExample</Text>
      <Button title="Press Native Module Change" onPress={onPress}/>
    </View>
  );
};

export default NativeModuleExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
