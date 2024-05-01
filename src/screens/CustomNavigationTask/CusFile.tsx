import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable, TouchableOpacity, SectionList } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { orange100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const colorChangeEvent = () => {
  // const colorsArray = ["#1D82CC", "#1DCC98", "#4CAF50", "#FFC107", "#1ED760"];
  // const random = Math.round(Math.random() * colorsArray.length);
  // return colorsArray[random];
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// - red 
// 0-0.5-orange
// 0.5-upper-green
const arrowColor = (companyGrowsRate: string) => {
  const rate = parseFloat(companyGrowsRate.replace('%', '').replace(',', '.'));

  if (rate >= 0 && rate <= 0.5) {
    return 'orange';
  } else if (rate > 0.5) {
    return 'green';
  } else  if (rate < 0) {
    return 'red'; 
  }
}


interface CusFileProps { }
// const navigateToOrder = () => {
//   navigation.navigate('CusHome'); // Navigate to OrderScreen when "Order" text is pressed
// };

// const navigateToHistory = () => {
//   navigation.navigate('CusProfile '); // Navigate to HistoryScreen when "History" text is pressed
// };



const TabFile = createMaterialTopTabNavigator();
const CusFile = (props: CusFileProps) => {

  function navigateToOrder() {
    console.log('navigateToOrder----' + showHistory);
    if (setShowHistory) {
      setShowHistory(true);
    }

  }

  function navigateToHistory() {
    console.log('navigateToHistory----' + showHistory);
    if (setShowHistory) {
      setShowHistory(false);
    }
  }

  const [showHistory, setShowHistory] = React.useState(false);

  const Day1 = [
    {
      title: 'Today, 27 Aug 2021',
      data: [
        {
          cid: 1,
          companyShortName: 'TWTR',
          companyFullName: 'Twitter Inc.',
          companyLogo: require('../../assets/images/SectionList/x.png'),
          companyPrice: '$63.98',
          companyGrowsRate: '-0.23%',
          comapanyprogressLogo: require('../../assets/images/SectionList/tdown.png'),
        },
        {
          cid: 2,
          companyShortName: 'GOOGL',
          companyFullName: 'Alphabet Inc.',
          companyLogo: require('../../assets/images/SectionList/google.png'),
          companyPrice: '$2.84k',
          companyGrowsRate: '0.58%',
          comapanyprogressLogo: require('../../assets/images/SectionList/tup.png'),
        },
        {
          cid: 3,
          companyShortName: 'MSFT',
          companyFullName: 'Microsoft',
          companyLogo: require('../../assets/images/SectionList/Microsoft.png'),
          companyPrice: '$302.1',
          companyGrowsRate: '0.23%',
          // comapanyprogressLogo: require('../../assets/images/SectionList/tup.png'),
        },
        {
          cid: 4,
          companyShortName: 'NIKE',
          companyFullName: 'Nike, Inc.',
          companyLogo: require('../../assets/images/SectionList/Nike.png'),
          companyPrice: '$169.8',
          companyGrowsRate: '0,082%',
          // comapanyprogressLogo: require('../../assets/images/SectionList/tdown.png'),
        },
        {
          cid: 5,
          companyShortName: 'SPOT',
          companyFullName: 'Spotify',
          companyLogo: require('../../assets/images/SectionList/Spotify.png'),
          companyPrice: '$226,9',
          companyGrowsRate: '0,90%',
          comapanyprogressLogo: require('../../assets/images/SectionList/tup.png'),
        },

      ]
    }
  ]
  const Day2 = [
    {
      title: 'Yesterday, 26 Aug 2021',
      data: [
        {
          cid: 1,
          companyShortName: 'TWTR',
          companyFullName: 'Twitter Inc.',
          companyLogo: require('../../assets/images/SectionList/x.png'),
          companyPrice: '$70.98',
          companyGrowsRate: '0.79%',
          comapanyprogressLogo: require('../../assets/images/SectionList/tdown.png'),
        },
        {
          cid: 2,
          companyShortName: 'GOOGL',
          companyFullName: 'Alphabet Inc.',
          companyLogo: require('../../assets/images/SectionList/google.png'),
          companyPrice: '$7.84k',
          companyGrowsRate: '0.11%',
          // comapanyprogressLogo: require('../../assets/images/SectionList/tup.png'),
        },
        {
          cid: 3,
          companyShortName: 'MSFT',
          companyFullName: 'Microsoft',
          companyLogo: require('../../assets/images/SectionList/Microsoft.png'),
          companyPrice: '$302.1',
          companyGrowsRate: '0.23%',
          // comapanyprogressLogo: require('../../assets/images/SectionList/tup.png'),
        },
        {
          cid: 4,
          companyShortName: 'NIKE',
          companyFullName: 'Nike, Inc.',
          companyLogo: require('../../assets/images/SectionList/Nike.png'),
          companyPrice: '$669.8',
          companyGrowsRate: '1.82%',
          comapanyprogressLogo: require('../../assets/images/SectionList/tdown.png'),
        },
      ]
    }
  ]
  const Day3 = [
    {
      title: '25 Aug 2021',
      data: [
        {
          cid: 1,
          companyShortName: 'TWTR',
          companyFullName: 'Twitter Inc.',
          companyLogo: require('../../assets/images/SectionList/x.png'),
          companyPrice: '$63.98',
          companyGrowsRate: '0.23%',
          // comapanyprogressLogo: require('../../assets/images/SectionList/tdown.png'),
        },
        {
          cid: 2,
          companyShortName: 'GOOGL',
          companyFullName: 'Alphabet Inc.',
          companyLogo: require('../../assets/images/SectionList/google.png'),
          companyPrice: '$2.84k',
          companyGrowsRate: '0.58%',
          comapanyprogressLogo: require('../../assets/images/SectionList/tup.png'),
        },
        {
          cid: 3,
          companyShortName: 'MSFT',
          companyFullName: 'Microsoft',
          companyLogo: require('../../assets/images/SectionList/Microsoft.png'),
          companyPrice: '$302.1',
          companyGrowsRate: '0.23%',
          // comapanyprogressLogo: require('../../assets/images/SectionList/tup.png'),
        },
      ]
    }
  ]
  const Day4 = [
    {
      title: '24 Aug 2021',
      data: [
        {
          cid: 1,
          companyShortName: 'TWTR',
          companyFullName: 'Twitter Inc.',
          companyLogo: require('../../assets/images/SectionList/x.png'),
          companyPrice: '$93.98',
          companyGrowsRate: '-0.59%',
          comapanyprogressLogo: require('../../assets/images/SectionList/tdown.png'),
        },
        {
          cid: 2,
          companyShortName: 'GOOGL',
          companyFullName: 'Alphabet Inc.',
          companyLogo: require('../../assets/images/SectionList/google.png'),
          companyPrice: '$9.84k',
          companyGrowsRate: '0.99%',
          comapanyprogressLogo: require('../../assets/images/SectionList/tup.png'),
        },
      ]
    }
  ]
  const Day5 = [
    {
      title: '23 Aug 2021',
      data: [
        {
          cid: 1,
          companyShortName: 'TWTR',
          companyFullName: 'Twitter Inc.',
          companyLogo: require('../../assets/images/SectionList/x.png'),
          companyPrice: '$63.98',
          companyGrowsRate: '0.23%',
          // comapanyprogressLogo: require('../../assets/images/SectionList/tdown.png'),
        },

      ]
    }
  ]

  return (
    <View style={styles.container}>

      {
        showHistory
          ?
          <View style={styles.header}>
            <Text style={styles.headerFont}>Portfolio</Text>
            <Image source={require('../../assets/images/TabbarImages/Icon.png')} resizeMode='cover' />
          </View>
          :
          <View style={styles.header}>
            <Text style={styles.headerFont}>Order History</Text>
            <Image source={require('../../assets/images/TabbarImages/Icon1.png')} resizeMode='cover' />
          </View>
      }


      <View style={styles.tabBarStyles}>
        <TouchableOpacity onPress={navigateToOrder} >
          {
            showHistory ?
              <Text style={styles.tabBarText}>Order</Text>
              :
              <Text style={styles.unSelectedTabBarText}>Order</Text>
          }
          {/* <Text style={styles.tabBarText}>Order</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToHistory}>
          {
            showHistory ?
              <Text style={styles.unSelectedTabBarText}>History</Text>
              :
              <Text style={styles.tabBarText}>History</Text>
          }
          {/* <Text style={styles.tabBarText}>History</Text> */}
        </TouchableOpacity>
      </View>
      {
        showHistory
          ?
          <View style={styles.body}>
            <Image style={styles.imageStyles} source={require('../../assets/images/TabbarImages/Illustration.png')} resizeMode='cover' />
            <Text style={styles.notOrderText}>Not Yet Ordered</Text>
            <Text style={styles.paragraphText1}>There is no recent stock you order, </Text>
            <Text style={styles.paragraphText2}>let’s make your first investment!</Text>
            <Text style={styles.viewStock}>View Stocks</Text>
          </View>
          :
          <View style={styles.flatListMainView}>
            <Text style={styles.recentOrderView}>Recent Order</Text>
            <SectionList sections={[...Day1, ...Day2, ...Day3, ...Day4, ...Day5]}

              renderItem={({ item }) => (
                <View style={styles.orderListView}>
                  <Image source={item.companyLogo} resizeMode='contain' style={styles.logoImage} />
                  <View style={styles.listNameView}>
                    <View>
                      <Text style={styles.shortNameText}>{item.companyShortName}</Text>
                      <Text style={styles.fullNameText}>{item.companyFullName}</Text>
                    </View>
                    <View style={styles.priceView}>
                      <Text style={styles.priceText}>{item.companyPrice}</Text>
                      <View style={styles.progressView}>
                        <Image source={item.comapanyprogressLogo} resizeMode='contain' style={[styles.progressImage, { tintColor: arrowColor(item.companyGrowsRate) }]} />
                        <Text style={[styles.progressionText, { color: arrowColor(item.companyGrowsRate)}]}>{item.companyGrowsRate}</Text>
                      </View>
                    </View>
                  </View>

                </View>

              )}
              // stickySectionHeadersEnabled
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionTitle}>{section.title}</Text>
              )}
            />
          </View>
      }


    </View>
  );
};

