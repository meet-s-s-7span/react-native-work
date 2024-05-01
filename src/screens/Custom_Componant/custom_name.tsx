import React from "react";
import { StyleSheet, Text } from "react-native";

export default class CustomNameExamples extends React.Component {

    render() {
        return(
            <Text style={styles.container}>Hello Good Morning...</Text>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#995905',
    }
  });