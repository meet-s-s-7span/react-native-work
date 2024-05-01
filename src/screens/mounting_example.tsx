import React from "react";
import { Button, Text, View } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

class MountingExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mounted: "constructor Mounting Example",
      count: 0,
      favoritefood: "rice",
      id: 1,
    };
    this.favoritefoodRef = React.createRef();
    console.log("constructor Mounting Example");
  } 

  componentDidMount(){
    console.log(" componentDidMount mounting Example");
    this.setState({ mounted: " componentDidMount mounting Example" });

    setTimeout(() => {
      console.log(" componentDidMount Pizzaaaaaaaaaaa");
      console.log(this.state.favoritefood);
      this.setState({favoritefood: "pizza"});
    }, 1200);

    console.log(this.state.favoritefood);
  }
  // shouldComponentUpdate(){
  //   console.log("shouldComponentUpdate: " + this.state.count);
  //   if (this.state.favoritefood !== this.favoritefoodRef.favoritefood) {
  //     // If it has changed, allow the component to re-render
  //     return true;
  //   }
  //   // If the favoritefood state hasn't changed, prevent re-rendering
  //   return false;
  //   // this.setState({ favoritefood: "pista" });
  //   console.log("shouldComponentUpdate....." + this.state.favoritefood);
    
  //   return true; // Indicate whether the component should re-render
  // }
  

  // shouldComponentUpdate(){
  //   console.log("shouldComponentUpdate: " + this.state.count);
  //   this.setState({ favoritefood: "pista" });
  //   console.log("shouldComponentUpdate....."+this.state.favoritefood);
      
  // // if (this.favoritefoodRef.current) {
  // //   this.favoritefoodRef.current.textContent = "asdads";
  // //   console.log("innerershouldComponentUpdate....."+this.state.favoritefood);
  // // } 
  //   return true;
  // }

  
 foodUpdateValue = () => {
  console.log("Food Value button pressed");

  
  this.setState({ favoritefood: "rice" });
}


  render() {
    console.log("Rendered Mounting Example");

    return(
      <View style={{backgroundColor:"black"}}>
        <Text>Mounting Examples: {this.state.mounted}</Text>
        <Button title="shouldComponentUpdate" onPress={() => this.setState({count: this.state.count + 1})}></Button>
        <Text ref={this.favoritefoodRef}>My Favorite Food is {this.state.favoritefood}</Text>
        <Text>My Favorite Food is {this.state.favoritefood}</Text>
        <Button title="Food Value Update" onPress={this.foodUpdateValue}/>
      </View>
    );
  }
}

export default MountingExample; 
