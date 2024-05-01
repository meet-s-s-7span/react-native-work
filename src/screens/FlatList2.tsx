import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, FlatList, TextInput, Touchable, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface FlatList2Props {}

const FlatList2 = (props: FlatList2Props) => {

    // const [listdata,setNameUpdated] = React.useState( [
    //     {

           
    //     },
    //     {
    //       name:'PVR Mallapur Hyder  abad'
    //     },
    //     {
        
    //         name:'PVR IRRUM MANZIL Hyderabad'
    //     },
    //     {
          
    //         name:'PVR Panjagutta Hyderabad'
    //     },
    //     {
         
    //         name:'PVR Kukatpally Hyderabad'
    //     },
    //     {
    //         name:'PVR RK Cineplex Hyderabad'
    //     },
    //     {
    //       name:'PVR Musarambagh -Hyderabad'
    //   },
    //   {
         
    //   },
    //   {
         
    //   },
    //   {
          
    //   },
    //   {
         
    //   },
    //   {
          
    //   },

    // ])

  const [imagesCity,setTapEvent] = React.useState([  
    {
      id:1,
      img : require('../assets/images/PVR/Rectangle11.png'),
      cname: 'Delhi',
      isSelected: true,
      name:'Delhi PVR Musarambagh'
    },
    {
      id:2,
      img : require('../assets/images/PVR/Mumbai.png'),
      cname: 'Mumbai',
      isSelected: false,
      name:' Mumbai PVR RK Cineplex'
    },
    {
      id:3,
      img : require('../assets/images/PVR/Rectangle.png'),
      cname: 'Chennai',
      isSelected: true,
      name:'Chennai PVR Kukatpally'
    },
    {
      id:4,
      
      img : require('../assets/images/PVR/Noida.png'),
      cname: 'Noida',
      isSelected: true,
      name:'Noida PVR Panjagutta'
    },
    {
      id:5,
      img : require('../assets/images/PVR/Rectangle11.png'),
      cname: 'Coimbatore',
      isSelected: true,
      name:'Coimbatore PVR IRRUM MANZIL'
    },
  ])

  const [searchText, setSearchText] = React.useState('');
  
  function searchInput(text: string) {
    setSearchText(text.toLowerCase());
}

function filterData() {
    if (searchText) {
      return imagesCity.filter(item => 
        item.cname.toLowerCase().includes(searchText)
      // item.isSelected && item.cname.toLowerCase().includes(item.cname.toLowerCase())
      );
    
    } else {
      
      return imagesCity;
       }
    //  if (searchText) {
    //     return listdata.filter(item => {
    //         return imagesCity.filter(city => 
    //             city.isSelected && item.name.toLowerCase().includes(city.cname.toLowerCase())
    //         );
    //     });
    // } else {
    //     return listdata;
    // }
}

function tapEvent(id: number,cname: string){
  console.log('tapEvent ==>' + id)
  console.log('cname ==>' + cname)

  // let upDatedName = listdata.map((item) =>{
    
  // })
  setTapEvent((item) => ({
    ...item,
    isSelected: cname, 
  }));

  let upDatedEvent = imagesCity.map((item) => {
    if (item.id === id) {
      return {
     ...item,
        
        isSelected:false

      }
    } else {
      return {
        ...item,
           
           isSelected:true
           
         }
    }
  })

  console.log(upDatedEvent);
  setTapEvent(()=>upDatedEvent)
}
  // function serchText(){
  //   // console.log(imagesCity.filter(setInput => setInput.cname));
  //   // console.log(listdata.filter(item => item.name.toLowerCase().includes(serchInput.name)) );
  // }
  // function serchInput(text: string){
  //   console.log(text);
    
  //   let serachValue = imagesCity.map((item) =>
  //   // console.log(item.cname)

  //   item.cname.toLowerCase().includes(text.toLowerCase())
  //   )
  //   console.log(serachValue);
  //   // return serachValue;
  // }
  return (
    <View style={styles.container}>
        {/* <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{ flex: 1 }}>
      <View>
        <Text>Your content here</Text>
      </View>
    </LinearGradient> */}
      {/* <Text>FlatList2</Text> */}
      <ImageBackground
        style={styles.images}
        source={require('../assets/images/Background.png')}
        resizeMode='cover'
      >
      {/* <LinearGradient colors={['#170641','#2E1371','#323559']}> */}

      
          <View style={{flexDirection:'row' , justifyContent:'space-between',paddingVertical:16,paddingHorizontal:20}}>
          <View style={{elevation:5,opacity:1,borderLeftWidth: 1,pointerEvents:'box-none',shadowColor:"#60FFCA",borderColor:'#60FFCA',borderTopWidth:1,borderRadius:100,backgroundColor:'#2E1371',margin:6,padding:6}}>
            <Image source={require('../assets/images/ArrowLeft.png')} resizeMode='cover'/>
            </View>
            <Text style={{padding:6,fontFamily:'Poppins-Regular',fontWeight:'700',fontSize:18}}>PVR Cinemas</Text>
            <View style={{elevation:5,opacity:1,borderLeftWidth: 1,pointerEvents:'box-none',shadowColor:"#60FFCA",borderColor:'#60FFCA',borderTopWidth:1,borderRadius:100,backgroundColor:'#2E1371',margin:6,padding:6}}>
            <Image source={require('../assets/images/carbon_location-filled.png')}/>
            </View>
        </View>
        <View style={{marginHorizontal:10}}>
          {/* <Image source={require('../assets/images/PVR/ser.png')}/> */}
          <LinearGradient colors={['#A4C8FF1A','#A4C8FF00']} style={{borderRadius:100}}>
        <TextInput
        inlineImageLeft='ser'
        inlineImagePadding={40}
        style={{ borderRadius:20,marginVertical:5,paddingLeft:13.69}}
        placeholder='Tap to search'
        // onChange={()=>serchText()}
        onChangeText={(text) => searchInput(text)}
        />
        </LinearGradient>
        <FlatList
            
            data={filterData()}
            renderItem={
                ({item})=>
                // <Text></Text>?
                <TouchableOpacity  onPress={()=>tapEvent(item.id, item.cname)} activeOpacity={0.6}> 
                {
                  item.isSelected
                  ?
                   <View style={{margin:5}}>
                   <Image source={item.img} resizeMode='contain'style={{marginBottom:15}}/>
                   <View style={{elevation:5,opacity:1,borderLeftWidth: 1,pointerEvents:'box-none',shadowColor:"#60FFCA",borderColor:'#60FFCA',borderTopWidth:1.4,borderRadius:100,backgroundColor:'#2E1371'}}>
                   <Text style={{alignSelf:'center',padding:2,marginHorizontal:5}}>{item.cname}</Text>
                   </View>
                   </View>
                   :
                  <View style={{margin:5}}>
<Image source={item.img} resizeMode='contain'style={{marginBottom:15}}/>
<View style={{elevation:5,opacity:1,borderLeftWidth: 1,pointerEvents:'box-none',shadowColor:"#FF316B",borderColor:'#FF316B',borderTopWidth:1.4,borderRadius:100,backgroundColor:'#2E1371'}}>
<Text style={{alignSelf:'center',padding:2,marginHorizontal:5}}>{item.cname}</Text>
</View>
</View>
                }
                   
                    </TouchableOpacity>
// :

                    
            }
            horizontal
            />
        </View>
        
        <View>
        <FlatList
          
            data={filterData()}
            renderItem={
                ({item})=> 
              item.name ?
                <View style={{borderRadius:20,margin:10, shadowColor:'#170641',borderBottomColor:"#170656"}}>
                    <LinearGradient colors={['#A4C8FF1A','#A4C8FF00']} style={{flex:1,borderRadius:20,shadowColor:'#00000040'}}>
              
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:22,backgroundColor:'transparent'}}>
                    <Text style={{fontSize:18,fontWeight:'500'}}>{item.name}</Text>
                    <Image source={require('../assets/images/PVR/vecto.png')} style={{marginTop:6}}/>
                    </View>

                    </LinearGradient>
                </View>
                : null
            //     :
            //     <View style={{backgroundColor:"#170641",borderRadius:20,margin:10, shadowColor:'#170641',elevation:8,borderBottomColor:"#170656"}}>
            //     <View style={{flexDirection:'row',justifyContent:'space-between',padding:22}}>
            //     <Text style={{fontSize:18,fontWeight:'500'}}>{item.name}</Text>
            //     <Image source={require('../assets/images/PVR/vecto.png')} style={{marginTop:6}}/>
            //     </View>
            // </View>
            }
            />
        </View>

        {/* </LinearGradient> */}
      </ImageBackground>
    </View>
  );
};
  
export default FlatList2;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  images:{
    flex:1
  }
});
