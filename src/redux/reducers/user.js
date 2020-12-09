const initialState = {
  userInfo: {},
  authError: "",
  loadingAuth: false,
};

const userReducer = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case "REQUEST_SIGN_IN" || "REQUEST_SIGN_UP":
      return {
        ...state,
        loadingAuth: true,
      };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        userInfo: { ...data.userInfo },
        loadingAuth: false,
        authError: "",
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        loadingAuth: false,
        authError: "",
      };
    case "SIGN_IN_FAILED":
      return {
        ...state,
        loadingAuth: false,
        authError: data.error.response.data,
      };
    case "SIGN_UP_FAILED":
      return {
        ...state,
        loadingAuth: false,
        authError: data.error.response.data,
      };
    case "REQUEST_LOG_OUT":
      return {
        userInfo: {},
        authError: "",
        loadingAuth: false,
      };
    default:
      return state;
  }
};
export default userReducer;
