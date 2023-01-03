import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "dark",
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const selectTheme = (state) => { return state.theme.theme };

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;