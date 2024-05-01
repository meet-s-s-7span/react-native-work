import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface PlaceHolderValues{
    placeHolderValue : string;
    isMultiLineRequired: boolean;
}

export default class CustomTextInputField extends React.Component<PlaceHolderValues>{
    constructor(props: PlaceHolderValues) {
        super(props);
        this.state = {
            // isMultiLineRequired:true,
            isFocused: false,
            inputValue: '' // Initialize inputValue in the state
        };
    }

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });
    handleChangeText = (text) => this.setState({ inputValue: text });

    render() {
        
        const { placeHolderValue,isMultiLineRequired} = this.props;
        // const { isMultiLineRequired } = this.state;
        const { isFocused, inputValue} = this.state;

        return (
            
            <View style={styles.container}>
                {/* Only show this view when isFocused is true and inputValue is not empty */}
                {isFocused && inputValue !== '' &&  (
                    <View style={styles.labelContainer}>
                        <Text style={{ color: '#172E51' }}>{placeHolderValue}</Text>
                    </View>
                )}
                {/* {
                   isMultiLineRequired
                    ?
                    <TextInput
                    style={styles.inputFiledText}
                    multiline={isMultiLineRequired}
                    placeholder={placeHolderValue}
                    placeholderTextColor="#172E51"
                    onFocus={this.handleFocus}
                    onLayout={this.handleBlur}
                    onChangeText={this.handleChangeText}
                    value={this.state.inputValue} // Use the inputValue from state as the TextInput value
                />
                :
                <TextInput
                style={styles.inputFiledText}
                multiline={isMultiLineRequired}
                placeholder={placeHolderValue}
                placeholderTextColor="#172E51"
                onFocus={this.handleFocus}
                onSubmitEditing={this.handleBlur}
                onChangeText={this.handleChangeText}
                value={this.state.inputValue} // Use the inputValue from state as the TextInput value
            />

                } */}
                <TextInput
                    style={styles.inputFiledText}
                    multiline={isMultiLineRequired}
                    placeholder={placeHolderValue}
                    placeholderTextColor="#172E51"
                    // onFocus={this.handleFocus}
                    onLayout={this.handleBlur && this.handleFocus}
                    onChangeText={this.handleChangeText}
                    value={this.state.inputValue} // Use the inputValue from state as the TextInput value
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        // marginVertical:40
    },
    inputFiledText:{
        // flex: 1,
        backgroundColor:"white",
        color:'#172E51',
        marginHorizontal:20,
        // marginBottom:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#E5E5E5',
        paddingLeft:23,
        paddingRight:12.25,
        // paddingVertical:20,
        fontSize:16,
        fontWeight:'700',
        zIndex:0  ,
        // marginTop:10,
        // height:50,
        textDecorationColor:'#172E51',
        // opacity:0.5

    },
    labelContainer: {
        
        justifyContent: 'center',
        backgroundColor: "#ffffff", // Same color as background
        // alignSelf: "flex-start", // Have View be same width as Text inside
        paddingHorizontal: 6, // Amount of spacing between border and first/last letter
        marginStart: 36, // How far right do you want the label to start
        zIndex: 1, // Label must overlap border
        elevation: 1, // Needed for android
        shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
        position: "absolute", // Needed to be able to precisely overlap label with border
        top:"-21%", // Vertical position of label. Eyeball it to see where label intersects border.
        opacity:0.7
    },
});
