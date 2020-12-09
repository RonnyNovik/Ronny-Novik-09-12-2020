import { call, put, takeLatest } from "redux-saga/effects";
import * as Action from "../actions/message";
import messageServices from "../../services/messageServices";

function* fetchList({ data: user_id, mode }) {
  try {
    const { data } = yield call(messageServices.getMessages, user_id, mode);
    yield put(Action.updateMessageListSuccess(data));
  } catch (error) {
    yield put(Action.updateMessageListFailed(error));
  }
}

function* sendMessage({ data: { message, callback } }) {
  try {
    yield call(messageServices.sendMessage, message);
    yield call(callback, null);
    yield put(Action.sendMessageSuccess());
  } catch (error) {
    yield put(Action.sendMessageFailed(error));
  }
}

function* deleteMessage({ data: { user_id, message_id, type } }) {
  try {
    const data = yield call(messageServices.deleteMessage, {
      user_id,
      message_id,
    });
    yield put(Action.updateMessageList(user_id, type));
  } catch (error) {
    yield put(Action.sendMessageFailed(error));
  }
}

function* readMessages({ data: { user_id, message_id } }) {
  try {
    yield call(messageServices.readMessage, message_id);
    yield put(Action.updateMessageList(user_id, "received"));
  } catch (error) {
    yield put(Action.sendMessageFailed(error));
  }
}

export function* watchMessages() {
  yield takeLatest("REQUEST_MESSAGE_LIST", fetchList);
  yield takeLatest("REQUEST_SEND_MESSAGE", sendMessage);
  yield takeLatest("REQUEST_DELETE_MESSAGE", deleteMessage);
  yield takeLatest("REQUEST_READ_MESSAGE", readMessages);
}
