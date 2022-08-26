import React, { useEffect, useReducer, useState } from "react";

const nameReducer = function (state, action) {
  if (action.type === "INPUT") {
    return { name: action.val, isValid: action.val.trim().length > 5 };
  }
  if (action.type === "BLUR") {
    return { name: state.name, isValid: state.name.trim().length > 5 };
  }
  return { name: "", isValid: false };
};

const Index = function (props) {
  //   const [name, setName] = React.useState("");
  //   const [valid, setValid] = React.useState(false);

  //   const onNameChangeHandler = (e) => {
  //     setName(e.target.value);
  //   };

  //   useEffect(() => {
  //     const isThisValid = setTimeout(() => {
  //       console.log(`Checking...`);
  //       setValid(name.includes("@") && name.trim().length > 5);
  //     }, 720);

  //     return () => {
  //       console.log(`Reseting the timer...`);
  //       clearTimeout(isThisValid);
  //     };
  //   }, [name]);

  const [nameState, nameDisptach] = useReducer(nameReducer, {
    name: "",
    isValid: false,
  });

  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onNameChangeHandler = (e) => {
    nameDisptach({ type: "INPUT", val: e.target.value });
  };

  const onBlurHandler = () => {
    nameDisptach({ type: "BLUR" });
  };

  const onPasswordChangeHandler = (e) => {
    // nameDisptach({ type: "INPUT", val: e.target.value });
    setPassword(e.target.value);
  };

  const onBlurPasswordHandler = () => {
    // nameDisptach({ type: "BLUR" });
    setIsValid(password.trim().length > 6);
  };

  return (
    <div>
      <h1>Effects</h1>
      {/* <input value={name} onChange={onNameChangeHandler} />
      {valid && <p>Everything looks good</p>} */}
      {nameState.isValid && <p>Everything looks good</p>}
      <label>Name</label>
      <input
        type={"text"}
        value={nameState.name}
        onChange={onNameChangeHandler}
        onBlur={onBlurHandler}
      />
      {isValid && <p>Everything looks good</p>}
      <label>Password</label>
      <input
        type={"password"}
        value={password}
        onChange={onPasswordChangeHandler}
        onBlur={onBlurPasswordHandler}
      />
    </div>
  );
};

export default Index;
