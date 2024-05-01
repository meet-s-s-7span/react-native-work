
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AboutNAVProps {}

const AboutNAV = (props: AboutNAVProps) => {
  return (
    <View style={styles.container}>
      <Text>AboutNAV</Text>
    </View>
  );
};

export default AboutNAV;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#995905',
  }
});
