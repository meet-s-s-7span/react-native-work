import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

interface FlatListExampleProps {}


const students = [
    {
        sid : 1,
        sname: "Meet"
    },
    {
        sid:2,
        sname : "Chirag"
    },
    {
        sid :3,
        sname : "Deep"
    },
]

const FlatListExample = (props: FlatListExampleProps) => {
  return (
    <View style={styles.container}>
      <FlatList 
    //   horizontal={true}
    //   initialScrollIndex={2}
    //   numColumns={2}
        data={students}
        renderItem={({item})=><Text style={styles.item}>{item.sname}</Text>}
        keyExtractor={(item:any) => item.sid}
        // ListFooterComponent={}
        // inverted={true}
        // removeClippedSubviews={false}
      />
    </View>
  );
};

export default FlatListExample;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  item:{
    fontSize:20,
    flex:1,
    alignSelf:"center", 
    backgroundColor:'blue',
    padding:20,
    margin:20
  }
});
