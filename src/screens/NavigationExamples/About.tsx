import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface AboutProps {}

const About = (props: AboutProps) => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button title='AboutNAV' onPress={() => props.navigation.navigate('AboutNAV')}/>
   
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ACA13a',
  }
});
