import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        loginAction: (state) => {
            return state;
        },
        loginFailed: (state) => {
            return {};
        },
        loginSuccess: (state, action) => {
            if (action.payload) {
                // if (sessionStorage.getItem("rememberLogin")) {
                //     localStorage.setItem("userData", JSON.stringify(action.payload));
                // } else {
                //     localStorage.removeItem("userData");
                // }

                state.user = action.payload;
            }else {
                localStorage.removeItem("userData");
            }
 
            return state;
        }
    }
});

export const selectUser = (state) => { return state.auth.user };

export const { loginAction, loginFailed, loginSuccess } = authSlice.actions;

export default authSlice.reducer;