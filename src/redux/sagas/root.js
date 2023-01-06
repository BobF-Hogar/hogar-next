import { spawn } from "redux-saga/effects";

import { watchers as auth } from "./auth";
import { watchers as weather } from "./weather";

function* rootSaga() {
    const masterWatcherList = {
        ...auth,
        ...weather,
    }

    const sagas = Object.values(masterWatcherList);

    for (let i = 0; i < sagas.length; i++) {
        if (sagas[i]) {
            yield spawn(sagas[i]);
        }
    }
}

export default rootSaga;