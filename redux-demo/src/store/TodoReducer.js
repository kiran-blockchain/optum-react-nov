import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
       tasks:[]
    },
});

export default TodoSlice.reducer;