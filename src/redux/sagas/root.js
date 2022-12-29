import { spawn } from "redux-saga/effects";

import * as sagaList from "./index";

function* rootSaga() {
    const sagas = Object.values(sagaList).filter(saga => Object.values(saga).length > 0);

    for (let i = 0; i < sagas.length; i++) {
        yield spawn(sagas[i]);
    }
}

export default rootSaga;