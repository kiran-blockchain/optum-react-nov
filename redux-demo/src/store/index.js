import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import TodoReducer from "./TodoReducer";

export default configureStore({
    reducer:{
        counter:CounterReducer,
        todos:TodoReducer
    }
})