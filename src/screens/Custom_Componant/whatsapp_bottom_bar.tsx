import React, { ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class WhatsAppBottomBar extends React.PureComponent{
  render(){
      return(
        <View style={styles.bottomBar}>
        <Image source={require('../../assets/images/WhatAppChat/Add.png')} resizeMode='contain' />
        <View style={styles.chatBar}>
          {/* <TextInput
            style={styles.textInputStyle}
            value={messageText}
            onChangeText={setMessageText}
            onSubmitEditing={sendMessageTextSubmit}
            onFocus={changeFileImage}
            onBlur={changeOutFileImage}
          /> */}
          {/* {
            isFileImage ?
              <Image source={require('../../assets/images/WhatAppChat/Shape.png')} resizeMode='contain' style={styles.shapeImageStyle} />
              :
              <Pressable onPress={sendMessageTextSubmit}>
                <Image source={require('../../assets/images/WhatAppChat/next.png')} resizeMode='contain' style={styles.shapeImageStyle} />
              </Pressable>
          } */}
        </View>
        <Image source={require('../../assets/images/WhatAppChat/Camera.png')} resizeMode='contain' />
        <Image source={require('../../assets/images/WhatAppChat/Record.png')} resizeMode='contain' />
      </View>
      )
  }
}

const styles = StyleSheet.create({

  bottomBar: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 9,
    alignItems: 'center'
  },
  chatBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 32,
    width: 228,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#8E8E93',

  },
})