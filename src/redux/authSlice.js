import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        loginAction: (state) => {
            return state;
        },
        loginFailed: (state) => {
            return state;
        },
        loginSuccess: (state, payload) => {
            return state;
        }
    }
});

export const selectUser = (state) => { return state.auth.user };

export const { loginAction, loginFailed, loginSuccess } = authSlice.actions;

export default authSlice.reducer;