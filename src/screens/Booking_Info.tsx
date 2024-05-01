  import * as React from 'react';
  import { Text, View, StyleSheet, Image, FlatList, ScrollView, SectionList, TouchableOpacity } from 'react-native';

  interface BookingInfoProps { }

  const BookingInfoList = [
    {
      bookingId: "MAKP-10265955",
      bookingOn: 'Sat, 12 June',
      bookingStatus: "Completed",
      bookingTotal: '$325.00',
      bookingTime: '6:30 am',
      bookingDate: 'Wednesday, 20 June, 2022',
      bookingAdress: '4517 Washington Ave. Manchester,Kentucky 39495',
      bookingOccation: 'Wedding',
      bookingAge: '26 Years',

      bookuingArtistImage: require('../assets/images/BookingInfo/artistImage1.png'),
      bookingArtistName: 'Jenny Petor',
      bookingArtistPassion: 'Makeup artist',
      bookingArtistNotes: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'


    }
  ]

  const FitzpatrickScale = [
    {
      id: 1,
      imageBride: require('../assets/images/BookingInfo/f1.png'),
      brideType: 'Bride',
      brideColor: 'Pale'
    },
    {
      id: 2,
      imageBride: require('../assets/images/BookingInfo/f2.png'),
      brideType: 'Bridesmaid 1',
      brideColor: 'Light Olive'
    },
    {
      id: 3,
      imageBride: require('../assets/images/BookingInfo/f3.png'),
      brideType: 'Bridesmaid 2',
      brideColor: 'Brown'
    },
    {
      id: 4,
      imageBride: require('../assets/images/BookingInfo/f4.png'),
      brideType: 'Mother of the bride',
      brideColor: 'Dark'
    }
  ]

  const makeUpLooksView = [
    {
      id: 1,
      brideType: 'Bride',
      brideAge: "21 - 30",
    },
    {
      id: 2,
      brideType: 'Bridesmaid 1',
      brideAge: "21 - 30",
    },
    {
      id: 3,
      brideType: 'Bridesmaid 2',
      brideAge: "10 - 200",
    },
    {
      id: 4,
      brideType: 'Mother of the bride',
      brideAge: "41 - 50",
    }
  ]

  const HairStyleView = [
    {
      id: 1,
      brideType: 'Bride',
      data:[
        {
          id:11,
          brideImage:require('../assets/images/BookingInfo/HairStyle/b11.png')
        },
        {
          id:12,
          brideImage:require('../assets/images/BookingInfo/HairStyle/b12.png')
        },
        {
          id:13,
          brideImage:require('../assets/images/BookingInfo/HairStyle/b13.png')
        },
        {
          id:14,
          brideImage:require('../assets/images/BookingInfo/HairStyle/b11.png')
        },
        {
          id:15,
          brideImage:require('../assets/images/BookingInfo/HairStyle/b11.png')
        },
      ]

    },
    {
      id: 2,
      brideType: 'Bridesmaid 1',
      data:[
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b21.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b22.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        }
      ]
    },
    {
      id: 3,
      brideType: 'Bridesmaid 2',
      data:[
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b31.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b32.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        },{
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b23.png')
        }
      ]
    },
    {
      id: 4,
      brideType: 'Mother of the bride',
      data:[
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b41.png')
        },
        {
          brideImage:require('../assets/images/BookingInfo/HairStyle/b42.png')
        },
       
      ]
    }
  ]

  const HairStyleImages = [
    {
      id:22,
      brideImage: require('../assets/images/BookingInfo/r.png')
    },
    {
      id:23,
      brideImage: require('../assets/images/BookingInfo/r1.png')
    },
    {
      id:24,
      brideImage: require('../assets/images/BookingInfo/r2.png')
    },
    {
      id:25,
      brideImage: require('../assets/images/BookingInfo/r1.png')
    },
    // {
    //   brideImage: require('../assets/images/BookingInfo/r2.png')
    // }
  ]

  const ServicesInfo = [
    {
      title: 'Event Makeup',
      data: [
        {
          eventStyle: 'Glam Makeup',
          eventServices: '2 Services',
          eventPrice: '$100.00',
          eventOfferPrice: '$50.00',
          specialOffer: 'Special Offer 50% Off'
        },
        {
          eventStyle: 'Glam Makeup & Hair',
          eventServices: '1 Service',
          eventPrice: '$40.00',
          eventOfferPrice: '$40.00',
          specialOffer:null
        }
      ]
    },
    {
      title: 'Weddings',
      data: [
        {
          eventStyle: 'Bride',
          eventServices: '1 Service',
          eventPrice: '$100.00',
          eventOfferPrice: '$50.00',
        },
        {
          eventStyle: 'Bridesmaids',
          eventServices: '2 Services',
          eventPrice: '$80.00',
          eventOfferPrice: '$40.00',

        },
        {
          eventStyle: 'Mother of the Bride /Groom',
          eventServices: '1 Service',
          eventPrice: '$40.00',
          eventOfferPrice: '$40.00',
        }

      ]
    }
  ]

  const totalEventPrice = ServicesInfo.reduce((total, category) => {
    return total + category.data.reduce((categoryTotal, service) => {
      return categoryTotal + parseFloat(service.eventPrice.replace('$', ''));
    }, 0);
  }, 0);

  console.log(totalEventPrice.toFixed(2)); // This will log the total event price


  const PaymentMethos = [
    {
      id: 1,
      paymentMethod: 'Deposit Paid by',
      paymentImage: require('../assets/images/BookingInfo/payemnt2.png'),
      paymentCode: '1234 5678 3255'
    },
    {
      id: 2,
      paymentMethod: 'Deposit WAM Funds',
      paymentImage: require('../assets/images/BookingInfo/mastercard.png'),
      paymentPrice: '$25.00'
    }
  ]

  const PaymentInfo = [
    {
      id: 1,
      paymentName: 'Deposit Paid',
      paymentPrice: '- $100.00',
      paymentImage: require('../assets/images/BookingInfo/i.png'),
      // paymentCode: '123456783255'

    },
    {
      id: 2,
      paymentName: 'Remaining amount',
      paymentPrice: '$260.00',
      // paymentImage: require('../assets/images/BookingInfo/i.png'),


    },
    {
      id: 3,
      paymentName: 'Extra time charges',
      paymentPrice: '$50.00',
      paymentTime: '(20 min)'


    },
    {
      id: 4,
      paymentName: 'Extra service charges',
      paymentPrice: '$50.00',
    },
    {
      id: 5,
      paymentName: 'Extra charges',
      paymentPrice: '$50.00',
    },
    {
      id: 6,
      paymentName: 'Product charges',
      paymentPrice: '$150.00',
    },
    {
      id: 7,
      paymentName: 'Travel Fee',
      paymentPrice: '$50.00',
    },
    {
      id: 8,
      paymentName: 'Discount',
      paymentPrice: '-$50.00',
    }

  ]

  const totalPaymentPrice = PaymentInfo.reduce((total, item) => {
    // Remove the '$' sign and convert the string to a number
    const price = parseFloat(item.paymentPrice.replace('$', ''));

    // Check if price is a valid number
    if (!isNaN(price)) {
      // Add the price to the total
      return total + price;
    } else {
      // Log a message indicating the invalid price
      console.log(`Invalid paymentPrice: ${item.paymentPrice}`);
      // Return the current total without adding the invalid price
      return total;
    }
  }, 0);

  console.log(totalPaymentPrice.toFixed(2)); // This will log the total payment price


  function popUpImages(){
    
  }




  const BookingInfo = (props: BookingInfoProps) => {

    return (
      <View style={styles.container}>
        <View style={styles.topBarView}>
          <Text style={styles.bookingInfoText}>Booking Info</Text>
        </View>
        <Image source={require('../assets/images/BookingInfo/backArrow.png')} style={styles.backImage} />
        <ScrollView>
          <FlatList
            data={BookingInfoList}
            renderItem={
              ({ item }) => (
                <View>
                  <View style={{ backgroundColor: "#ffffff" }}>
                    <View style={styles.tile1}>
                      <View style={styles.innerTile1}>
                        <Text style={styles.bookingIdText}>BOOKING ID</Text>
                        <Text style={styles.bookingId}>{item.bookingId}</Text>
                      </View>
                      <Text style={styles.statusText}>{item.bookingStatus}</Text>
                    </View>
                    <View style={styles.title2}>
                      <View style={styles.innerTile2}>
                        <Text style={styles.bookonText}>Booked on </Text>
                        <Text style={styles.bookOnTextData}>{item.bookingOn}</Text>
                      </View>
                      <View style={styles.innerTile2_1}>
                        <Text style={styles.total}>Total: </Text>
                        <Text style={styles.totalValue}>{item.bookingTotal}</Text>
                      </View>

                    </View>
                  </View>

                  <View style={styles.artistView}>
                    <View style={styles.artistViewInnerTile1}>
                      <Image source={item.bookuingArtistImage} />
                      <View style={styles.artistDetailView}>
                        <View>
                          <Text style={styles.artistPassionText}>{item.bookingArtistPassion}</Text>
                          <Text style={styles.artistNameText}>{item.bookingArtistName}</Text>
                        </View>
                        <View style={styles.chatButtonView}>
                          <View style={styles.innerChatButtonView}>
                            <Image source={require('../assets/images/BookingInfo/messIcon.png')} />
                            <Text style={styles.chatText}>Chat</Text>
                          </View>


                        </View>
                      </View>


                    </View>
                    <View>
                      <View style={styles.notesView}>
                        <Text style={styles.notesTitle}>Notes:</Text>
                        <Text style={styles.notesData}>{item.bookingArtistNotes}</Text>
                      </View>
                    </View>
                  </View>

                  <Text style={styles.bookingInfoTitle}>Booking Info</Text>

                  <View style={styles.bookingTile}>
                    <View style={styles.bookingInnerTile1}>
                      <Text style={styles.timeDataText}>Time</Text>
                      <View style={styles.timeView}>
                        <Text style={styles.timeData}>{item.bookingDate}</Text>
                        <Text style={styles.timeData}>{item.bookingTime}</Text>
                      </View>
                    </View>
                    <View style={styles.bookingInnerTile1}>
                      <Text style={styles.timeDataText}>Where</Text>
                      <View style={styles.timeView}>
                        <View style={{ flexDirection: 'row' }}>
                          <Image source={require('../assets/images/BookingInfo/home.png')} />
                          <Text style={styles.homeAdressTitle}>Home Address</Text>
                        </View>
                        <Text style={styles.bookingAdressText}>{item.bookingAdress}</Text>
                      </View>
                    </View>
                    <View style={styles.bookingInnerTile1}>
                      <Text style={styles.timeDataText}>Occation</Text>
                      <View style={styles.timeView2}>
                        <Text style={styles.timeData}>{item.bookingOccation}</Text>
                      </View>
                    </View>
                    <View style={styles.bookingInnerTile2}>
                      <Text style={styles.timeDataText}>Age</Text>
                      <View style={styles.timeView2}>
                        <Text style={styles.timeData}>{item.bookingAge}</Text>
                      </View>
                    </View>

                  </View>
                </View>
              )
            }
          />
          <View style={styles.FitzpatrickScaleView}>

            <Text style={styles.FitzpatrickScaleText}>Your Fitzpatrick Scale</Text>

            <FlatList
              data={FitzpatrickScale}
              renderItem={
                ({ item }) => (
                  <View style={styles.brideFlatListView}>
                    <View style={styles.brideImageView}>
                      <Image source={item.imageBride} />
                    </View>
                    <Text style={styles.brideTypeText}>{item.brideType} : </Text>
                    <Text style={styles.brideColorText}>{item.brideColor}</Text>
                  </View>
                )}
            />
          </View>

          <View style={styles.makeUpLooksView}>
            <Text style={styles.FitzpatrickScaleText}>Makeup looks to be used as inspiration</Text>
            <FlatList
              data={makeUpLooksView}
              renderItem={
                ({ item }) => (
                  <View>
                  <View style={styles.innermakeUpLooksView}>
                    <Text style={styles.makeBrideText}>{item.brideType}</Text>
                    <Text style={styles.makeBrideColorText}>Age : {item.brideAge}</Text>
                  </View>

                  </View>

                  
                )}

            />


          </View>

          <View style={styles.makeUpLooksView}>
            <Text style={styles.FitzpatrickScaleText}>Hairstyle looks to be used as inspiration</Text>
            
        <View>  
            
  <FlatList
    data={HairStyleView}
    renderItem={({ item }) => (
      <View style={styles.innermakeUpLooksView2}>
        <Text style={styles.makeBrideText}>{item.brideType}</Text>
        <FlatList
          style={styles.innermakeUPImageStyle}
          data={item.data.slice(0,3)}
          // keyExtractor={(item, index) => item.id} // Use item id as the key
          renderItem={({ item, index }) => (
            <View style={{ paddingLeft: 7 }}>
              <Image source={item.brideImage} />
            </View>
          )}
          ListFooterComponent={() => {
            if (item.data.length > 3) {
              return (
                <View style={{ alignItems: 'center', alignSelf: 'center', position: 'relative', left: '-160%', top: '20%'}}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('BookingImageInfo', { hairStyleData: item.data })}>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>+ {item.data.length - 3}</Text>
                  </TouchableOpacity>
                </View>
              );
            } else {
              return (
                <View style={{ alignItems: 'center', alignSelf: 'center', position: 'relative', left: '-160%', top: '20%'}}>
                   <Text style={{ fontSize: 14, fontWeight: '500' }}>      </Text>
                 </View>
              );
            }
          }}
        />
      </View>
    )}
    keyExtractor={(item, index) => item.id.toString()} // Use item id as the key for the outer FlatList
  />
  </View>

          </View>


          <Text style={styles.bookingInfoTitle}>Services Info</Text>

          <View style={styles.serviceInfoView}>
            <SectionList
              sections={ServicesInfo}
              renderSectionHeader={
                ({ section: { title } }) => (
                  <View style={styles.sectionHeaderView}>
                    <Text style={styles.sectionHeaderText}>{title}</Text>
                  </View>
                )
              }
              renderItem={
                ({ item }) => (
                  <View style={styles.eventView}>
                    <View style={styles.eventServiceIndo}>
                      <Text style={styles.event1}>{item.eventStyle}</Text>
                      <Text style={styles.event2}>{item.eventServices}</Text>
                      <Text style={styles.event3}>{item.eventPrice}</Text>
                    </View>
                    <View style={styles.offerView}>
                      <Text style={styles.eventOfferPrice}>{item.eventOfferPrice}</Text>
                      {
                      item.specialOffer !== null ? (
        <Text style={styles.specialOffer}>{item.specialOffer}</Text>
      ) : null}
                      {/* {
                        if(){

                        }else{
                          return (
                            <Text style={styles.eventOfferPrice}>{item.eventOfferPrice}</Text>
                          )
                        }
                       item.eventOfferPrice !== null && <Text style={styles.specialOffer}>{item.specialOffer}</Text>
                      } */}
                      
                      {/* <Text style={styles.specialOffer}>{item.specialOffer}</Text> */}
                    </View>
                  </View>
                )

              }
            />
          </View>

          <View>

          </View>

          <Text style={styles.bookingInfoTitle}>Payment Info</Text>

          <View style={styles.paymentPart}>
            <View style={styles.subTotalView}>
              <Text style={styles.subTotal}>Subtotal</Text>
              <Text style={styles.subTotal}>${totalEventPrice}.00</Text>
            </View>
            <View style={{ marginTop: 14 }}>

            </View>
            <FlatList
              data={PaymentInfo}
              renderItem={
                ({ item }) => (

                  <View>
                    <View style={styles.paymentInfoView}>

                      <View style={styles.innerPaymentInfo}>
                        <Text style={styles.paymentNameText}>{item.paymentName}</Text>
                        <Image source={item.paymentImage} style={styles.paymentI} />
                        <Text style={styles.paymentTime}>{item.paymentTime}</Text>
                      </View>
                      <Text style={styles.priceName}>{item.paymentPrice}</Text>

                    </View>
                  </View>


                )
              }
            />
            <View style={styles.totalView}>
              <Text style={styles.Total}>Total Payable Amount</Text>
              <Text style={styles.Total}>${totalPaymentPrice}.00</Text>
            </View>
          </View>

          <View style={styles.paymentmethodView}>
            <Text style={styles.paymentText}>Payment Method</Text>

            <FlatList
              data={PaymentMethos}
              renderItem={
                ({ item }) => (
                  <View style={styles.paymentView}>

                    <Text style={styles.paymentMethod}>{item.paymentMethod}</Text>
                    <Image source={item.paymentImage} />
                    {/* var replaced = {item.paymentCode}.replace(/.(?=.{4,}$)/g, '*'); */}
                    <Text numberOfLines={1} ellipsizeMode='head' style={styles.paymentCode}>
                      {item.paymentCode ?
                      '•••• ' + item.paymentCode.slice(-4) : ''}
                      <Text style={styles.paymentPrice}>{item.paymentPrice}</Text>
                    </Text>
                  </View>
                )
              }
            />
          </View>

          
          <Text style={styles.noteText}>Note: Before paying the outstanding amount, please confirm the receipt details & total booking price. The makeup artist may have provided a discount or added extra charges. </Text>

          <View style={styles.paymentButton}>
            <Image source={require('../assets/images/BookingInfo/payment$image.png')} />
            <Text style={styles.buttonPaymentText}>View Receipt & Pay</Text>
          </View>




        </ScrollView>
      </View>
    );
  };

  export default BookingInfo;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F9F9F9",
    },
    topBarView: {
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#0000000A'
      // justifyContent:'space-between'
    },
    backImage: {
      position: 'absolute',
      top: 14.43,
      left: 16,
      // marginVertical:14,
      // marginHorizontal:16, 
      alignSelf: 'center',
      // backgroundColor:'yellow'
    },
    bookingInfoText: {
      color: '#080204',
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
      flex: 1,
      // backgroundColor:'red',
      justifyContent: 'center',
      // alignItems:'center'
      alignSelf: 'center',
      paddingVertical: 14,
      flexWrap: 'wrap',

    },
    tile1: {
      // backgroundColor:'red',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      flexWrap: 'wrap',
      borderBottomWidth: 1,
      borderBottomColor: '#0000000A'
    },
    bookingIdText: {
      color: '#8A8A8A',
      fontSize: 12,
      fontWeight: '500',
      paddingBottom: 6,
      flexWrap: 'wrap',
    },
    bookingId: {
      color: '#080204',
      fontSize: 15,
      fontWeight: '500',
      flexWrap: 'wrap',
    },
    statusText: {
      color: '#0BC360',
      fontSize: 16,
      fontWeight: '500',
      marginTop: 20,
      flexWrap: 'wrap',
    },
    innerTile1: {
      marginTop: 20,
      marginBottom: 15
    },
    bookonText: {
      // fontWeight:'600',
      fontSize: 16,
      color: '#4F4F4F',
      flexWrap: 'wrap',
    },
    bookOnTextData: {
      fontWeight: '600',
      fontSize: 16,
      color: '#4F4F4F',
      flexWrap: 'wrap',
    },
    title2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginTop: 17,
      marginBottom: 25,
      flexWrap: 'wrap',
    },
    total: {
      fontWeight: '400',
      fontSize: 16,
      color: '#4F4F4F',
      flexWrap: 'wrap',
    },
    totalValue: {
      color: '#CE1C4F',
      fontSize: 16,
      fontWeight: '600',
      flexWrap: 'wrap',
    },
    innerTile2: {
      flexDirection: 'row'
    }
    ,
    innerTile2_1: {
      flexDirection: 'row',
    },
    bookingInfoTitle: {
      color: '#080204',
      fontWeight: '700',
      fontSize: 16,
      marginVertical: 15,
      marginLeft: 24,
      flexWrap: 'wrap',
    },
    bookingTile: {
      backgroundColor: '#FFFFFF',
      marginHorizontal: 8,
      borderRadius: 6
    },
    timeDataText: {
      flex: 0.5,
      color: '#DE809A',
      fontWeight: '500',
      fontSize: 15,
      marginLeft: 16,
      // marginRight:47
      flexWrap: 'wrap',
    },
    timeData: {

      color: '#4F4F4F',
      flexWrap: 'wrap',
    },
    timeView: {
      flex: 1.4,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
      // backgroundColor:'red',
      marginRight: 16,
      paddingBottom: 15,
    },
    timeView2: {
      flex: 1.4,
      //  borderBottomWidth:1,
      //  borderBottomColor:'#EEEEEE',
      // backgroundColor:'red',
      marginRight: 16,
      paddingBottom: 15
    },
    bookingInnerTile1: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 16

    },
    bookingInnerTile2: {
      flexDirection: 'row'
    },
    bookingAdressText: {
      color: '#4F4F4F',
      fontSize: 15,
      fontWeight: '400',
      flexWrap: 'wrap'
    },
    homeAdressTitle: {
      color: '#080204',
      fontWeight: '500',
      fontSize: 15,
      paddingLeft: 9,
      paddingBottom: 2

    },
    artistView: {
      backgroundColor: '#FFFFFF',
      marginTop: 10
    },
    artistViewInnerTile1: {
      marginHorizontal: 20,
      marginTop: 19,
      paddingBottom: 14,
      borderBottomColor: '#0000000A',
      flexDirection: 'row',
      borderBottomWidth: 1,


    },
    artistPassionText: {
      color: '#DE809A',
      fontSize: 14,
      fontWeight: '400',
    },
    artistNameText: {
      color: '#080204',
      fontSize: 20,
      fontWeight: '700',

    },
    artistDetailView: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginLeft: 18,
      // backgroundColor:'red'
    },
    chatButtonView: {
      flex: 1,
      // textAlign:'center',
      // justifyContent:'center',
      // backgroundColor:'red',
      alignContent: 'center',

    },
    innerChatButtonView: {
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignSelf: 'center',
      paddingHorizontal: 15,
      paddingVertical: 7,
      borderWidth: 1,
      borderColor: '#E1E1E1',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#0000001F',
      shadowOpacity: 1,
      shadowOffset: { width: 0, height: 1 },
    },
    chatText: {
      fontSize: 16,
      color: '#DE809A',
      marginLeft: 4,
      fontWeight: '500'
    },
    notesView: {
      marginLeft: 21, marginTop: 16, marginRight: 44, marginBottom: 16
    },
    notesTitle: {
      color: '#F3A75D',
      fontSize: 14,
      fontWeight: '400'
    },
    notesData: {
      color: '#4F4F4F'
    },
    FitzpatrickScaleView: {
      backgroundColor: '#ffffff',
      marginHorizontal: 8,
      marginTop: 5,
      borderRadius: 6
    },
    FitzpatrickScaleText: {
      marginVertical: 15,
      marginLeft: 16,
      color: '#080204',
      fontWeight: '700',
      fontSize: 15,
      flexWrap: 'wrap'
    },
    brideFlatListView: {
      marginLeft: 16,
      flexDirection: 'row',
      marginBottom: 15
    },
    brideImageView: {
      width: 54.03,
      height: 33,
      backgroundColor: '#F3F3F3',
      justifyContent: 'flex-end',
      alignItems: 'center',

      // borderTopStartRadius:2,
      // borderTopLeftRadius:20
      // borderRadius:10
    },
    brideTypeText: {
      color: '#4F4F4F',
      paddingLeft: 18,
      flexWrap: 'wrap',
      fontSize: 14,
      fontWeight: '400',
      // alignContent: 'center'
      textAlignVertical: 'center'
    },
    brideColorText: {
      color: '#DE809A',
      flexWrap: 'wrap',
      fontSize: 14,
      fontWeight: '400',
      textAlignVertical: 'center'
    },
    makeUpLooksView: {
      marginTop: 10,
      marginHorizontal: 8,
      backgroundColor: '#FFFFFF',
      borderRadius: 6,
    },
    innermakeUpLooksView: {
      marginLeft: 16,
      marginBottom: 22.74,
      // flexDirection: 'row',
      justifyContent: 'space-between'
    },
    innermakeUpLooksView2: {
      marginLeft: 16,
      marginBottom: 22.74,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    innermakeUPImageStyle: {
      flexDirection: 'row',
      // marginRight:10
    },
    makeBrideText: {
      color: '#4F4F4F',
      // paddingLeft: 18,
      flexWrap: 'wrap',
      fontSize: 14,
      fontWeight: '400',
      // alignContent: 'center'
      textAlignVertical: 'center'
    },
    makeBrideColorText: {
      color: '#DE809A',
      flexWrap: 'wrap',
      fontSize: 14,
      fontWeight: '400',
      // textAlignVertical: 'center' 
    },
    serviceInfoView: {
      marginHorizontal: 8,
      borderRadius: 6,
      backgroundColor: '#FFFFFF',
      // paddingVertical:5
    },
    sectionHeaderText: {
      color: '#DE809A',
      fontWeight: '500',
      fontSize: 15,
      marginLeft: 16,
      marginTop: 11,
      flexWrap: 'wrap',
      paddingVertical: 5,
    },
    sectionHeaderView: {

    },
    eventView: { paddingVertical: 13, borderBottomWidth: 1, marginHorizontal: 16, borderBottomColor: '#E5E5E5' },
    eventServiceIndo: {
      flexDirection: 'row',
      // marginHorizontal:16,
      justifyContent: 'space-between'
    },
    offerView: {
      // marginLeft:16,
    },
    eventOfferPrice: {
      color: '#8A8A8A',
      fontWeight: '400',
      fontSize: 14,
      marginTop: 6,
      flexWrap: 'wrap'
    },
    specialOffer: {
      color: '#F3A75D',
      fontSize: 12,
      fontWeight: '400',
      flexWrap: 'wrap'
    },
    event1: {
      flex: 0.9,
      flexWrap: 'wrap',
      // maxWidth:90,
      color: '#4F4F4F',
      fontSize: 15,
      fontWeight: '500'
      // backgroundColor:'white'

    },
    event2: {
      // marginLeft:14,
      flex: 0.5,
      // textAlign:'center',
      // paddingRight:30,
      // alignSelf:'center',
      justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      // backgroundColor:'blue',
      flexWrap: 'wrap',
      color: '#8A8A8A',
      fontSize: 14,
      fontWeight: '400'


    },
    event3: {
      flex: 0.3,
      flexWrap: 'wrap',
      color: '#4F4F4F',
      fontSize: 14,
      fontWeight: '500',
      alignItems: 'flex-end',
      alignContent: 'flex-end',
      textAlign: 'right'
      // alignSelf:'flex-end'
      // justifyContent:'flex-end'
      // backgroundColor:'white'
    },
    paymentButton: {

      paddingHorizontal: "15%",
      paddingVertical: 13.94,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: '#CE1C4F',
      marginHorizontal: 20,
      borderRadius: 100,
      flexDirection: 'row',
      marginBottom: 15
    },
    buttonPaymentText: {
      marginLeft: 8,
      fontSize: 20,
      fontWeight: '700',
      color: '#FFFFFF',
      // textAlign:'center'
    },
    noteText: {
      color: '#F3A75D',
      marginLeft: 20,
      marginRight: 8,
      marginBottom: 25,
      // marginTop:
    },
    paymentmethodView: {
      backgroundColor: '#ffffff',
      marginHorizontal: 8,
      borderRadius: 6,
      marginBottom: 16

    },
    paymentText: {
      marginLeft: 20,
      marginTop: 15.36,
      paddingBottom: 12,
      color: '#080204',
      fontSize: 16,
      fontWeight: '700',
      // textAlign:'center'
    },
    paymentView: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginBottom: 12
    },
    paymentMethod: {
      flex: 1,
      flexWrap: 'wrap',
      color: '#4F4F4F'
    },
    paymentCode: {
      flex: 0.3,
      flexWrap: 'wrap',
      textAlign: 'right',
      textAlignVertical:'center',
      color: '#4F4F4F',
      fontSize: 14,
      fontWeight: '400',
      // backgroundColor:'red'
      // alignItems:'center',
      // alignContent:'center',
      // alignSelf:'center'
      // overflow:'hidden'



    },
    paymentPrice: {
      flex: 0.3,
      flexWrap: 'wrap',
      textAlign: 'right',
      color: '#CE1C4F',
      fontSize: 16,
      fontWeight: '600',
      // alignSelf:'flex-start'
      // ali
      // backgroundColor:'red'

    },
    paymentInfoView: {
      // backgroundColor:'red',
      flexDirection: 'row',
      // paddingHorizontal:
      marginHorizontal: 20,
      marginBottom: 8,


    },
    innerPaymentInfo: {
      flexDirection: 'row',
      flex: 1,
      // backgroundColor:'red'
    },
    paymentPart: {
      marginHorizontal: 8,
      borderRadius: 6,
      backgroundColor: '#FFFFFF',
      // paddingVertical:5

    },
    paymentNameText: {
      color: '#4F4F4F',
      fontSize: 15,
      fontWeight: '400',
      flexWrap: 'wrap',
      maxWidth: "65%"

    },
    paymentTime: {
      color: '#8A8A8A',
      flexWrap: 'wrap',
      marginLeft: -5
    },
    paymentI: {
      marginHorizontal: 6,
      marginTop: 2,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      // backgroundColor:'red',
      // flexWrap: 'wrap',
      // color: '#8A8A8A',
    },
    priceName: {
      color: '#4F4F4F',
      flexWrap: 'wrap',
      // flex:0.4
    },
    subTotalView: {
      // backgroundColor:'red',
      paddingHorizontal: 20,
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderBottomColor: '#F2F2F2',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    totalView: {
      // backgroundColor:'red',
      paddingHorizontal: 20,
      paddingVertical: 14,
      borderTopWidth: 1,
      borderTopColor: '#F2F2F2',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    subTotal: {
      fontSize: 15,
      color: '#080204',
      fontWeight: '500'
    },
    Total: {
      fontSize: 16,
      color: '#CE1C4F',
      fontWeight: '600'
    }
  });
