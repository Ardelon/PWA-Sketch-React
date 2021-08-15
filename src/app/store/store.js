import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/somethingSlice';
import userReducer from "../features/userSlice";
import loginReducer from '../features/isLoggedInSlice'; 
import localizationReducer from '../features/localizationSlice'; 

export default configureStore({
  reducer: {
    counter: counterReducer,
    userInfo : userReducer,
    isLoggedIn : loginReducer,
    localization : localizationReducer,
  },
})