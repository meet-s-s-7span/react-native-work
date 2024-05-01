import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CusGraphProps {}

const CusGraph = (props: CusGraphProps) => {
  return (
    <View style={styles.container}>
      <Text>CusGraph</Text>
    </View>
  );
};

export default CusGraph;

const styles = StyleSheet.create({
  container: {}
});
