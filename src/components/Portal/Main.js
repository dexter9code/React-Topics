import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";

const Main = function (props) {
  const [show, setShow] = React.useState(false);
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop visible={show} />,
        document.getElementById("overlay")
      )}
      <div>
        <h1>Modal will active on the click</h1>
        <button onClick={() => setShow((preValue) => !preValue)}>
          Activate
        </button>
      </div>
    </>
  );
};

export default Main;
