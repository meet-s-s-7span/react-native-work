import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, SectionList, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';


interface WhatsAppChatProps { }

const WhatsAppChat = (props: WhatsAppChatProps) => {
  // function seprater(){
  //   <Text>heelloo</Text>
  //   // console.log('seprater)
  // }
  const [messageText, setMessageText] = React.useState('');
  const scrollViewRef = React.useRef<ScrollView>(null); 
  

  function sendMessageTextSubmit() {
    console.log('sendMessageTextSubmit.....' + messageText);
    // if (sectionListRef.current) {
    //   sectionListRef.current.scrollToEnd();
    // }
    // const currentValueDateTime = Date();
    
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes();
    // const time = currentValueDateTime.getTime();

    // const currentTime = '${currentValueDateTime.getHours()}:${currentValueDateTime.getMinutes()}';

    // console.log("currentTime:-----"+currentValueDateTime);
    console.log("hours:-----"+hours);
    console.log("time:-----"+min);
    
  if (scrollViewRef.current) {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }

    if (messageText.trim() !== '') {
      const newAddedMessageText = {
        // chatID=chatID+1,
        isSender: true,
        isRecipient: false,
        isChatType: true,
        isFileType: false,
        chatText: messageText,
        chatTime: hours+":"+min,
        chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
      }
      updateChatList(prevChatList => {
        const updatedChatList = [...prevChatList];

        const sectionIndex = updatedChatList.findIndex(section => section.title === 'Sun, Jul 29');

        if (sectionIndex !== -1) {
          updatedChatList[sectionIndex].data.push(newAddedMessageText);

        } else {

          updatedChatList.push({
            title: 'Sun, Jul 29',
            data: [newAddedMessageText]
          });
        }
        return updatedChatList;
        // console.log(updatedChatList);
      });
      setMessageText('');
    }


  }
  const [isFileImage, setIsFileImage] = React.useState(true);

  function changeFileImage() {
    console.log('changeFileImage');
    setIsFileImage(false);
  }
  function changeOutFileImage() {
    console.log('changeOutFileImage');
    setIsFileImage(true);
  }

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
  const chatList1 = [
    {
      title: 'Fri, Jul 27',
      data: [
        {
          chatID: 1,
          isSender: true,
          isRecipient: false,
          isChatType: true,
          isFileType: false,
          chatText: 'Good morning!',
          chatTime: '10:10',
          isRead: 'true',
          chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
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
          isRead: false,
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
          isRead: false,
          chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
        },



      ]
    }
  ]
  const chatList2 = [
    {
      title: 'Sat, Jul 28',
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
          chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
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
          isRead: false,
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
          isRead: false,
          // chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
          chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
        },



      ]
    }
  ]
  const [chatList3, updateChatList] = React.useState([
    {
      title: 'Sun, Jul 29',
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
          chatReadImage: require('../../assets/images/WhatAppChat/Read.png')
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
          isRead: false,
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
          isRead: false,
          chatReadImage: require('../../assets/images/WhatAppChat/UnRead.png')
        },



      ]
    }
  ]);       
 

  return (
    <View style={styles.container}>
      <View style={styles.topBarView}>
        <Image source={require('../../assets/images/WhatAppChat/Back.png')} style={styles.backImage} />
        <Image source={require('../../assets/images/WhatAppChat/Oval.png')} style={styles.ovalIMage} />
        <View style={styles.topBarNameView}>
          <Text style={styles.personNameText}>Martha Craig</Text>
          <Text style={styles.activeTimeText}>tap here for contact info</Text>
        </View>
        <Image source={require('../../assets/images/WhatAppChat/vc.png')} style={styles.vcImage} />
        <Image source={require('../../assets/images/WhatAppChat/Call.png')} style={styles.callImage} />
      </View>
      <View style={styles.bodyView}>
        <ImageBackground style={styles.bodyBackgroundImage} source={require('../../assets/images/WhatAppChat/Rectangle.png')} resizeMode='cover'>
        <ScrollView ref={scrollViewRef}>
          <SectionList
          // ref={sectionListRef}
          sections={[...chatList, ...chatList1, ...chatList2, ...chatList3]}
            renderSectionHeader={({ section }) => (

              <Text style={styles.titleText}>{section.title}</Text>

            )}
            stickySectionHeadersEnabled
            // onMomentumScrollEnd={sendMessageTextSubmit}
            // showsVerticalScrollIndicator
            // ItemSeparatorComponent={ }
            // invertStickyHeaders
            // stickyHeaderHiddenOnScroll
            renderItem={({ item }) =>
              <TouchableOpacity activeOpacity={1}>
                {
                  item.isChatType && item.isSender ?
                    <View style={styles.chatViewTrue}>
                      <Text style={styles.chatTextStyle}>{item.chatText}</Text>
                      <Text style={styles.chatTimeStyle}>{item.chatTime}</Text>
                      {
                        item.isRead
                          ?
                          <Image source={require('../../assets/images/WhatAppChat/Read.png')} style={styles.chatReadImageStyle} />
                          :
                          <Image source={require('../../assets/images/WhatAppChat/UnRead.png')} style={styles.chatReadImageStyle} />
                      }
                    </View>
                    :
                    null

                }
                {
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

                }
                {
                  item.isChatType && item.isRecipient
                    ?
                    <View style={styles.chatViewFalse}>
                      <Text style={styles.falseChatTextStyle}>{item.chatText}</Text>
                      <Text style={styles.falsechatTimeStyle}>{item.chatTime}</Text>
                    </View>
                    : null
                }
              </TouchableOpacity>

            }
          />
          </ScrollView>
        </ImageBackground>
      </View>
      <View style={styles.bottomBar}>
        <Image source={require('../../assets/images/WhatAppChat/Add.png')} resizeMode='contain' />
        <View style={styles.chatBar}>
          <TextInput
            style={styles.textInputStyle}
            value={messageText}
            onChangeText={setMessageText}
            onSubmitEditing={sendMessageTextSubmit}
            onFocus={changeFileImage}
            onBlur={changeOutFileImage}
          />
          {
            isFileImage ?
              <Image source={require('../../assets/images/WhatAppChat/Shape.png')} resizeMode='contain' style={styles.shapeImageStyle} />
              :
              <Pressable onPress={sendMessageTextSubmit}>
                <Image source={require('../../assets/images/WhatAppChat/next.png')} resizeMode='contain' style={styles.shapeImageStyle} />
              </Pressable>
          }
        </View>
        <Image source={require('../../assets/images/WhatAppChat/Camera.png')} resizeMode='contain' />
        <Image source={require('../../assets/images/WhatAppChat/Record.png')} resizeMode='contain' />
      </View>
    </View>
  );
};

