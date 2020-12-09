export const REQUEST_MESSAGE_LIST = "REQUEST_MESSAGE_LIST";
export const MESSAGE_LIST_SUCCESS = "MESSAGE_LIST_SUCCESS";
export const MESSAGE_LIST_FAILED = "MESSAGE_LIST_FAILED";

export const REQUEST_DELETE_MESSAGE = "REQUEST_DELETE_MESSAGE";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAILED = "DELETE_MESSAGE_FAILED";

export const REQUEST_SEND_MESSAGE = "REQUEST_SEND_MESSAGE";
export const SENT_MESSAGE_FAILED = "SENT_MESSAGE_FAILED";
export const SENT_MESSAGE_SUCCESS = 'SENT_MESSAGE_SUCCESS'
export const REQUEST_READ_MESSAGE = "REQUEST_READ_MESSAGE";
export const READ_MESSAGE_SUCCESS = "READ_MESSAGE_SUCCESS";
export const READ_MESSAGE_FAILED = "READ_MESSAGE_FAILED";

export const updateMessageList = (user_id, mode) => {
  return {
    type: REQUEST_MESSAGE_LIST,
    data: { user_id, mode },
  };
};

export const updateMessageListSuccess = (messages) => {
  return {
    type: MESSAGE_LIST_SUCCESS,
    data: { messages },
  };
};

export const updateMessageListFailed = (error) => {
  return {
    type: MESSAGE_LIST_FAILED,
    data: { error },
  };
};

export const sendMessage = (message, callback) => {
  return {
    type: REQUEST_SEND_MESSAGE,
    data: { message, callback },
  };
};

export const sendMessageSuccess = () => {
  return {
    type: SENT_MESSAGE_SUCCESS,
    data:  {},
  };
};

export const sendMessageFailed = (error) => {
  return {
    type: SENT_MESSAGE_FAILED,
    data: { error },
  };
};

export const readMessage = (user_id, message_id) => {
  return {
    type: REQUEST_READ_MESSAGE,
    data: { user_id, message_id },
  };
};

export const readMessageFailed = (error) => {
  return {
    type: READ_MESSAGE_FAILED,
    data: { error },
  };
};

export const deleteMessage = (user_id, message_id, type ) => {
  return {
    type: REQUEST_DELETE_MESSAGE,
    data: { user_id, message_id, type },
  };
};

export const deleteMessageSuccess = (messages) => {
  return {
    type: DELETE_MESSAGE_SUCCESS,
    data: { messages },
  };
};

export const deleteMessageFailed = (error) => {
  return {
    type: DELETE_MESSAGE_FAILED,
    data: { error },
  };
};
