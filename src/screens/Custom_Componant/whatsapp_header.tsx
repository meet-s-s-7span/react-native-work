import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class WhatsAppHeader extends React.PureComponent {
    render() {
        return (
            <View style={styles.topBarView}>
                <Image source={require('../../assets/images/WhatAppChat/Back.png')} style={styles.backImage} />
                <Image source={require('../../assets/images/WhatAppChat/Oval.png')} style={styles.ovalIMage} />
                <View style={styles.topBarNameView}>
                    <Text style={styles.personNameText}>Martha Craig</Text>
                    <Text style={styles.activeTimeText}>tap here for contact info</Text>
                </View>
                <Image source={require('../../assets/images/WhatAppChat/vc.png')} style={styles.vcImage} />
                <Image source={require('../../assets/images/WhatAppChat/Call.png')} style={styles.callImage} />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    bodyBackgroundImage: {
      flex: 1
    },
    topBarView: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        // justifyContent: 'space-evenly',
        paddingTop: 10,
        paddingBottom: 5
      },
      backImage: {
        // marginLeft: "-5%",
        alignSelf: 'center',
        marginHorizontal: 15,
        // marginVertical:10
      },
      ovalIMage: {
        alignSelf: 'center',
        // marginHorizontal: 3.5
      },
      topBarNameView: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: "2%"
      },
      personNameText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        flexWrap: 'wrap',
        flex: 1
      },
      activeTimeText: {
        color: '#8E8E93',
        fontSize: 12,
        fontWeight: '400'
      },
      vcImage: {
        alignSelf: 'center',
        // marginLeft:"5%",
        marginRight: 25
      },
      callImage: {
        alignSelf: 'center',
        // marginLeft:"5%",
        marginRight: 19.5
      },
  });