import React from "react";

import "./backdrop.css";

const BackDrop = function (props) {
  return <>{props.visible && <div className="backdrop" />}</>;
};

export default BackDrop;
