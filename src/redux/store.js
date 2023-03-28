import { configureStore } from "@reduxjs/toolkit";
import listenerMiddleware from "./listener";

import authReducer from "./auth";
import modalreducer from "./modal";
import themeReducer from "./theme";
import weatherReducer from "./weather";

export default configureStore({
    reducer: {
        auth: authReducer,
        modal: modalreducer,
        theme: themeReducer,
        weather: weatherReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ thunk: false }).prepend(listenerMiddleware);
    }
});