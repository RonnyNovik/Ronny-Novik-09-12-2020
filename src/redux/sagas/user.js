import { call, put, takeEvery } from "redux-saga/effects";
import * as userAction from "../actions/user";
import userServices from "../../services/userServices";
import Token from "../../utils/Token";

function* authorizeUser({ data: { userInfo, callback } }) {
  try {
    const {
      data: { token, user },
    } = yield call(userServices.signIn, { ...userInfo });
    yield call(Token.saveToken, token.token);
    yield put(userAction.signInSuccess(user));
    yield call(callback, null);
  } catch (error) {
    yield put(userAction.signInFailed(error));
  }
}

function* signUpUser({ data: { userInfo, callback } }) {
  try {
    yield call(userServices.signUp, { ...userInfo });
    const {
      data: { token, user },
    } = yield call(userServices.signIn, {
      ...userInfo,
    });
    yield call(Token.saveToken, token.token);
    yield put(userAction.signInSuccess(user));
    yield call(callback, null);
  } catch (error) {
    yield put(userAction.signUpFailed(error));
  }
}
export function* watchSignIn() {
  yield takeEvery("REQUEST_SIGN_IN", authorizeUser);
  yield takeEvery("REQUEST_SIGN_UP", signUpUser);
}
