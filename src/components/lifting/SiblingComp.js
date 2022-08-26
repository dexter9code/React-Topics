import React from "react";

const SblingComp = function (props) {
  return (
    <div>
      <h1>You got a name</h1>
      {props.data.name && <p>{`Yeah my name is ${props.data.name}`}</p>}
    </div>
  );
};

export default SblingComp;
