import { Image, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface WhatsAppReceiverSideProps {
  chatListData:any
}
export default function WhatsAppReceiverSide(props:WhatsAppReceiverSideProps) {

    return (
            <TouchableOpacity>
            {
              props.chatListData.isChatType && props.chatListData.isRecipient 
                ?
                <View style={styles.chatViewFalse}>
                  <Text style={styles.falseChatTextStyle}>{props.chatListData.chatText}</Text>
                  <Text style={styles.falsechatTimeStyle}>{props.chatListData.chatTime}</Text>
                </View>
                : null
            }
             </TouchableOpacity>  
            
    );
          };


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
      falsechatTimeStyle: {
        color: '#00000040',
        fontSize: 11,
        fontWeight: '400',
        alignSelf: 'flex-end',
        paddingRight: 8,
        paddingBottom:5
    
      },
});