import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ProfileNAVProps {}

const ProfileNAV = (props: ProfileNAVProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfileNAV</Text>
    </View>
  );
};

export default ProfileNAV;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#7532a8'
  }
});
