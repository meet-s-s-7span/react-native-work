import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, SectionList } from 'react-native';
import WhatsAppSenderSide from './whatsapp_sender';
import WhatsAppReceiverSide from './whatsapp_receiver';
import WhatsAppHeader from './whatsapp_header';
import WhatsAppBottomBar from './whatsapp_bottom_bar';

interface WhatsAppMainProps {}


const WhatsAppMain = (props: WhatsAppMainProps) => {

  const chatList = [
    {
      title: 'Fri, Jul 26',
      data: [
        {
          chatID: 1,
          isSender: true,
          isRecipient: false,
          isChatType: true,
          isFileType: false,
          chatText: 'Good morning!',
          chatTime: '10:10',
          isRead: true,
          // chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
        },
        {
          chatID: 2,
          isSender: true,
          isRecipient: false,
          isChatType: true,
          isFileType: false,
          chatText: 'Japan looks amazing!',
          chatTime: '10:10',
          isRead: true,
          chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
        },
        {
          chatID: 3,
          isSender: true,
          isRecipient: false,
          isChatType: false,
          isFileType: true,
          fileNameText: 'IMG_0475',
          fileSize: '2.4 MB',
          fileType: 'png',
          chatTime: '10:15',
          isRead: true,
          chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
        },
        {
          chatID: 4,
          isSender: true,
          isRecipient: false,
          isChatType: false,
          isFileType: true,
          fileNameText: 'IMG_0481',
          fileSize: '2.8 MB',
          fileType: 'png',
          chatTime: '10:15',
          isRead: true,
          chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
        },
        {
          chatID: 5,
          isSender: false,
          isRecipient: true,
          isChatType: true,
          isFileType: false,
          chatText: 'Do you know what time is it?',
          chatTime: '11:40',
          // isRead:null,
          // chatReadImage:require('../../assets/images/WhatAppChat/Read.png')
        },
        {
          chatID: 6,
          isSender: true,
          isRecipient: false,
          isChatType: true,
          isFileType: false,
          chatText: 'It’s morning in Toky 😎',
          chatTime: '11:43',
          isRead: true,
          chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
        },
        {
          chatID: 7,
          isSender: false,
          isRecipient: true,
          isChatType: true,
          isFileType: false,
          chatText: 'What is the most popular meal in Japan?',
          chatTime: '11:45',
        },
        {
          chatID: 8,
          isSender: false,
          isRecipient: true,
          isChatType: true,
          isFileType: false,
          chatText: 'Do you like it?',
          chatTime: '11:45',
        },
        {
          chatID: 9,
          isSender: true,
          isRecipient: false,
          isChatType: true,
          isFileType: false,
          chatText: 'I think top two are:',
          chatTime: '11:50',
          isRead: true,
          chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
        },
        {
          chatID: 10,
          isSender: true,
          isRecipient: false,
          isChatType: false,
          isFileType: true,
          fileNameText: 'IMG_0483',
          fileSize: '2.8 MB',
          fileType: 'png',
          chatTime: '11:51',
          isRead: true,
          chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
        },
        {
          chatID: 11,
          isSender: true,
          isRecipient: false,
          isChatType: false,
          isFileType: true,
          fileNameText: 'IMG_0484',
          fileSize: '2.6 MB',
          fileType: 'png',
          chatTime: '11:51',
          isRead: true,
          chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
        },



      ]
    }
  ]
  
  return (
    <View style={styles.container}>
        <WhatsAppHeader/>
         <ImageBackground style={styles.bodyBackgroundImage} source={require('../../assets/images/WhatAppChat/Rectangle.png')} resizeMode='cover'>
           <SectionList
            sections={[...chatList]}
            renderSectionHeader={({ section }) => (

              <Text style={styles.titleText}>{section.title}</Text>

            )}
            renderItem ={({item})=>
              <View>
                {
                  item.isSender 
                   ?
                      <WhatsAppSenderSide  chatListData={item}/>
                      :
                      <WhatsAppReceiverSide chatListData={item}/>
                }
              </View>
            }
           />
        </ImageBackground>
       <WhatsAppBottomBar/>
       
        </View>
  );
};

export default WhatsAppMain;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  bodyBackgroundImage: {
    flex: 1
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
});
