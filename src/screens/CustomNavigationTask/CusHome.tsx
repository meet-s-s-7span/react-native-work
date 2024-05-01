import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CusHomeProps {}

const CusHome = (props: CusHomeProps) => {
  return (
    <View style={styles.container}>
      <Text>CusHome</Text>
    </View>
  );
};

export default CusHome;

const styles = StyleSheet.create({
  container: {}
});
