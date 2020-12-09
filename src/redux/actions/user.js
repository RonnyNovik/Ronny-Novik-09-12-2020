export const REQUEST_SIGN_IN = "REQUEST_SIGN_IN";
export const REQUEST_LOG_OUT = "REQUEST_LOG_OUT";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";
export const REQUEST_SIGN_UP = "REQUEST_SIGN_UP";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const signIn = (userInfo, callback) => {
  return {
    type: REQUEST_SIGN_IN,
    data: { userInfo, callback },
  };
};

export const signInSuccess = (userInfo) => {
  return {
    type: SIGN_IN_SUCCESS,
    data: { userInfo },
  };
};

export const signInFailed = (error) => {
  return {
    type: SIGN_IN_FAILED,
    data: { error },
  };
};

export const signUp = (userInfo, callback) => {
  return {
    type: REQUEST_SIGN_UP,
    data: { userInfo, callback },
  };
};
export const signUpSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS,
    data: { },
  };
}
export const signUpFailed = (error) => {
  return {
    type: SIGN_UP_FAILED,
    data: { error },
  };
};

export const logOut = () => {
  return {
    type: REQUEST_LOG_OUT,
  };
};
