import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

interface NavigationExampleProps {}
const Stack = createNativeStackNavigator();
function SignUp(){
  console.warn('SignUp Successfully');
}

const NavigationExample = (props: NavigationExampleProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login Screen' 
      screenOptions={{headerStyle:{
        backgroundColor: '#60FFCA',
    
      }}}
      >
        <Stack.Screen name="Login Screen" component={LoginScreen} 
        options={{
          headerStyle:{
            backgroundColor:'#192f'
          },
          headerRight:()=><Button title='Sign UP' onPress={SignUp}/>,
        }}
        />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = (props:any) => {
  
  const {name,age}=(props.route.params);
  console.warn(props.route.params)
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      {/* <Text>Name : {props.route.params.name}</Text>
      <Text>Age : {props.route.params.age}</Text> */}
      <Text>Name : {name}</Text>
      <Text>Age:{age}</Text>
      <Text>Enter Name is : {props.route.params.Name}</Text>
      <Text>{props.route.Name}</Text>
      <Button title='Go back' onPress={()=> props.navigation.goBack('Login Screen',{name,age})}/>
    </View>
  )
};
const LoginScreen = (props:any) => {
  const[Name,setName]= React.useState("");
  const name = 'Meet';
  const age = 22;
  return (
    <View style={styles.container}>
      <Text>Hello {name}!</Text>
      <Text> Age is :{age}</Text>
      <TextInput placeholder='Enter Name' 
      onChangeText={(text)=>setName(text)}
      />
      
      <Text>LoginScreen</Text>
      <Button title='Press for Navigation' onPress={()=> props.navigation.navigate('Home Screen',{name,age,Name})}/>
    </View>
  )
};



export default NavigationExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#4c669f',
  }
});
