import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, FlatList, ScrollView } from 'react-native';

interface CommingSoonProps { }

const CommingSoon = (props: CommingSoonProps) => {
  const imagesCity = [
    {
      id: 1,
      img: require('../assets/images/PVR/image1.png'),
      pName: 'Thoor'
    },
    {
      id: 2,
      img: require('../assets/images/PVR/image2.png'),
      pName: 'meet'
    },
    {
      id: 3,
      img: require('../assets/images/PVR/image3.png'),
      pName: 'asdasdasd'
    },
    {
      id: 4,
      img: require('../assets/images/PVR/image4.png'),
      pName: 'aaaaa'
    },
    {
      id: 5,
      img: require('../assets/images/PVR/image5.png'),
      pName: 'bbbbbbbb'
    },
    {
      id: 6,
      img: require('../assets/images/PVR/image6.png'),
      pName: 'cde'
    },
    {
      id: 7,
      img: require('../assets/images/PVR/image7.png'),
      pName: 'sdas'
    },
    {
      id: 8,
      img: require('../assets/images/PVR/image8.png'),
      pName: 'asdasd'
    },
    {
      id: 9,
      img: require('../assets/images/PVR/image11.png'),
      pName: 'asdasd'
    },
    {
      id: 10,
      img: require('../assets/images/PVR/image1.png'),
      pName: 'asdad'
    },
    {
      id: 11,
      img: require('../assets/images/PVR/image2.png'),
      pName: 'asd'
    },
    {
      id: 12,
      img: require('../assets/images/PVR/image3.png'),
      pName: 'ssdfdgfd'
    },
    {
      id: 13,
      img: require('../assets/images/PVR/image4.png'),
      pName: 'adfbdfbf'
    },
    {
      id: 14,
      img: require('../assets/images/PVR/image5.png'),
      pName: 'sdfsdfsdf'
    },
    {
      id: 15,
      img: require('../assets/images/PVR/image6.png'),
      pName: 'sdsdfdvcx'
    },
    {
      id: 16,
      img: require('../assets/images/PVR/image7.png'),
      pName: 'dfewerwe'
    },
    {
      id: 17,
      img: require('../assets/images/PVR/image8.png'),
      pName: 'qqqqqqqqq'
    },
    {
      id: 18,
      img: require('../assets/images/PVR/image11.png'),
      pName: 'affeew'
    },


  ]
  // const searchQuerys = [
  //   searchQuery
  // ]

  const [input2, setInput2] = React.useState("")
  function searchInput2(text: string) {
    setInput2(text.toLowerCase());
}
const [input, setInput] = React.useState("")
function searchInput(text: string) {
  setInput(text.toLowerCase());
}
function filterData2() {
  if (input2) {
    return imagesCity.filter(item => item.pName.toLowerCase().includes(input2));
  
  } else {
    
    return imagesCity;
     }
}
function filterData() {
  if (input) {
    return imagesCity.filter(item => item.pName.toLowerCase().includes(input));
  
  } else {
    
    return imagesCity;
     }
}

  // console.log(imagesCity[0].pName)
  // console.log(input)

  //   const getNames = function( countries ) {
  //     return countries.map(function({Name}) {
  //         return Name;
  //     });
  // };

  // const picName = function(pName){
  //   return pName.map(function({pName}))
  // }

  function searchQuery() {
    // console.log(input)
    //  return  imagesCity.map(imagesCity=>imagesCity.pName.toLowerCase() === input.toLowerCase())

    imagesCity.filter((e) => {
      return e.pName === input;
    })
    // for (let i = 0; i < imagesCity.length; i++) {
    //   if (imagesCity[i].pName?.toLowerCase() == input.toLowerCase()) {
    //     <View>
    //       {/* <Image source={imagesCity[i].img} resizeMode='cover' style={{ marginHorizontal: 6, justifyContent: 'space-evenly', marginVertical: 5 }} /> */}
    //       <Text style={{ fontSize: 20,color:'orange' }}>{imagesCity[i].pName}</Text>
    //     </View>
    //   }
    // }
  }
  // console.log(imagesCity[0].pname?.toLowerCase() == input.toLowerCase())

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
        style={{ flex: 1 }}
        source={require('../assets/images/Background.png')}
        resizeMode='cover'
      >

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16, paddingHorizontal: 20 }}>
          <View style={{ elevation: 5, opacity: 1, borderLeftWidth: 1, pointerEvents: 'box-none', shadowColor: "#60FFCA", borderColor: '#60FFCA', borderTopWidth: 1, borderRadius: 100, backgroundColor: '#2E1371', padding: 6 }}>
            <Image source={require('../assets/images/ArrowLeft.png')} />
          </View>
          <Text style={{ padding: 6, fontFamily: 'Poppins-Regular', fontWeight: '700', fontSize: 18 }}>Coming Soon</Text>
          <View style={{ elevation: 5, opacity: 1, borderLeftWidth: 1, pointerEvents: 'box-none', shadowColor: "#60FFCA", borderColor: '#60FFCA', borderTopWidth: 1, borderRadius: 100, backgroundColor: '#2E1371', padding: 6 }}>
            <Image source={require('../assets/images/carbon_location-filled.png')} />
          </View>
        </View>
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          {/* <Image source={require('../assets/images/PVR/ser.png')}/> */}
          <TextInput
            style={{ backgroundColor: "#170641", borderRadius: 20, marginVertical: 5, paddingHorizontal: 5 }}
            placeholder='Tap to search'
            inlineImageLeft='ser'
            inlineImagePadding={55}
            value={input}
            onChange={searchQuery}
            // onChangeText={(text) => setInput(text)}
            onChangeText={(text) => searchInput(text)}
          // onEndEditing={(searchQuerys)=>console.log(searchQuerys && true)}
          />
          <ScrollView>
            {/* <View> */}

            <FlatList
              scrollEnabled={false}
              data={filterData()}
              renderItem={
                ({ item }) =>
                  <View>
                    <Image source={item.img} resizeMode='cover' style={{ marginHorizontal: 6, justifyContent: 'space-evenly', marginVertical: 5 }} />
                    <Text style={{ fontSize: 20 }}>{item.pName}</Text>
                  </View>

              }
              numColumns={3}

            />

            {/* </View> */}

            <TextInput
              style={{ backgroundColor: "#FCFCFC36", borderRadius: 20, marginVertical: 10 }}
              placeholder='Now Showing'
              onChangeText={(text) => searchInput2(text)}
            />
            <FlatList

              data={filterData2()}
              renderItem={
                ({ item }) =>
                <View>
                  <Image source={item.img} resizeMode='cover' style={{ marginHorizontal: 6, justifyContent: 'space-evenly', marginVertical: 5 }} />
                  <Text style={{ fontSize: 20 }}>{item.pName}</Text>
                  </View>
              }
              horizontal

            />
          </ScrollView>
        </View>

      </ImageBackground>
    </View>
  );
};

export default CommingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
