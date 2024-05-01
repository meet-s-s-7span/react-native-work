import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { cartUpdateValue, removeFromCart, updateCartValue } from './redux/actions'; // Assume this can both add and remove items now

const ProductFile = () => {
  const productsList = [
    { id: 1, name: 'iPhone 14 Pro', price: 1000000 },
    { id: 2, name: 'iPhone 8 Pro', price: 50000 },
    { id: 3, name: 'iPhone 9 Pro', price: 80000 },
  ];
  
  const dispatch = useDispatch();
  const cartValues = useSelector((state) => state.reducer);

  const handleAddToCart = (item) => {
    dispatch(cartUpdateValue(item));
    console.log(cartUpdateValue(item));
  };

  // const handleRemoveToCart = (item) => {
  //   dispatch(removeFromCart(item));
  //   //  dispatch(cartUpdateValue(item));
  //   console.log(removeFromCart(item));

  // }
  const handleRemoveToCart = (itemId) => {
    // Dispatch action to remove item from cart
    dispatch(removeFromCart(itemId));
    console.log(removeFromCart(itemId));
    // Dispatch action to update cart value in header
    // dispatch(updateCartValue()); // Assuming you have an action for updating the cart value
  };

  

  const renderItem = ({ item }) => {
    // const isAdded = cartValues.some((element) => element.name === item.name);
    // const [isAdded,setIsAdded]= React.useState(false)
    // React.useEffect(()=>{
    //   let result = cartValues.filter((element)=>{
    //     return element.id === item.id;
    //   });
    //   if (result.length) {
    //     setIsAdded(true)
    //   }
    //   else {
    //     setIsAdded(false)
    //   }
    // },[cartUpdateValue])
    
     
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
       {
        isAdded 
        ?
        <Button
        title={  'Remove from cart'}
        onPress={() => handleRemoveToCart(item) }
      />
        : 
        <Button
        title={  'Add to cart'}
        onPress={() => handleAddToCart(item)}
      />
        
       }
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductFile;

const styles = StyleSheet.create({
  container: {},
});
