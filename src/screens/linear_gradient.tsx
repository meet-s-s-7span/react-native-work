import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface LinearGradientExampleProps {}

const LinearGradientExample = (props: LinearGradientExampleProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['red', 'green', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Hellloooo</Text>
      </LinearGradient>
    </View>
  );
};

export default LinearGradientExample;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#995905',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
  },
});
