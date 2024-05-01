// import * as React  from 'react';
// import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

// interface HooksExampleProps {}

// const HooksExample = (props: HooksExampleProps) => {
//     const [counter,setCounter] = React.useState(1);
//     // const [isShow,setShow] = React.useState(true);
//    function updateValue(){
//         setCounter(counter+1);
//     } 
//     React.useEffect( () => { 
//         console.log('useEffect....' + counter);
//     },[counter])

//   const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  
//   const reducer = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count + 1 };
//         case 'decrement':
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }
// };
//   const memoizedValue = React.useMemo(() => {
//     // Memoized value calculation
//     return counter * 2;
// }, [counter]); 

//   const handleCallback = React.useCallback(() => {
//     // Callback logic here
//     console.log('Callback invoked');
//     return counter+5;

// }, []);
//   const inputRef = React.useRef(null);


  
//   return (
//     <View style={styles.container}>
//         <Text style={{textAlign:'center',fontSize:50}}>{counter}</Text>
//         <TextInput  ref={inputRef} style={styles.TextInputStyle} onChangeText={updateValue}/>
//         {/* <Button title="Increment" onPress={() =>{(text) => setCounter(parseInt(text))}} /> */}
       
//             {/* <Button title="Dispatch" onPress={() => dispatch({ type: 'increment' })} /> */}
//             <Text>Memorized value: {memoizedValue}</Text>
//             <Text> Countererrr Valuee  ::::{handleCallback()}</Text>
//             {/* <Button title="Callback" onPress={handleCallback} /> */}
            
//     </View>
//   );

// };

// export default HooksExample;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'#6b3a65'
//   },
//   TextInputStyle:{
//     backgroundColor:'white',
//     marginHorizontal:50
//   }
// });
import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

interface HooksExampleProps {

}

const HooksExample = (props: HooksExampleProps) => {

  
const [count,setCounter]=React.useState(0)

const moods ={
    'Happy':"😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊" ,
    'Sad':"😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔",     
    'Angry':"🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬"
}
const MoodContext = React.createContext(moods);

function useEffectEents(){
    // console.log('useEffect....' + count);
}

const countRef = React.useRef(0);
const [buttonColor, setButtonColor] = React.useState('blue');
function updateValueRef(){
    // setCounter(countRef.current+1); ui badle pn value change no thy
    console.log("updateValueRef"+countRef.current);
    setButtonColor('red');
}

  const memoizedValue = React.useMemo(() => {
    console.log("useMemo......");
    // Memoized value calculation
    return count * 2;
}, [count]); 

// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return state + 1 ;
//         case 'decrement':
//             return state - 1;
//         default:
//             return state;
//     }
// };

// Reducer hook
// const [state, dispatch] = React.useReducer(reducer);
console.log(" Hooks Example entry point");
useFocusEffect(() => {
  console.log('useFocusEffect.......');

  return () => {
    console.log('Not ...useFocusEffect......');
  };
})
React.useEffect(() => {
  console.log('useEffect.......');
  return () => {
    console.log('Not ...useEffect......');
  };
})
  return (

    
    
    <View style={styles.container}>
      <Text>HooksExample :{}</Text>
      <Text>useEffect Count :{count}</Text>
      <Button title='useEffect' onPress={()=>setCounter(count+1)}></Button>
      <MoodContext.Provider value={moods}>
        
        <MoodContext.Consumer>
        
          {value => (
            // console.log("");
            <View>
              {Object.keys(moods).map(key => (
                <Button
                  key={key}
                  title={key}
                  onPress={() => {
                    Alert.alert(key, value[key]);
                  }}
                />
              ))}
            </View>
          )}
        </MoodContext.Consumer>
      </MoodContext.Provider>
      {/* <Text>useEffect Count : {}</Text> */}
      <Button color={buttonColor} title='useRef' ref={countRef} onPress={()=>updateValueRef()}/>
                  {/* {state} */}
      {/* <Text>Count : {state}</Text> */}
      {/* <Button title="Dispatch" onPress={() => dispatch({ type: 'decrement' })} /> */}
        <Text>Memo Count : {memoizedValue}</Text>

        <Button title='Press for Navigation' onPress={()=> props.navigation.navigate("MountingExample")} color={"green"}/>
    
    </View>

            
  );
};

export default HooksExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#6b3a65'
  }
});
