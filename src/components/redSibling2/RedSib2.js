import React from "react";
import { useSelector } from "react-redux/es/exports";

const RedSib2 = function (props) {
  const text = useSelector((state) => state.paraChange.text);
  return (
    <>
      {text && <p>{text}</p>}
      {!text && <p>Add to see change</p>}
    </>
  );
};

export default RedSib2;
