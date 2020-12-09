import React from "react";
import "./button.scss";
const Button = (props) => {
  const { text, className, onClick, blockBtn, icon } = props;
  return (
    <button
      onClick={onClick}
      style={blockBtn && { width: `100%`, display: "block" }}
      className={className}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
