import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/root";

import authReducer from "./auth";
import modalreducer from "./modal";
import themeReducer from "./theme";
import weatherReducer from "./weather";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        auth: authReducer,
        modal: modalreducer,
        theme: themeReducer,
        weather: weatherReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(sagaMiddleware);
    }
});

sagaMiddleware.run(rootSaga);