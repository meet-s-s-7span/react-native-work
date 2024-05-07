import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, PermissionsAndroid, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker'; // Assuming you're using react-native-image-picker for picking images

interface PhotoPermissionProps {}

const PhotoPermission = (props: PhotoPermissionProps) => {
  const handleOpenGallery = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        if (
          granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          // Permission granted, open gallery
          openGallery();
        } else {
          console.log('Gallery permission denied');
          Alert.alert(
            'Permission Denied',
            'Please grant gallery permission to proceed',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
                style: 'cancel',
              },
            ],
            { cancelable: true }
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      // For iOS, you don't need to request permissions, just open the gallery
      openGallery();
    }
  };

  const openGallery = () => {
    // Code to open the gallery using a library like react-native-image-picker
    // Example usage of react-native-image-picker
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Handle the picked image or video here
        console.log('Picked image or video:', response);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenGallery}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoPermission;

const styles = StyleSheet.create({
  container: {}
});
