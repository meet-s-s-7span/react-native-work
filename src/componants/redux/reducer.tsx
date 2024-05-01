import { useDispatch } from "react-redux";
import { cartUpdateValue, updateCartValue } from "./actions";
import { Add_To_Cart, REMOVE_ITEM, UPDATE_CART_VALUE } from "./constants";

// Assuming initial state is an object with an items array and updateCartValue
const initialState = {
  items: [], // This will contain your cart items
  updateCartValue: 0, // Tracks additional cart value updates
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      // Adds item and updates cart value
      return {
        ...state,
        items: [...state.items, action.data],
        updateCartValue: state.updateCartValue + 1, // Example of incrementing, adjust logic as needed
      };

    case 'REMOVE_FROM_CART':
      // Removes item and updates cart value
      const filteredItems = state.items.filter(item => item.id !== action.data);
      return {
        ...state,
        items: filteredItems,
        updateCartValue: state.updateCartValue - 1, // Example of decrementing, adjust logic as needed
      };

    // case UPDATE_CART_VALUE:
    //   // Custom logic to recalculate cart value
    //   return {
    //     ...state,
    //     updateCartValue: calculateCartValue(state.items), // Implement this function based on your needs
    //   };

    default:
      return state;
  }
};

// function calculateCartValue(items) {
//   // Implement calculation logic, e.g., sum of item prices
//   // return items.reduce((total, item) => total + item.price, 0);
// }
