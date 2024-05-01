import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CusProfileProps {}

const CusProfile = (props: CusProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>CusProfile</Text>
    </View>
  );
};

export default CusProfile;

const styles = StyleSheet.create({
  container: {}
});
