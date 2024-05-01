import { Add_To_Cart, REMOVE_FROM_CART, UPDATE_CART_VALUE } from "./constants";

// Add_To_Cart

export function cartUpdateValue(item){
    return {
        type: Add_To_Cart,
        data: item
    }
}

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    data: itemId,
  });
  
//   export const updateCartValue = () => ({
//     type: UPDATE_CART_VALUE,
//   });