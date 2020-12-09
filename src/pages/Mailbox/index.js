import React, { useState, useEffect } from "react";
import UserMenu from "../../components/UserMenu";
import Message from "../../components/Message";
import { updateMessageList, deleteMessage } from "../../redux/actions/message";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import Logo from "../../assets/Logo.png";
import Token from "../../utils/Token";
import { withRouter } from "react-router-dom";
import "./mailbox.scss";

const Mailbox = (props) => {
  const messageList = useSelector((state) => state.messages.messageList) || [];
  const loadingList = useSelector((state) => state.messages.loadingList);
  const userInfo = useSelector((state) => state.user.userInfo);
  const error = useSelector((state) => state.user.error);
  const [activeMailbox, setActiveMailbox] = useState("received");
  const dispatch = useDispatch();
  const token = Token.getToken();

  useState(() => {
    if (!token || !userInfo.id) {
      props.history.push("/auth");
    }
  }, [token]);

  useEffect(() => {
    if (userInfo.id) {
      dispatch(updateMessageList(userInfo.id, "received"));
    }
  }, [dispatch, userInfo.id]);

  const deletePromptHandler = (message_id) => {
    const accepted = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (accepted) {
      dispatch(deleteMessage(userInfo.id, message_id, activeMailbox));
    }
  };
  return (
    <>
      <div className={`mailbox-page-wrapper`}>
        <nav>
          <img className={`Logo`} src={Logo} alt={"logo"} />
        </nav>
        <UserMenu
          activeMailbox={activeMailbox}
          setActiveMailbox={setActiveMailbox}
        />
        <div className={`label-row`}>
          <span className={`list-label topic`}>Topic</span>
          <span className={`list-label from`}>From</span>
          <span className={`list-label to`}>To</span>
          <span className={`list-label date`}>Date</span>
        </div>
        <div className={`messages-list`}>
          {error?.response.data ? (
            <span className={`error-text`}>{error.response.data}</span>
          ) : loadingList ? (
            <Loader />
          ) : messageList.length ? (
            messageList.map((props) => (
              <Message
                {...props}
                key={props.id}
                deleteHandler={deletePromptHandler}
                type={activeMailbox}
              />
            ))
          ) : (
            <span className={`error-text centered`}>No Messages</span>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(Mailbox);
