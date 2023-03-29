import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "dark",
    },
    reducers: {
        setTheme: (state, action) => {
            state = action.payload;
        }
    }
});

export const themeSelectors = {
    theme: (state) => { return state.theme.theme; },
}

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;