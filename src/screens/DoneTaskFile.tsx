import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';

interface DoneTaskFileProps {}

const DoneTaskFile = (props: DoneTaskFileProps) => {
    const taskList = [
        {   
            tid : 1,
            tasks : 'View with flex'
        },
        {   
            tid : 2,
            tasks : 'Text'
        },
        {   
            tid : 3,
            tasks : 'Image'
        },
        {   
            tid : 4,
            tasks : 'ImageBackground'
        },
        {   
            tid : 5,
            tasks : 'TextInput'
        },
        {   
            tid : 6,
            tasks : 'Button'
        },
        {   
            tid : 7,
            tasks : 'SafeAreaView'
        },
        {   
            tid : 8,
            tasks : 'Pressable / Touchable'
        },
        {   
            tid : 9,
            tasks : 'ScrollView'
        },
        {   
            tid : 10,
            tasks : 'FlatList'
        },
        {   
            tid : 11,
            tasks : 'List using Map'
        },
        {   
            tid : 12,
            tasks : 'Section List'
        },
    ]
  return (
    <ImageBackground
    style={styles.images}
    source={require('../assets/images/Background.png')}
    resizeMode='contain'
    >
    {/* <ImageBackground 
    style={styles.images}
    source={require('../assets/images/rlogo.png')}
    resizeMode='contain'
    > */}
            <View style={styles.container}>

<Text style={styles.headText}>React Native Tasks</Text>
<ScrollView>
{
        taskList.map((items)=> 
            <Text style={styles.mapText}>{items.tasks}</Text>
        )
      }
</ScrollView> 
    </View>
    </ImageBackground>
    // </ImageBackground>
    
  );
};

export default DoneTaskFile;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  headText : {
    marginVertical:10,
    fontWeight:'500',
    fontFamily:'ABeeZee-Regular',
    fontSize:30,
    textAlign:'center'
  },
  images:{
    flex:1
  },
  mapText : {
    
    padding:8,
    textAlign:'center',
    margin:12,
    fontSize:20,
    elevation:5,
    opacity:1,
    borderLeftWidth: 1,
    pointerEvents:'box-none',
    shadowColor:"#60FFCA",
    borderColor:'#60FFCA',
    borderTopWidth:1.4,
    borderRadius:100,
    backgroundColor:'#2E1371',

  }
});
