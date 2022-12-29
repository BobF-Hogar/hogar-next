import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas/root";

import themeReducer from "./themeSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: [ sagaMiddleware ],
});

sagaMiddleware.run(sagas);