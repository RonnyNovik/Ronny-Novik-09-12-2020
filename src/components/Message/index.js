import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readMessage } from "../../redux/actions/message";
import Button from "../../components/Button";
import { TrashCan } from "../../utils/Icons";
import "./message.scss";
const Message = (props) => {
  const {
    was_read,
    topic,
    created_at,
    content,
    role,
    id,
    sender_name,
    recipient_name,
    deleteHandler,
    type,
  } = props;
  const [open, toggleMessage] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userInfo.id);
  
  const onClickHandler = () => {
    toggleMessage(!open);
    if (!was_read && type !== "sent") {
      dispatch(readMessage(userId, id));
    }
  };

  return (
    <>
      <div
        className={`message-wrapper ${open ? "open" : ""} ${
          !was_read && type !== "sent" ? "active" : ""
        }`}
      >
        <div onClick={() => onClickHandler()} className={`text-content`}>
          <span className={`message-body-text topic`}>{topic}</span>
          <span
            className={`message-body-text from ${
              type !== "sent" ? "hideOnMobile" : ""
            }`}
          >
            {sender_name}
          </span>
          <span
            className={`message-body-text to ${
              type !== "received" ? "hideOnMobile" : ""
            }`}
          >
            {recipient_name}
          </span>
          <span className={`message-body-text`}>{`${new Date(
            created_at
          ).toLocaleString("he-IL")}`}</span>
        </div>
        <Button
          onClick={() => {
            deleteHandler(id);
          }}
          className={`trash-btn`}
          icon={TrashCan}
        />
      </div>
      <div className={`message-content ${open ? "open" : ""}`}>
        <span className={`message-text`}>{content}</span>
      </div>
    </>
  );
};

export default Message;
