import React, { useState } from "react";
import "./text-input.scss";
const TextInput = (props) => {
  const {
    label,
    onChange,
    password,
    minLength,
    maxLength,
    validator,
    value,
  } = props;
  const [inputError, setError] = useState("");
  const handleInput = (e) => {
    const { value } = e.target;
    const validate = validator && value.length ? validator(value) : true;
    if (typeof validate === "boolean" && validate) {
      inputError && setError("");
    } else {
      setError(validate);
    }
    onChange(value);

  };
  return (
    <>
      <div className={`text-input-wrapper`}>
        <label>{label}</label>
        <input
          type={password ? "password" : "text"}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <span className={`error-text mini`}>{inputError}</span>
    </>
  );
};

export default TextInput;
