import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CusReplayProps {}

const CusReplay = (props: CusReplayProps) => {
  return (
    <View style={styles.container}>
      <Text>CusReplay</Text>
    </View>
  );
};

export default CusReplay;

const styles = StyleSheet.create({
  container: {}
});
