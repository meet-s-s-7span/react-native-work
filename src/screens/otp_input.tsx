import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';

interface OtpInputProps {}

const OtpInput = (props: OtpInputProps) => {
  return (
    <View style={styles.container}>
      
      <OtpInputs
      // style={styles.otpView}
      
              inputStyles={styles.otpView}
              handleChange={(code) => console.log(code)}
              numberOfInputs={4} autofillFromClipboard={true}      />
                   
    </View>
    
  );
}

export default OtpInput;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#6b3a65',
  },
  otpView:{
    // flex:1,
    flexDirection: 'row',
    paddingHorizontal:20,
    // color:'red',
    backgroundColor:'white',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#E5E5E5',
    fontSize:50,
    justifyContent: 'space-evenly',
    // margin:2,
    // shadowColor:'green'
    
  },
});
