import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    theme: string,
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "dark",
    },
    reducers: {
        setTheme: (state: ThemeState, action) => {
            state.theme = action.payload;
        }
    }
});

export const themeSelectors = {
    theme: (state) => { return state.theme.theme; },
}

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;