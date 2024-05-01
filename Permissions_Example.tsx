import * as React from 'react';
import { Text, View, StyleSheet, Button, PermissionsAndroid } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import { RNCamera } from 'react-native-camera';
import CameraIcon from 'react-native-vector-icons/FontAwesome';

interface PermissionsExamplesProps {}

const PermissionsExamples = (props: PermissionsExamplesProps) => {
    const [cameraOpen, setCameraOpen] = React.useState(false);
    const [cameraType, setCameraType] = React.useState(RNCamera.Constants.Type.back);

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
                setCameraOpen(true); // Set cameraOpen to true when permission granted
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const flipCamera = () => {
        setCameraType(
            cameraType === RNCamera.Constants.Type.back
                ? RNCamera.Constants.Type.front
                : RNCamera.Constants.Type.back
        );
    };

    return (
        <View style={styles.container}>
            <Text>PermissionsExamples</Text>
            <CameraIcon name='camera' size={50} onPress={requestCameraPermission} style={{alignSelf:'center'}}/>

            {cameraOpen && (
                <View style={styles.cameraContainer}>
                      <RNCamera
                          style={styles.preview}
                          type={cameraType}
                          
                      />
                    <Button title="Flip Camera" onPress={flipCamera} />
                    {/* <Button title="Click Photo"  /> */}
                </View>
            )}
        </View>
    );
};

export default PermissionsExamples;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
