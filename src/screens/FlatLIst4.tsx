import react, * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, ImageBackground, ScrollView, Button, Touchable, TouchableOpacity } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

interface FlatList4Props { }

const FlatList4 = (props: FlatList4Props) => {
  const statusBarImages = [
    {
      imageStatus: require('../assets/images/FlateScreen4/e1.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e2.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e3.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e4.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e5.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e6.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e1.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e2.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e3.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e4.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e5.png')
    },
    {
      imageStatus: require('../assets/images/FlateScreen4/e6.png')
    },

  ]

  const [personList, setPersonList] = React.useState([
    {
      id: 1,
      name: 'Albert Flores',
      data: 'Purus urna aliquam est non nunc amet et. Vel id arcu, at ante quam molestie eget. A senectus amet, augue sit rutrum. Magnis viverra cursus eget ut auctor.',
      tm: '2 hours ago',
      pTxt: 'Keep On Running',
      spTxt: 'OKAMOTO\'S — Keep On Running',
      isLike: true,
      likeCount: 256,
      isFollow: true,
      followCount: 205,
      isFollowCounters: true,
    },
    {
      id: 2,
      name: 'Jerome Bell',
      data: 'Enim lectus ornare risus, aliquam pulvinar tortor nisl non. Vel id massa volutpat quis. Quam maecenas quisque id non et consectetur orci ultrices ultrices.'
      , tm: '7 hour ago',
      pTxt: 'Lover Boy',
      spTxt: 'Tyler the Creator',
      isLike: true,
      likeCount: 125,
      isFollow: true,
      followCount: 156,
      isFollowCounters: true,

    },
    {
      id: 3,

      name: 'Devon Lane',
      data: 'Nunc vitae risus risus gravida. Tellus, feugiat interdum tincidunt nec urna. Elementum sed magna rhoncus lacus ornare lectus.'
      , tm: '15 hour ago',
      pTxt: 'Show Me How',
      spTxt: 'Eza',
      isLike: true,
      likeCount: 850,
      isFollow: true,
      followCount: 1000,
      isFollowCounters: true,
    },
    {
      id: 4,
      name: 'Cody Fisher',
      data: 'Aenean eleifend quis nec turpis semper. Aenean proin ultrices et, orci. Sagittis, aliquam amet accumsan ultrices.'
      , tm: 'Yesterday',
      pTxt: 'Can I Call You Tonight?njihi',
      spTxt: 'Tyler the Creator',
      isLike: true,
      likeCount: 350,
      isFollow: true,
      followCount: 850,
      isFollowCounters: true,
    },
    {
      id: 5,

      name: 'Darrell Steward',
      data: 'Est cursus dictum diam dictum viverra ac. Cras non viverra porta dui morbi. Diam sed lectus morbi pulvinar sed.'
      , tm: '2 days ago',
      pTxt: 'Some Feeling',
      spTxt: 'Ducko Mcfie',
      isLike: true,
      likeCount: 465,
      isFollow: true,
      followCount: 200,
      isFollowCounters: true,
    },

  ])
  // const [selectedFollower,follower] = React.useState(true)

  // const [list, setList] = React.useState(initialList);

  function likeTapped(id: number) {
    console.log('likeTapped ==> ' + id)

    let personListData = personList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isLike: !item.isLike,
          likeCount: item.isLike ? item.likeCount + 1 : item.likeCount - 1
        }
      } else {
        return item;
      }
    })


    setPersonList(() => personListData)

    // let item = personList.filter(item => item.id == id)
    // item[0].likeCount += 1 
    // console.log(item);
  }
  function followTapped(id: number) {
    console.log('followTapped ==>' + id)

    let personListData = personList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isFollowCounters: !item.isFollowCounters,
          // isFollow:item.isLike? (item.likeCount+1):item.likeCount-1
          followCount: item.isFollowCounters ? item.followCount + 1 : item.followCount - 1
        }
      } else {
        return item;
      }
    })
    setPersonList(() => personListData)
    // console.log(personListData)

  }

  function followButton(id: number) {
    console.log('followButton ==>' + id)

    let personListData = personList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isFollow: item.isFollow ? false : true,
        }
      } else {
        return item;
      }
    })
    setPersonList(() => personListData)
    console.log(personListData)
  }
  // function handleClick() {
  //   const nextList = [...list];
  //   nextList.reverse();
  //   setList(nextList);
  // }

  // function _onPressButton() {
  //  console.log('Press button)');
  // }
  // function _onPressButton(event: GestureResponderEvent): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <ImageBackground
      style={styles.backImage}
      source={require('../assets/images/FlateScreen4/MOMENTS.png')}
      resizeMode='cover'
    >
      <View style={styles.container}>
        <View style={styles.topBarNav}>
          <View style={styles.viewTopbar}>
            <Image
              source={require('../assets/images/FlateScreen4/camara.png')}
              resizeMode='cover'
            // height={10}
            />
          </View>
          <View style={styles.topBarText}>
            <Text style={styles.topBarFont}>Hi, Williamson</Text>
          </View>

          <View style={styles.topBarImage}>
            <Image
              source={require('../assets/images/FlateScreen4/recpic.png')}
              resizeMode='cover'
            />
          </View>
        </View>
        <ScrollView horizontal>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/images/FlateScreen4/plus.png')} style={styles.plusImage} resizeMode='cover' />
            <FlatList
              data={statusBarImages}
              renderItem={
                ({ item }) =>
                  <View style={styles.circleView}>
                    <View style={[styles.circle]} />
                    <Image source={item.imageStatus} style={styles.FlatImage} />
                  </View>

              }
              horizontal
            />
          </View>
        </ScrollView>

        <FlatList
          //  style={{backgroundColor:'orange' ,flexWrap:'nowrap'}}

          data={personList}
          //  tvParallaxProperties={e}
          // accessibilityLiveRegion='assertive'
          // accessible={selectedFollower}
          // onMagicTap={selectedFollower}
          renderItem={({ item }) =>
            <View style={styles.box}>
              <Image source={require('../assets/images/FlateScreen4/e6.png')} resizeMode='cover' style={styles.boxImage} />
              <View style={styles.textBoxStyle}>
                <Text style={styles.nameBox}>{item.name}</Text>
                <TouchableOpacity
                  // onPress={()=>followButton(item.id)}
                  onPress={() => followButton(item.id)}
                  style={styles.followButtonTap}>
                  {/* <View style={{ backgroundColor: '#FE91B0', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 5 }}>
                <Text style={{ color: 'white' }}>Follow</Text>
            </View> */}

                  {
                    item.isFollow ?

                      <View style={styles.followTap}>
                        <Text style={styles.followTextColor}>Follow</Text>
                      </View>
                      :
                      <View style={styles.followingTap}>
                        <Text style={styles.followTextColor}>Following</Text>
                      </View>
                  }



                </TouchableOpacity>

              </View>
              <Text style={styles.dataText}>{item.data}</Text>
              <Text style={styles.timeText}>2 hours ago</Text>
              <View style={{ flexDirection: 'row', marginTop: "8 %" }}>
                <Image style={styles.bottomBoxImage} source={require('../assets/images/FlateScreen4/r2.png')} resizeMode='cover' />
                <View style={styles.pTextView}>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.pText}>{item.pTxt}
                    </Text>
                    <Text style={styles.spText}>{item.spTxt}</Text>
                  </View>
                  <Image source={require('../assets/images/FlateScreen4/play.png')} style={styles.smallImage} />

                </View>
              </View>
              <View style={styles.likeComView}>
                <TouchableOpacity onPress={() => likeTapped(item.id)} activeOpacity={0.6}>
                  {
                    item.isLike
                      ?
                      <View style={styles.likeStyle}>

                        <Image source={require('../assets/images/FlateScreen4/like.png')} style={styles.unlikeImage} />
                        <Text style={styles.likeCount}>{item.likeCount}</Text>
                      </View>
                      :
                      <View style={styles.likeStyle}>

                        <Image source={require('../assets/images/FlateScreen4/like.png')} style={styles.likeImage} />
                        <Text style={styles.upDatetedLikeCount}>{item.likeCount}</Text>
                      </View>
                  }
                  {/* <View style={{flexDirection:'row',alignSelf:'flex-end',marginRight:"1%",marginTop:"3%"}}>
            
              <Image source={require('../assets/images/FlateScreen4/like.png')} style={{height:25,width:25,margin:2}}/>
              <Text style={{color:'#C4C4C4',alignSelf:'center',fontSize:18}}>{item.likeCount}</Text>
              </View> */}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => followTapped(item.id)} activeOpacity={0.6}>

                  {
                    item.isFollowCounters
                      ?
                      <View style={styles.followView}>

                        <Image source={require('../assets/images/FlateScreen4/comment.png')} style={styles.followCountView} />
                        <Text style={styles.followCount}>{item.followCount}</Text>
                      </View>
                      :
                      <View style={styles.followView}>

                        <Image source={require('../assets/images/FlateScreen4/comment.png')} style={styles.followUpdatetedCount} />
                        <Text style={styles.updatetedFolowCount}>{item.followCount}</Text>

                      </View>
                  }
                </TouchableOpacity>
              </View>
            </View>

          }
        // keyExtractor={(item)=>item.id}
        />
      </View>
    </ImageBackground>
  );
};

