import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';

interface FlatList5Props {}

const FlatList5 = (props: FlatList5Props) => {

  const [goalListData,setUpdateGoalList] = React.useState(
  [
    {
      id:1,
      containts: 'Capture Life Lessons',
      isClicked: true,
      isButtonON: true,
    },
    {
      id:2,
      containts: 'Connect with Relatives',
      isClicked: true,
      isButtonON: true,
    },
    {
      id:3,
      containts: 'Have Fun',
      isClicked: true,
      isButtonON: true,
    },
    {
      id:4,
      containts: 'Preserve Family History',
      isClicked: true,
      isButtonON: true,
    },
    {
      id:5,
      containts: 'Remember Loved Ones',
      isClicked: true,
      isButtonON: true,
    },
    {
      id:6,
      containts: 'Other',
      isClicked: true,
      isButtonON: true,
    },
  ])

  function goalListClick( id: number){
    console.log("Goal clicked =>"  +id);
    let updatedClickEvent = goalListData.map((item) => {
      if (item.id === id) {
        return {
       ...item,
          isClicked: item.isClicked? false : true,
        }
      } else {
        return item;
      }
    })
    setUpdateGoalList((()=>updatedClickEvent))

    console.log("updated click........"+updatedClickEvent);
    let count=0;
    let updatedSaveEvent = updatedClickEvent.map((item) => {
      if(item.isClicked===false){
        console.log("Clicked!!" + item.id)
        count++;
        console.log(count)

      
        // return count
        // return item.id
      }
    })
    
    

    // setUpdatedButton(()=>updatedSaveEvent)
    // setUpdateGoalList((()=>updatedSaveEvent))
    // console.log(updatedSaveEvent);

  }
  function changeButton(){
    console.log(goalListData);
    
    let updatedButtonEvent = goalListData.map((item) =>{
      if(item.isButtonON===true){
        return {
       ...item,
          // isButtonON: goalListClick?,
        }
      }else{
        return {
       ...item,
          isButtonON: true,
        }
      }
    })
    // setUpdateGoalList((()=>updatedButtonEvent))
    console.log(updatedButtonEvent);
  }
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.topBar}>
            <Image source={require('../assets/images/ChevronIcon.png')} resizeMode='cover'/>
            <Text style={styles.topBarText}>Edit Goals</Text>
        </View>
        <View style={styles.centerContainer}>
            {/* <Text style={styles.goalText}>What are your goals?</Text> */}
            {/* <ScrollView> */}
            <View style={styles.goalListView}>
              {/* <Text style={styles.goalListText}>Capture Connect with Relatives Conne ct with Relatives</Text> */}
              <FlatList
              style={styles.flatListData}
              data={goalListData}
              // windowSize={}
              // initialNumToRender={}
              // horizontal
              renderItem={({item}) => 
              <TouchableOpacity  onPress={()=>goalListClick(item.id) } activeOpacity={0.6}>{
                
                item.isClicked?
                <Text style={styles.goalListText}>{item.containts}</Text>
                :
                <Text style={styles.updateGoalListText}>{item.containts}</Text>
              }
              </TouchableOpacity>
                
              }
              
              // stickyHeaderHiddenOnScroll={true}
              ListHeaderComponent={()=><Text style={styles.goalText}>What are your goals?</Text>}
              contentContainerStyle={{
                flex:1,
                flexDirection: 'row',
                flexWrap: 'wrap',
              
                // justifyContent: 'flex-start',
                // alignItems: 'flex-start',
                // alignSelf:'center',
                alignContent: 'center',
                // alignItems:'center',
                // justifyContent:'center'
            }}
              // numColumns={2}
              />
            </View>
            {/* </ScrollView> */}
        </View>
        <TouchableOpacity onPress={()=>changeButton()} >
              <View style={goalListData.filter( updatedClickEvent=>updatedClickEvent.isClicked===false).length >= 2? styles.updatedBottomBar:styles.bottomBar}>
                <Text style={styles.bottomBarText}>Save</Text>
              </View>
            
        </TouchableOpacity>
      </View>
    </View>
    </NavigationContainer>
  );
};

export default FlatList5;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1C3E5E',
    position:'absolute',
    bottom:0
    // opacity:0.9
  },
  innerContainer: {
    flex:1,
    backgroundColor:'#FFFFFF',
    opacity:0.9
  },
  topBar:{
    // flex:0.1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:28,
    marginTop:24,
    paddingBottom:10,
    borderBottomWidth:1,
    borderColor:'#2C2C2C',
    // backgroundColor:'red',
  },
  topBarText:{
    // backgroundColor:'orange',
    color:'#2C2C2C',
    fontSize:18,
    fontWeight:'600',
    fontFamily:'Poppins-Regular',
    alignSelf: 'center'
  },
  centerContainer:{
    flex:1,
    // backgroundColor:'orange',
    justifyContent:'center',
    // resizeMode:'contain',
    // paddingHorizontal:24
    // alignItems:'center'
    // alignContent:'center',

  
  },
  bottomBar:{
    // flex:1,
    backgroundColor:'#ACACAC',
    marginHorizontal:24,
    marginBottom:77,
    borderRadius:100
  },
  updatedBottomBar:{
    
    backgroundColor:'#2C2C2C',
    marginHorizontal:24,
    marginBottom:77,
    borderRadius:100
  },
  bottomBarText:{

  color:'#ACACAC',
  textAlign:'center',
  fontSize:14,
  fontWeight:'600',
  alignSelf: 'center',
  marginVertical:21.5,
  },
  updatedBottomBarText:{
    color:'#style={styles.bottomBar}',
  textAlign:'center',
  fontSize:14,
  fontWeight:'600',
  alignSelf: 'center',
  marginVertical:21.5,
  },
  goalText:{
    // flex:1,
    color:'#000000',
    fontSize:24,
    fontWeight:'400',
    fontFamily:'Poppins-Regular',
    // flexWrap:'wrap',
    
  },
  goalListView:{
    flex:1,
    // flexWrap:'wrap',
    // backgroundColor:'red',
    paddingLeft:22,
    // paddingVertical:11,
    // borderRadius:100,
    // borderWidth:2,
    // borderColor:'#2C2C2C80',
    // resizeMode:'cover',
    alignItems:'flex-start',
    // alignSelf:'flex-start',  
  },
  goalListText:{
    color:'#A6A9BD',
    fontSize:18,
    fontWeight:'500',
    // backgroundColor:'green',
    // flexWrap:'wrap',
    // flex:1,
    // backgroundColor:'red',
    paddingHorizontal:22,
    paddingVertical:11,
    borderRadius:100,
    borderWidth:2,
    borderColor:'#2C2C2C80', 
    marginBottom:8,
    marginRight:3
  },
  updateGoalListText:{
    color:'#2C2C2C',
    fontSize:18,
    fontWeight:'500',
    // backgroundColor:'green',
    // flexWrap:'wrap',
    // flex:1,
    // backgroundColor:'red',
    paddingHorizontal:22,
    paddingVertical:11,
    borderRadius:100,
    borderWidth:2,
    borderColor:'#2C2C2C', 
    marginBottom:8,
    marginRight:3
  },
  flatListData:{
    // marginBottom:10,
    // flex:1,
    // backgroundColor:'red',
    // width:'100%',
    // justifyContent:'flex-end',
    // alignItems:'flex-end',

    // alignContent:'flex-start'
    // flexWrap:'wrap',
    // flex:1,
    // backgroundColor:'red',
    // paddingRight:"10%",
    // paddingVertical:11,
    // borderRadius:100,
    // alignItems:'center',
    
  }
});
