import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/root";

import authReducer from "./authSlice";
import themeReducer from "./themeSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(sagaMiddleware);
    }
});

sagaMiddleware.run(rootSaga);