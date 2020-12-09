import React, { useState } from "react";
import Button from "../Button";
import Popup from "../Popup";
import {
  OutBoundMailBox,
  InBoundMailBox,
  Refresh,
  PaperAirplane,
} from "../../utils/Icons";
import { useSelector, useDispatch } from "react-redux";
import { updateMessageList } from "../../redux/actions/message";
import "./user-menu.scss";
const UserMenu = (props) => {
  const { activeMailbox } = props;
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const activeMailboxHandler = (name) => {
    props.setActiveMailbox(name);
    dispatch(updateMessageList(userInfo.id, name));
  };

  const [messageToggled, toggleMessage] = useState(false);

  const refreshHandler = () => {
    dispatch(updateMessageList(userInfo.id, activeMailbox));
  };

  return (
    <div className={`user-menu-wrapper`}>
      <div className={`mailboxes-wrapper`}>
        <Button
          text={"Received"}
          onClick={() => activeMailboxHandler("received")}
          className={`mailbox-btn  ${
            activeMailbox === "received" ? "active" : ""
          }`}
          icon={InBoundMailBox}
        />
        <Button
          text={"Sent"}
          onClick={() => activeMailboxHandler("sent")}
          className={`mailbox-btn ${activeMailbox === "sent" ? "active" : ""}`}
          icon={OutBoundMailBox}
        />
      </div>
      <div className={`actions-wrapper`}>
        <Button
          className={`refresh-btn`}
          icon={Refresh}
          onClick={() => refreshHandler()}
        />
        <Button
          text={"Send message"}
          className={`primary-btn`}
          icon={PaperAirplane}
          onClick={() => toggleMessage(!messageToggled)}
        />
      </div>
      {messageToggled && (
        <Popup
          mailbox={activeMailbox}
          type="message"
          toggleHandler={() => toggleMessage(!messageToggled)}
        />
      )}
    </div>
  );
};

export default UserMenu;
