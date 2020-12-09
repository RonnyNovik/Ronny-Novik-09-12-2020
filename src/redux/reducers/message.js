const initialState = {
  messageList: [],
  loadingList: false,
  messageError: "",
  listError: "",
  loadingMessage: false,
};

const messageReducer = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case "MESSAGE_LIST_SUCCESS" ||
      "DELETE_MESSAGE_SUCCESS" ||
      "READ_MESSAGE_SUCCESS":
      return {
        ...state,
        messageList: [...data.messages],
        loadingList: false,
        listError: "",
      };
    case "REQUEST_SEND_MESSAGE":
      return {
        ...state,
        loadingMessage: true,
      };
    case "SENT_MESSAGE_SUCCESS":
      return {
        ...state,
        messageError: "",
        loadingMessage: false,
      };
    case "REQUESTING_LIST":
      return {
        ...state,
        loadingList: true,
      };
    case "MESSAGE_LIST_FAILED":
      return {
        ...state,
        listError: data.error.response.data,
        loadingList: false,
      };
    case "SENT_MESSAGE_FAILED" ||
      "DELETE_MESSAGE_FAILED" ||
      "READ_MESSAGE_FAILED":
      return {
        ...state,
        messageError: data.error.response.data,
        loadingMessage: false,
      };
    case "REQUEST_LOG_OUT":
      return {
        messageList: [],
        loadingList: false,
        messageError: "",
        listError: "",
        loadingMessage: false,
      };
    default:
      return state;
  }
};
export default messageReducer;
