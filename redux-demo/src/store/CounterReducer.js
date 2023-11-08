import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 1000 ///starting value 
    },
    reducers:{
        increment:(state,payload)=>{
            return {...state,count:state.count+1}
        }
    }
});
//export the increment and decrement actions 
export const {increment} = CounterSlice.actions; 

//export the total reducer
export default CounterSlice.reducer;