import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
    name : "userInfo",
    initialState : {
        userName : '',
        email: '',
        password : '',
    },
    reducers : {
        setUser : (state, action) => {
            const {payload :{userName, email, password}} = action;
            state.userName = userName || state.userName;
            state.email = email || state.email;
            state.password = password || state.password;
        },
        discardUser : (state) => {
            state = state.initialState
        }
    }
})

export const { setUser, discardUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;