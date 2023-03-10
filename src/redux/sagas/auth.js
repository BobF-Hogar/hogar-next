import { call, put, takeLatest } from "redux-saga/effects";
import { loginAction, loginFailed, loginSuccess } from "../auth";
import { login } from "../../connection/auth";

function* sagaLoginAction(action) {
    try {
        const result = yield call(login, action.payload);

        switch(result?.statusCode) {
            case 404:
                yield put(loginFailed());
                break;
            default:
                yield put(loginSuccess(result));           
                break;
        }
    } catch (e) {
        yield put(loginFailed());
    }
}

export function* watchLoginAction() {
    yield takeLatest(loginAction().type, sagaLoginAction);
}

export const sagas = {
    sagaLoginAction,
}

export const watchers = {
    watchLoginAction,
}