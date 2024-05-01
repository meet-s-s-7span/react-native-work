import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UseEdit from 'react-native-vector-icons/FontAwesome5';

interface BusInfoProps { }

const BusInfo = (props: BusInfoProps) => {
  
  const [data, setData] = React.useState([]);
  const [showModal,setShowModal] = React.useState(false);
  const [passedData, setPassedData] = React.useState();
  
  const [busDriverName, setBusDriverName] = React.useState('');
  const [busDriverNameError, setBusDriverNameError] = React.useState(false);
  
  React.useEffect(() => {
    getAPIData();
  }, [showModal]);
  
    const getAPIData = async () => {
      console.log("getBusAPIData.........");
  
      const url = "https://62dacbc8e56f6d82a769ea30.mockapi.io/Bus";
  
      let result = await fetch(url);
      result = await result.json();
      setData(result);
      console.log(result);
    }
  
  const SubmitData = async () => {

    !busDriverName ? setBusDriverNameError(true) : setBusDriverNameError(false);

    if (!busDriverName) {
      return false;
    }

    console.log(busDriverName);
    const url = "https://62dacbc8e56f6d82a769ea30.mockapi.io/Bus";
    let result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Bus_Driver_Name: busDriverName
      })
    });

    result = await result.json();
    if (result) {
      console.log("User Data");
      getAPIData();
    }
    console.log(result);
  }


  const deleteData = async (id) => {
    const url = "https://62dacbc8e56f6d82a769ea30.mockapi.io/Bus";
    //template letter
    console.log('====================================');
    console.log(`${url}/${id}`);
    console.log('====================================');
    let result = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await result.json();
    if (result) {
      console.log("User Data");
      getAPIData();
    }
    // console.log(result);

  }
  

  const updateUser = (data)=>{
    setShowModal(true);
    setPassedData(data); 
  }

  return (
    <View style={styles.container}>
      <Text>BusInfo</Text>
      <View>
        <TextInput placeholder='Bus_Driver_Name' value={busDriverName} onChangeText={(text) => setBusDriverName(text)} />
        {busDriverNameError ? <Text>Enter Valid Name</Text> : null}
        <Button title='Submit' onPress={SubmitData} />
      </View>
      {
        data.length ?
          data.map((item) => {
            return (
              <View style={{ flexDirection: 'row' }}>

                <Text>{item.Bus_Driver_Name}</Text>
                <Icon name='close-circle' size={20} color={"red"} onPress={() => deleteData(item.id)} />
                <UseEdit name='user-edit' size={20} onPress={()=>updateUser(item)}/>
              </View>
            )
          })


          :
          <Text>NO DATA FOUND</Text>
      }


      <Modal visible={showModal} >
        
          <UserModal  setShowModal = {setShowModal} passedData = {passedData}/>
      </Modal>


    </View>
  );
};

export default BusInfo;

const UserModal = (props)=>{
  console.log(props.passedData)
  console.log(props.passedData.Bus_Driver_Name)
  
  const [updateDriverName,setUpdateDriverName] = React.useState();

  React.useEffect(()=>{

    // props.passedData;
    props.updateDriverName;
    setUpdateDriverName(props.passedData.Bus_Driver_Name);
  },[props.passedData])

  const updateData = async ()=>{
    // console.log("props.passedData.Bus_Driver_Name",props.passedData.Bus_Driver_Name)
    // console.log("updateDriverName",updateDriverName)
    const url = "https://62dacbc8e56f6d82a769ea30.mockapi.io/Bus";
    let result = await fetch(`${url}/${props.passedData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Bus_Driver_Name: updateDriverName
      })
    });
    result = await result.json();
    if (result) {
      console.log("User Data");
   
      // props.setShowModal(false);
      props.setShowModal(false);
      // props.setPassedData();
      props.setPassedData();
      // props.getAPIData();
    }
  }

  return(
    <View style={styles.modalView}>
          <View style={styles.innerModalView}>
            <Text>Modal</Text>
            <TextInput value={updateDriverName} onChangeText={(text)=>setUpdateDriverName(text)}/>
            <Icon name='close-circle' color={"red"} size={50} onPress={()=>props.setShowModal(false)}/>
            <Icon name='save' color={"green"} size={50} onPress={()=>updateData()}/>

          </View>
        </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalView:{
    flex:1,
    // backgroundColor:'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerModalView:{
    backgroundColor:'pink',
    padding:50,
    borderRadius:20,
    shadowColor:'red',
    shadowOpacity:0.70,
    elevation:50
  }

});
