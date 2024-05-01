import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomTextInputField from './Custom_Componant/custom_text_input_filed';

interface InputTextFiledProps {}

const InputTextFiled = (props: InputTextFiledProps) => {
    const [name,setName]= React.useState("");
    const[display,setDisplay]=React.useState(false);

    const cclear = React.useRef(null);
    const autoentry = React.useRef(null);

    const resetDisplay = ()=>{
      setName("");
      setDisplay(false);
    }

    function clearevents(){
      console.log(cclear.current?.clear());
    }

    function autoEnteryyy(){
      console.log(autoentry.current?.focus());
    }

  return (
    <View >
      <Text style={{fontSize:30,textAlign:'center',padding:10}}>InputTextFiled</Text>
      <TextInput 
      onSubmitEditing={autoEnteryyy}
      ref={cclear}
      style={[styles.textInput,{color:"green"}]}
      placeholder='Enter Name'
      placeholderTextColor={"orange"}
      onChangeText={(text)=>setName(text)}
      value={name}
      autoComplete='url'
      autoCorrect = {true}
      // caretHidden = {true}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      secureTextEntry={true}
      />
     <TextInput 
     ref={autoentry}
     selectionColor={"green"}
      style={styles.textInput}
      placeholder='autoCapitalize'
      autoCapitalize='characters'
      onBlur={(text)=>console.log("onBlur ====> ",text)}
      onContentSizeChange={()=>console.log("Change Sizing")}
      multiline
      // editable={false}
      inlineImagePadding={2}
      
      maxLength={10}
  
      onEndEditing={(text)=>console.log("onnneddiiiitttiiinnngggg")}
      keyboardType='phone-pad'
      inputMode='tel'
      numberOfLines={6}
      />
      <View style={{margin:10,borderCurve:'continuous',borderRadius:50}}>
      <Button title='Display'
       onPress={()=>{setDisplay(true),{clearevents}}}
       />
      </View>
       <View style={{margin:10,borderCurve:'continuous',borderRadius:50}}>
       <Button title='Reset'
       onPress={clearevents}
       />
       </View>

  
      
      <View>
     {   display ?
        <View>
        <Text style={{fontSize:20}}>Name : {name}</Text>
        </View>
        : null
    }
        
      </View>

      <View>
       <CustomTextInputField/>
      </View>
    </View>

  );
};
 
export default InputTextFiled;

const styles = StyleSheet.create({
  textInput: {
    fontSize:20,
    color:'white',
    borderBottomWidth:2,
    borderBottomColor:"red",
    margin:10,
    padding:10,
  // borderBlockStartColor:"transparent",
  }
});
