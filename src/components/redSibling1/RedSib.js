import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onAddText } from "../../features/paraSlice";

const RedSib = function (props) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onTextChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onClickHandler = (e) => {
    dispatch(onAddText(text));
  };

  return (
    <div>
      <label>Paragraph</label>
      <input type={"text"} value={text} onChange={onTextChangeHandler} />
      <br />
      <button onClick={onClickHandler}>Add</button>
    </div>
  );
};

export default RedSib;
