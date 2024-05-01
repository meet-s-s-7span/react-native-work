import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

 const store = configureStore({
    reducer: rootReducer
    //{
        
        // counter: (state = 0, action) => {
        //     switch (action.type) {
        //         case "INCREMENT":
        //             return state + 1;
        //         case "DECREMENT":
        //             return state - 1;
        //         default:
        //             return state;
        //     }
        // }
    //}
})
export default store;