import React, { useReducer, useState } from "react";

import "./form.css";

const nameReducer = (state, action) => {
  if (action.type === "INPUT_NAME") {
    return { value: action.val, isvalid: action.val.trim().length >= 3 };
  }

  if (action.type === "BLUR_NAME") {
    return { value: state.value, isvalid: state.value.trim().length >= 3 };
  }
  return { value: "", isValid: false };
};

function UseReducerEx() {
  const [nameState, nameDispatch] = useReducer(nameReducer, {
    value: "",
    isValid: false,
  });
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const onNameChangeHandler = (e) => {
    nameDispatch({ type: "INPUT_NAME", val: e.target.value });
  };

  const onPasswordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const onNameBlurHandler = (e) => {
    nameDispatch({ type: "BLUR_NAME" });
  };

  const onPasswordBlurHandler = (e) => {
    setPasswordValid(enteredPassword.trim().length >= 7);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(passwordValid, nameState.isvalid);
    if (!passwordValid)
      return console.log(`Please check your name or password`);
    if (!nameState.isvalid) return console.log(`Invalid name`);
    console.log({ name: nameState.value, password: enteredPassword });
  };

  return (
    <form className="login__form" onSubmit={onSubmitHandler}>
      <div className={`${nameState.isValid ? "control" : "control invalid"}`}>
        <label htmlFor="email">Name</label>
        <input
          type={"text"}
          value={nameState.value}
          onBlur={onNameBlurHandler}
          onChange={onNameChangeHandler}
        />
      </div>

      <div className="control">
        <label htmlFor="password">Password</label>
        <input
          type={"password"}
          value={enteredPassword}
          onChange={onPasswordChangeHandler}
          onBlur={onPasswordBlurHandler}
        />
      </div>
      <div className="actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default UseReducerEx;
