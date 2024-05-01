import { Image, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WhatsAppReceiverSide from "./whatsapp_receiver";

interface WhatsAppSenderSideProps{
  // chatID: number,
  // isSender: boolean,
  // isChatType: boolean,
  // isFileType: boolean,
  // chatText: string,
  // chatTime: string,
  // isRead: boolean,
  chatListData:any
}

export default function WhatsAppSenderSide(props:WhatsAppSenderSideProps) {
    // const chatList = [
    //     {
    //       title: 'Fri, Jul 26',
    //       data: [
    //         {
    //           chatID: 1,
    //           isSender: true,
    //         //   isRecipient: false,
    //           isChatType: true,
    //           isFileType: false,
    //           chatText: 'Good morning!',
    //           chatTime: '10:10',
    //           isRead: true,
    //           // chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
    //         },
            

    
    
    
    //       ]
    //     }
    //   ]
    // const chatList = [
    //   {
    //     title: 'Fri, Jul 26',
    //     data: [
    //       {
    //         chatID: 1,
    //         isSender: true,
    //         isRecipient: false,
    //         isChatType: true,
    //         isFileType: false,
    //         chatText: 'Good morning!',
    //         chatTime: '10:10',
    //         isRead: true,
    //         // chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
    //       },
    //       {
    //         chatID: 2,
    //         isSender: true,
    //         isRecipient: false,
    //         isChatType: true,
    //         isFileType: false,
    //         chatText: 'Japan looks amazing!',
    //         chatTime: '10:10',
    //         isRead: true,
    //         chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
    //       },
    //       {
    //         chatID: 3,
    //         isSender: true,
    //         isRecipient: false,
    //         isChatType: false,
    //         isFileType: true,
    //         fileNameText: 'IMG_0475',
    //         fileSize: '2.4 MB',
    //         fileType: 'png',
    //         chatTime: '10:15',
    //         isRead: true,
    //         chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
    //       },
    //       {
    //         chatID: 4,
    //         isSender: true,
    //         isRecipient: false,
    //         isChatType: false,
    //         isFileType: true,
    //         fileNameText: 'IMG_0481',
    //         fileSize: '2.8 MB',
    //         fileType: 'png',
    //         chatTime: '10:15',
    //         isRead: true,
    //         chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
    //       },
    //       {
    //         chatID: 5,
    //         isSender: false,
    //         isRecipient: true,
    //         isChatType: true,
    //         isFileType: false,
    //         chatText: 'Do you know what time is it?',
    //         chatTime: '11:40',
    //         // isRead:null,
    //         // chatReadImage:require('../../assets/images/WhatAppChat/Read.png')
    //       },
    //       {
    //         chatID: 6,
    //         isSender: true,
    //         isRecipient: false,
    //         isChatType: true,
    //         isFileType: false,
    //         chatText: 'It’s morning in Toky 😎',
    //         chatTime: '11:43',
    //         isRead: true,
    //         chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
    //       },
    //       {
    //         chatID: 7,
    //         isSender: false,
    //         isRecipient: true,
    //         isChatType: true,
    //         isFileType: false,
    //         chatText: 'What is the most popular meal in Japan?',
    //         chatTime: '11:45',
    //       },
    //       {
    //         chatID: 8,
    //         isSender: false,
    //         isRecipient: true,
    //         isChatType: true,
    //         isFileType: false,
    //         chatText: 'Do you like it?',
    //         chatTime: '11:45',
    //       },
    //       {
    //         chatID: 9,
    //         isSender: true,
    //         isRecipient: false,
    //         isChatType: true,
    //         isFileType: false,
    //         chatText: 'I think top two are:',
    //         chatTime: '11:50',
    //         isRead: true,
    //         chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
    //       },
    //       {
    //         chatID: 10,
    //         isSender: true,
    //         isRecipient: false,
    //         isChatType: false,
    //         isFileType: true,
    //         fileNameText: 'IMG_0483',
    //         fileSize: '2.8 MB',
    //         fileType: 'png',
    //         chatTime: '11:51',
    //         isRead: true,
    //         chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
    //       },
    //       {
    //         chatID: 11,
    //         isSender: true,
    //         isRecipient: false,
    //         isChatType: false,
    //         isFileType: true,
    //         fileNameText: 'IMG_0484',
    //         fileSize: '2.6 MB',
    //         fileType: 'png',
    //         chatTime: '11:51',
    //         isRead: true,
    //         chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
    //       },
  
  
  
    //     ]
    //   }
    // ]
    return (
        
                // <View style={styles.chatViewTrue}>
                //     <Text style={styles.chatTextStyle}>{item.chatText}</Text>
                //     <Text style={styles.chatTimeStyle}>{item.chatTime}</Text>
                //     {
                //         item.isRead
                //             ?
                //             <Image source={require('../../assets/images/WhatAppChat/Read.png')} style={styles.chatReadImageStyle}/>
                //             :
                //             <Image source={require('../../assets/images/WhatAppChat/UnRead.png')} style={styles.chatReadImageStyle} />
                //     }
                // </View>
                <TouchableOpacity>
                   {
                  props.chatListData.isChatType && props.chatListData.isSender ?
                    <View style={styles.chatViewTrue}>
                      <Text style={styles.chatTextStyle}>{props.chatListData.chatText}</Text>
                      <Text style={styles.chatTimeStyle}>{props.chatListData.chatTime}</Text>
                      {
                      props.chatListData.isRead
                          ?
                          <Image source={require('../../assets/images/WhatAppChat/Read.png')} style={styles.chatReadImageStyle} />
                          :
                          <Image source={require('../../assets/images/WhatAppChat/UnRead.png')} style={styles.chatReadImageStyle} />
                      }
                    </View>
                    :
                    null

                }
                {/* {
                  item.isFileType && item.isSender ?
                    <View style={styles.fileViewTrue}>
                      <View style={styles.upperFileView}>
                        <Image style={styles.fileStyle} source={require('../../assets/images/WhatAppChat/File.png')} />
                        <Text style={styles.fileNameStyle}>{item.fileNameText}</Text>
                      </View>
                      <View style={styles.lowwerFileView}>
                        <View style={styles.lowwerLeftFileView}>
                          <Text style={styles.lowerFileText1}>{item.fileSize}</Text>
                          <Image style={styles.fileOvalStyle} source={require('../../assets/images/WhatAppChat/fileOval.png')} resizeMode='cover' />
                          <Text style={styles.lowerFileText2}>{item.fileType}</Text>
                        </View>
                        <View style={styles.lowwerRightFileView}>
                          <Text style={styles.chatTimeStyle}>{item.chatTime}</Text>
                          {
                            item.isRead
                              ?
                              <Image source={require('../../assets/images/WhatAppChat/Read.png')} style={styles.chatReadImageStyle} />
                              :
                              <Image source={require('../../assets/images/WhatAppChat/UnRead.png')} style={styles.chatReadImageStyle} />

                          }</View>
                      </View>
                    </View>
                    :
                    null

                } */}
                 
                </TouchableOpacity>
    );
              };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    chatViewTrue: {
        backgroundColor: '#DCF7C5',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: 2,
        marginRight: 17,
        borderRadius: 10
      },
      chatTextStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
        paddingLeft: 8,
        paddingTop: 5,
        paddingBottom: 10,
    
      },
      chatTimeStyle: {
        color: '#00000040',
        fontSize: 11,
        fontWeight: '400',
        alignSelf: 'flex-end',
        paddingLeft: 17,
        paddingBottom: 6
      },
      titleText: {
        backgroundColor: '#DDDDE9',
        color: '#3C3C43',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 4,
        paddingHorizontal: 21,
        borderRadius: 100,
        fontSize: 12,
        fontWeight: '600',
        marginVertical: 9
      },
       chatReadImageStyle: {
    alignSelf: 'flex-end',
    marginBottom: 9,
    marginLeft: 2.5,
    marginRight: 9
  },
  fileViewTrue: {
    backgroundColor: '#DCF7C5',
    // flexDirection:'row',
    alignSelf: 'flex-end',
    marginBottom: 2,
    marginRight: 17,
    borderRadius: 5
  },
  upperFileView: {
    flexDirection: 'row',
    backgroundColor: '#7676801F',
    marginHorizontal: 2,
    marginTop: 3,
    borderRadius: 5,
    // alignSelf:'center',
    // flex:1,
    justifyContent: 'center'

  },
  lowwerFileView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lowwerLeftFileView: {
    alignSelf: 'flex-start',
    flexDirection: 'row',

  },
  lowwerRightFileView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  fileNameStyle: {
    color: '#000000B2',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    paddingRight: 40,
    // justifyContent: 'center'
    // paddingLeft:7,
    // paddingTop:5,
    // paddingBottom:10,
  },
  fileStyle: {
    margin: 7
  },
  fileOvalStyle: {
    alignSelf: 'center',
    marginHorizontal: 3.5
  },
  lowerFileText1: {
    color: '#00000040',
    fontSize: 11,
    fontWeight: '400',
    alignSelf: 'flex-end',
    paddingLeft: 8.5
  },
  lowerFileText2: {
    color: '#00000040',
    fontSize: 11,
    fontWeight: '400',
    alignSelf: 'flex-end',
  },

});