export default WhatsAppChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarView: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    // justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom: 5
  },
  personNameText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    flexWrap: 'wrap',
    flex: 1
  },
  activeTimeText: {
    color: '#8E8E93',
    fontSize: 12,
    fontWeight: '400'
  },
  topBarNameView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: "2%"
  },
  backImage: {
    // marginLeft: "-5%",
    alignSelf: 'center',
    marginHorizontal: 15,
    // marginVertical:10
  },
  vcImage: {
    alignSelf: 'center',
    // marginLeft:"5%",
    marginRight: 25
  },
  callImage: {
    alignSelf: 'center',
    // marginLeft:"5%",
    marginRight: 19.5
  },
  bodyView: {
    flex: 1
  },
  bodyBackgroundImage: {
    flex: 1
  },
  bottomBar: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 9,
    alignItems: 'center'
  },
  chatBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 32,
    width: 228,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#8E8E93',

  },
  shapeImageStyle: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems:'center',
    // alignSelf: 'flex-end',
    marginRight: 7.5,
    tintColor: "#3497F9"
    // justifyContent:'center',
    // alignContent:'center'
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
  chatViewTrue: {
    backgroundColor: '#DCF7C5',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 2,
    marginRight: 17,
    borderRadius: 10
  },
  chatViewFalse: {
    backgroundColor: '#FAFAFA',
    // flexDirection:'row',
    alignSelf: 'flex-start',
    marginBottom: 2,
    marginRight: 17,
    borderRadius: 10,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
    // maxWidth: 255
  },
  chatTextStyle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 10,

  },
  falseChatTextStyle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 8,
    paddingTop: 5,
    flex: 1,
    flexWrap: 'wrap',
    maxWidth: 255,
    paddingRight: 8
  },
  chatTimeStyle: {
    color: '#00000040',
    fontSize: 11,
    fontWeight: '400',
    alignSelf: 'flex-end',
    paddingLeft: 17,
    paddingBottom: 6
  },
  falsechatTimeStyle: {
    color: '#00000040',
    fontSize: 11,
    fontWeight: '400',
    alignSelf: 'flex-end',
    paddingRight: 8,
    paddingBottom:5

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
  textInputStyle: {
    flex: 1,
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 3,
    paddingLeft: 10,
    // paddingTop: 5,
    // paddingBottom: 10,
  },
  ovalIMage: {
    alignSelf: 'center',
    // marginHorizontal: 3.5
  }
});