export default FlatList4;

const styles = StyleSheet.create({
  backImage: {
    flex: 1
  },
  container: {
    flex: 1,
    // backgroundColor: 'orange'
  },
  topBarNav: {
    // backgroundColor: 'black',
    flexDirection: 'row',
    marginTop: 5
  },
  viewTopbar: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10
  },
  topBarImage: {
    flex: 0.4,
    alignSelf: 'center',
    alignItems: 'flex-end',
    // backgroundColor:'green',
    marginRight: 20
  },
  topBarText: {
    flex: 1,
    // backgroundColor:'orange',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  topBarFont: {
    fontSize: 20,
    fontWeight: '700'
  },
  FlatImage: {
    // flexDirection:'row',zZ
    height: 45,
    width: 45,
    // marginStart:5,
    // marginEnd:10,
    // padding:3,
    // marginVertical:10,
    // marginHorizontal:2,
    // zIndex:2,
    // margin:5,

    // backgroundColor:'black'
    // justifyContent:'space-between'
  },
  circle: {
    marginLeft: "70%",
    marginBottom: -14,
    zIndex: 4,
    height: 15,
    width: 15,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2.5,
    backgroundColor: '#FF316B',
    // alignContent:'flex-end',
    // alignItems:'flex-end',
    // alignSelf:'flex-end',
    // marginRight:"13%",
    // marginBottom:"10%"
  },
  circleView: {
    paddingTop: 10, flex: 1, marginHorizontal: 5,
  },

  plusImage: {
    flex: 1,
    // justifyContent:'center',
    // padding:10,
    height: 45,
    width: 45,
    // backgroundColor:'white',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 3,
    marginBottom: 25,
  },
  textBoxStyle: {
    flexDirection: 'row', justifyContent: 'space-between'
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    // position: 'absolute',
    borderRadius: 15.6,
    // justifyContent:'center',
    height: 'auto',
    width: "auto",
    alignContent: 'center',
    // alignItems:'flex-end',
    alignSelf: 'center',
    marginHorizontal: "5%",
    paddingBottom: "5%",
    // marginRight:"13%",    
    // marginBottom:"10%"
    // alignSelf:'center',
    // marginLeft:10,
    // marginRight:10,
    marginTop: '15%',
    marginBottom: '5%'
    // marginHorizontal:30
  },
  boxImage: {
    height: 70,
    width: 70,
    // zIndex: 10,
    marginTop: "-10%",
    marginLeft: "10%",
    shadowColor: 'red',
    // elevation: 5,
    opacity: 1,
    
  },
  bottomBoxImage: {
    alignSelf: 'flex-end',
    marginLeft: '7%',
  },
  nameBox: { color: 'black', paddingLeft: '7%', fontSize: 20, fontWeight: '700', flexWrap: "nowrap", flex: 1 }
  ,
  followButtonTap: { paddingRight: "7%" },
  followTap: { backgroundColor: '#FE91B0', paddingHorizontal: 14, paddingVertical: 5, borderRadius: 5 }
  ,
  followingTap: { backgroundColor: '#898A8D', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 5 },

  followTextColor: { color: 'white' },
  dataText: { color: 'black', paddingLeft: '7%', paddingRight: '4%', paddingTop: "5%", fontSize: 16 },
  timeText: { color: '#898A8D', fontSize: 12, paddingLeft: '7%', paddingTop: "5%" },
  pTextView: { flex: 1, flexDirection: 'row', marginHorizontal: "3%", justifyContent: 'space-between' },
  pText: { color: 'black', fontSize: 16 },
  spText: { color: '#6B6D7A', fontSize: 10 },
  smallImage: { alignSelf: 'center', marginRight: "5%" },
  likeComView: { flexDirection: 'row', marginTop: "7%", alignSelf: 'flex-end', marginRight: '6%' },
  likeStyle: { flexDirection: 'row', alignSelf: 'flex-end', marginRight: "1%", marginTop: "3%", },
  unlikeImage: { height: 25, width: 25, margin: 2, tintColor: '#C4C4C4' },
  likeCount: { color: '#C4C4C4', alignSelf: 'center', fontSize: 18 },
  likeImage: { height: 25, width: 25, margin: 2 },
  upDatetedLikeCount: { color: '#FE91B0', alignSelf: 'center', fontSize: 18 },
  followView: { flexDirection: 'row', alignSelf: 'flex-end', marginTop: "3%" },
  followCount: { color: '#C4C4C4', alignSelf: 'center', fontSize: 18 },
  updatetedFolowCount: { color: '#FE91B0', alignSelf: 'center', fontSize: 18 },
  followCountView: { height: 25, width: 25, margin: 2, marginLeft: 10, },
  followUpdatetedCount: { height: 25, width: 25, margin: 2, marginLeft: 10, tintColor: '#FE91B0' }

});
