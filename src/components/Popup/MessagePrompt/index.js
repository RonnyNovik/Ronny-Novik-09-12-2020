import React, { useState } from "react";
import TextInput from "../../TextInput";
import Loader from "../../Loader";
import TextArea from "../../TextArea";
import { sendMessage, updateMessageList } from "../../../redux/actions/message";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../Button";
import { CrossMark } from "../../../utils/Icons";
import "./message-prompt.scss";
import { ValidateUsername } from "../../../utils/Validators";
const MessagePrompt = (props) => {
  const [recipient, setRecipient] = useState("");
  const [topic, setTopic] = useState("");
  const [messageText, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const error = useSelector((state) => state.messages.messageError);
  const loadingMessage = useSelector((state) => state.messages.loadingMessage);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const sendMessageHandler = () => {
    const message = {
      senderId: userInfo.id,
      recipient,
      topic,
      messageText,
    };
    setSuccess(false);
    if (recipient && topic && messageText) {
      dispatch(sendMessage(message, handleSucces));
    }
  };

  const handleSucces = () => {
    setSuccess(true);
    if (props.mailbox === "sent") {
      dispatch(updateMessageList(userInfo.id, props.mailbox));
    }
  };

  return (
    <div className={`message-prompt-wrapper popup`}>
      {loadingMessage ? (
        <Loader />
      ) : (
        <>
          <div className={`message-prompt-top-row`}>
            <h1 className={`message-heading`}>New Message</h1>
            <Button
              className={`close-btn`}
              icon={CrossMark}
              onClick={props.toggleHandler}
            />
          </div>
          <TextInput
            onChange={setRecipient}
            validator={ValidateUsername}
            maxLength={20}
            label={"To"}
          />
          <TextInput
            onChange={setTopic}
            minLength={1}
            maxLength={255}
            label={"Topic"}
          />
          <TextArea
            onChange={setMessage}
            minLength={1}
            maxLength={255}
            label={"Message"}
          />
          <div className={`alert-box`}>
            <span className={`error-text`}>{error ? error : ""}</span>
            <span className={`success-text`}>
              {success ? "Message Sent!" : ""}
            </span>
          </div>
          <Button
            onClick={() => sendMessageHandler()}
            className={`primary-btn`}
            text={"Send message"}
          />{" "}
        </>
      )}
    </div>
  );
};

export default MessagePrompt;
