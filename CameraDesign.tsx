import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
import FlipCameraIcon from 'react-native-vector-icons/MaterialIcons';

import { RNCamera } from 'react-native-camera';

interface CameraDesignProps {}

const CameraDesign = (props: CameraDesignProps) => {

    const [cameraOpen, setCameraOpen] = React.useState(false);
    const cameraRef = React.useRef<RNCamera | null>(null);
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
        console.log('flipCamera')
        setCameraType(
            cameraType === RNCamera.Constants.Type.back
                ? RNCamera.Constants.Type.front
                : RNCamera.Constants.Type.back
        );
    };

    const captureImage = async () => {
        if (cameraRef.current) {
            try {
                const options = { quality: 0.5, base64: true };
                const data = await cameraRef.current.takePictureAsync(options);
                console.log(data.uri); // Here you get the image URI
            } catch (error) {
                console.error('Failed  to capture image: ', error);
            }
        }
    };

  return (
    <View style={styles.container}>
      {/* <Text>CameraDesign</Text>
      <Text>sadasdad</Text> */}
      <View style={{flex:1}}>
      {cameraOpen &&
      <RNCamera
      style={{flex:1}}
                        // style={styles.preview}
                        type={cameraType}
                        ref={cameraRef}
                    />
      }
      </View>
      {/* <Button title="Flip Camera" onPress={flipCamera} /> */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomStyle}>
        {/* <Text>hello</Text> */}
        <FlipCameraIcon name="photo-library" size={30} color="white" />
     
        <TouchableOpacity style={styles.circleView} onPress={()=>{requestCameraPermission(),captureImage()}}>
        
        </TouchableOpacity>
        {/* <FlipCameraIcon name="photo-library" size={30} color="white" /> */}
        <FlipCameraIcon name="flip-camera-android" size={30} color="white" onPress={flipCamera}/>
        </View>
      
      </View>
    </View>
  );
};

export default CameraDesign;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  bottomBar:{
    // flex:1,
    // flexDirection:'row',
    backgroundColor:'#2C2C2C',
    justifyContent:'flex-end',
    
    

  },
  bottomStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    paddingHorizontal:30,
    paddingVertical:30,
    // backgroundColor:'pink'
  },
  circleView:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:4,
    borderColor:'white'
  },
//   circleBorder:{
//     width:40,
//     height:40,
//     borderRadius:20,
//     backgroundColor:'orange',
//     justifyContent:'center',
//     alignItems:'center',
//     borderWidth:2,
//     borderColor:'white'
//   }
});
