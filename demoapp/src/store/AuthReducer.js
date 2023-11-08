import { createSlice } from "@reduxjs/toolkit";


const AuthReducer = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        token: ""
    },
    reducers: {
        login: (state, action) => {
            if (action.payload.token != "") {
                return { ...state, isLoggedIn: true, token: action.payload.token }
            } else {
                return {
                    ...state,
                    isLoggedIn: false,
                    token: ""
                }
            }
        },
        logout: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
                token: ""
            }

        },
    }
});

export const {login,logout } = AuthReducer.actions;
export default AuthReducer.reducer;
