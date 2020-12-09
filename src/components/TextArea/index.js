import React from "react";
import "./text-area.scss";
const TextArea = (props) => {
  const { label, onChange, value } = props;
  return (
    <div className={`text-area-wrapper`}>
      <label>{label}</label>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TextArea;
