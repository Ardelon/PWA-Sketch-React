import { createSlice } from "@reduxjs/toolkit";

export const isLoggedInSlice = createSlice({
    name : "isLoggedIn",
    initialState : {
        isLoggedIn : false
    },
    reducers : {
        login : (state) => {
            state.isLoggedIn = true;
        },
        logOut : (state) => {
            state.isLoggedIn = false
        }
    }
});

export const { login, logOut } = isLoggedInSlice.actions

export default isLoggedInSlice.reducer;