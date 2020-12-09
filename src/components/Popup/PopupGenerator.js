import MessagePrompt from "./MessagePrompt";

export const GeneratePopup = (props) => {
  const popups = {
    message: <MessagePrompt {...props} />,
  };
  return popups[props.type];
};
