import { createSlice } from "@reduxjs/toolkit";

export const localizationSlice = createSlice({
    name : "localization",
    initialState : {
        localization : 'TR'
    },
    reducers : {
        setLocalization : (state, action) => {
            state.localization = action.payload;
        }
    }
});

export const { setLocalization } = localizationSlice.actions

export default localizationSlice.reducer;