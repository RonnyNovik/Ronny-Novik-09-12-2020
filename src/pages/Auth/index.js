import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import {
  signIn,
  signUp,
  signInFailed,
  signUpFailed,
  signUpSuccess,
} from "../../redux/actions/user";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Logo from "../../assets/Logo.png";
import { withRouter } from "react-router-dom";
import { ValidateUsername, ValidatePassword } from "../../utils/Validators";
import "./login.scss";

const Auth = (props) => {
  const [signUpMode, toggleSignUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.authError);
  const loadingAuth = useSelector((state) => state.user.loadingAuth);

  useEffect(() => {
    //reset store, recommended to be an action on its own
    dispatch(signUpSuccess());
  }, [dispatch]);

  const usernameValid =
    typeof ValidateUsername(userName) === "boolean" && userName.length
      ? true
      : false;
  const passwordValid =
    typeof ValidatePassword(password) === "boolean" && password.length
      ? true
      : false;
  const verifyPasswordsValid =
    typeof ValidatePassword(verifyPassword) === "boolean" &&
    verifyPassword.length &&
    password === verifyPassword
      ? true
      : false;

  const signUpHandler = async () => {
    if (usernameValid & passwordValid & verifyPasswordsValid) {
      dispatch(signUp({ userName, password }, forwardToMailbox));
    } else {
      dispatch(signInFailed({ response: { data: "Invalid fields" } }));
    }
  };

  const forwardToMailbox = () => {
    props.history.push("/");
  };

  const signInHandler = () => {
    if (usernameValid & passwordValid) {
      dispatch(signIn({ userName, password }, forwardToMailbox));
    } else {
      dispatch(signUpFailed({ response: { data: "Invalid fields" } }));
    }
  };

  return (
    <div className={`login-page-wrapper`}>
      <div className={`login-form-card`}>
        {loadingAuth ? (
          <Loader />
        ) : (
          <>
            {" "}
            <form>
              <img className={`logo`} alt={"heromail"} src={Logo} />
              <TextInput
                label={"Username"}
                value={userName}
                maxLength={20}
                validator={ValidateUsername}
                onChange={setUserName}
              />
              <TextInput
                label={"Password"}
                value={password}
                password
                maxLength={40}
                validator={ValidatePassword}
                onChange={setPassword}
              />
              {signUpMode && (
                <TextInput
                  value={verifyPassword}
                  label={"Verify Password"}
                  password
                  maxLength={40}
                  validator={ValidatePassword}
                  onChange={setVerifyPassword}
                />
              )}
            </form>
            {error && <span className={`error-text`}>{error}</span>}
            <div className={`button-wrapper`}>
              <Button
                text={`${signUpMode ? "Sign up" : "Log in"}`}
                className={`primary-btn`}
                onClick={
                  signUpMode ? () => signUpHandler() : () => signInHandler()
                }
                blockBtn
              />
              <Button
                onClick={() => toggleSignUp(!signUpMode)}
                text={`Switch to ${!signUpMode ? "sign up" : "log in"}`}
                className={`secondary-btn`}
                blockBtn
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(Auth);
