import axios from 'axios';
import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

interface AxiosExampleProps {}

const AxiosExample = (props: AxiosExampleProps) => {

React.useEffect(() => {
    getData();
    // console.log()
},[])

const getData = async () => {
    axios.post('https://62dacbc8e56f6d82a769ea30.mockapi.io/Bus', {
        "Bus_Name": "CHIGOOOOOOOOEXPERTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",
        "BusRTONumber": "Amare tya number j no hoi",
        "Bus_Driver_Name": "CHIgakaka",
        "Bus_Average": "gha karti jai",
        "Bus_KM": "20202020",
        "Bus_Image": "https://loremflickr.com/640/480/transport",
        "id": "20"
    })
    .then(response => {
       
        console.log('Data successfully posted:', response.data);
    })
    .catch(error => {
        
        console.error('Error posting data:', error);
    });
}

  return (
    <View style={styles.container}>
      <Text>AxiosExample</Text>
      
      {/* <TextInput placeholder='driver Name' value=''/> */}
    </View>
  );
};

export default AxiosExample;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
