import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title='ProfileNAV' onPress={() => props.navigation.navigate('ProfileNAV')}/>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'
  }
});
