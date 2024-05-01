import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SettingsNAVProps {}

const SettingsNAV = (props: SettingsNAVProps) => {
  return (
    <View style={styles.container}>
      <Text>SettingsNAV</Text>
    </View>
  );
};

export default SettingsNAV;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#6b3a65',
  }
});
