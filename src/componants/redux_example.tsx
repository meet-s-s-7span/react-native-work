import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import HeaderFile from './header_file';
import ProductFile from './product_file';

interface ReduxExampleProps { }

const ReduxExample = (props: ReduxExampleProps) => {
  
  return (
    <View style={styles.container}>
      <HeaderFile />
      <ProductFile />
    </View>
  );
};

export default ReduxExample;

const styles = StyleSheet.create({
  container: {

  }
});
