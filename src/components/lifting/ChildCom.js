import React from "react";

const ChildComp = function (props) {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const nameHandler = (e) => {
    setName((preVal) => e.target.value);
  };

  const ageHandler = (e) => {
    setAge((preVal) => e.target.value);
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    props.onClickData({ name, age });
  };

  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <label>Name</label>
        <input type={"text"} value={name} onChange={nameHandler} />
        <label>Age</label>
        <input type={"number"} value={age} onChange={ageHandler} />
        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
};

export default ChildComp;
