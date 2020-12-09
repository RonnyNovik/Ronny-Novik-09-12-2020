import { fork } from "redux-saga/effects";
import { watchMessages } from "./message";
import { watchSignIn } from "./user";
export default function* rootSaga() {
  yield fork(watchSignIn);
  yield fork(watchMessages);
}
