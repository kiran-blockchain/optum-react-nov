import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        totalPrice:1000
    },
    reducers:{
        addItemToCart:(state,action)=>{
            console.log(action);
            return {...state,cartItems:[...state.cartItems,action.payload]}
        },
        removeFromCart:(state,action)=>{
            let filteredItem = state.cartItems.filter(x=>x.id!=action.payload.id);
            return {...state,cartItems:[...filteredItem]}
        }
    }

});
/// export the actions 
export const {addItemToCart,removeFromCart} = CartReducer.actions;

//export the state
export default CartReducer.reducer;