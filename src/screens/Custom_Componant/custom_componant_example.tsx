import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomNameExamples from './custom_name';
import CustomNameWithFunction from './custom_name_with_function';

interface CustomComaponantExampleProps {}

const CustomComaponantExample = (props: CustomComaponantExampleProps) => {
  return (
    <View style={styles.container}>
      <Text>CustomComaponantExample</Text>
      <Text>
      <CustomNameExamples/>
      </Text>
      <Text>
        {/* <CustomNameWithFunction name={"meet"} /> */}

      </Text>
     
    </View>
  );
};

export default CustomComaponantExample;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
