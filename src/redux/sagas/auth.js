import { takeEvery, put } from "redux-saga/effects";
import { loginAction, loginFailed, loginSuccess } from "../authSlice";
import { login } from "../../connection/auth";

function* sagaLoginAction(action) {
    console.log("Logging in!");
    try {
        const result = login(action.payload);

        switch(result?.statusCode) {
            case 200:
            default:
                console.log(result);
                yield put(loginSuccess("TODO"));
                break;
        }
    } catch (e) {
        yield put(loginFailed());
    }
}

export function* watchLoginAction() {
    yield takeEvery(loginAction().type, sagaLoginAction);
}

export const sagas = {
    sagaLoginAction,
}

export const watchers = {
    watchLoginAction,
}