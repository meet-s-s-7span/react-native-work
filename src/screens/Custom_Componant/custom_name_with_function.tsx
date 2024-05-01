import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
interface CustomNameWithFunctionProps {
    name: string;
    roll: number;
}

export default function CustomNameWithFunction({name,roll}: CustomNameWithFunctionProps){
return(
    <Text style={styles.container}>
        Hellooooooo!{name}
    </Text>
);
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F6F6F6',
    }
  });