export default CusFile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flatListMainView: {
    flex: 1,
    // marginBottom: 190
  },
  header: {
    flexDirection: 'row',
    // backgroundColor:'orange',
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  headerFont: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    fontSize: 18,
    color: '#121826'
  },
  tabBarStyles: {
    backgroundColor: '#FCDDEC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 24,
    marginTop: 32,
    borderRadius: 14,
    paddingVertical: 4
  },
  tabBarText: {
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: "15%",
    backgroundColor: 'white',
    color: '#F61C7A',
    borderRadius: 8,
    fontWeight: '700'
  },
  unSelectedTabBarText: {
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: "15%",
    backgroundColor: 'transparent',
    color: '#03314B',
    fontWeight: '700',
    borderRadius: 8
  },
  imageStyles: {
    // alignContent:"center",
    // alignItems:'center',
    alignSelf: 'center'
    // justifyContent:'center',
  },
  body: {
    // backgroundColor:'black',
    marginTop: 78
  },
  notOrderText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    fontSize: 24,
    color: '#03314B',
    alignSelf: 'center',
    marginHorizontal: 24,
    marginTop: 32,
    paddingHorizontal: 24,
    paddingVertical: 4,
    textAlign: 'center'
  },
  paragraphText1: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    paddingHorizontal: 48,
    flexWrap: 'wrap',
    marginTop: 16,
    color: '#6C727F'
  },
  paragraphText2: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    paddingHorizontal: 48,
    flexWrap: 'wrap',
    marginTop: 2,
    color: '#6C727F'
  },
  viewStock: {
    marginTop: 40,
    backgroundColor: '#3500D4',
    color: 'white',
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    paddingHorizontal: "30%",
    borderRadius: 25,
    paddingVertical: 19,
    fontSize: 16,
    fontWeight: '700'
  },
  logoImage: {
    // height:40,
    // width:40,
    flex: 0.4,
    // alignItems:'flex-start'
  },
  orderListView: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 32,

  },
  progressView: {
    flexDirection: 'row',
    justifyContent: 'flex-end'

  },
  progressImage: {
    alignSelf: 'center',
  },
  listNameView: {
    flex: 1,
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shortNameText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#03314B'
  },
  fullNameText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#03314B'
  },
  priceText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#03314B'
  },
  progressionText: {
    fontSize: 12,
    fontWeight: '700',
    // color: '#03314B'
    // color: colorChangeEvent(),


  },
  priceView: {
    paddingRight: 24,
    justifyContent: 'flex-end'
  },
  sectionTitle: {
    color: '#6C727F',
    paddingLeft: 24,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 24
  },
  recentOrderView: {
    color: "#121826",
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 24,
    paddingVertical: 24,
  }

});
