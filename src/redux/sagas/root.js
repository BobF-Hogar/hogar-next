import { spawn } from "redux-saga/effects";

import { watchers as auth } from "./auth";

function* rootSaga() {
    const masterWatcherList = {
        ...auth,
    }

    const sagas = Object.values(masterWatcherList);

    for (let i = 0; i < sagas.length; i++) {
        if (sagas[i]) {
            yield spawn(sagas[i]);
        }
    }
}

export default rootSaga;