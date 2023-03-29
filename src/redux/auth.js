import { createSlice } from "@reduxjs/toolkit";
import { listener } from "./listener";

import { login } from "../connection/auth";

export const authSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        loginAction: () => { },
        loginFailed: () => { },
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
        },
        refreshToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const authActions = authSlice.actions;

export const authSelectors = {
    user: (state) => { return state.auth.user; },
    token: (state) => { return state.auth.token; },
}

listener.startListening({
    actionCreator: authActions.loginAction,
    effect: (action, listenerApi) => {
        try {
            login(action.payload).then((result) => {
                switch(result?.statusCode) {
                    case 404:
                        listenerApi.dispatch(authActions.loginFailed());
                        break;
                    default:
                        listenerApi.dispatch(authActions.loginSuccess(result));
                        break;
                }
            });
        } catch (e) {
            listenerApi.dispatch(authActions.loginFailed());
        }
    }
})

export default authSlice.reducer;