import React, { useState, useContext, useCallback } from "react";
import AuthContext from "../../context/auth-context";

const Login = function (props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisiblity, setPasswordVisiblity] = useState(false);

  const ctx = useContext(AuthContext);

  const onUsernameChangeHanlder = (e) => {
    setUsername(e.target.value);
  };
  const onPasswordChangeHanlder = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    const data = { name: username, password };
    console.log(data);
    ctx.onLogin(data);
  };

  const onShowPasswordHandler = () => {
    setPasswordVisiblity((preValue) => !preValue);
    console.log(`changed`);
  };

  const clickHandler = useCallback(() => {
    console.log(`Iam called because state changes...`);
  }, [passwordVisiblity]);

  return (
    <>
      <nav>
        {ctx.isLogin && (
          <section>
            <h1>You are currently login cool !</h1>
            <button onClick={ctx.onLogout}>Logout</button>
          </section>
        )}
        {!ctx.isLogin && <h1>Login to see something crazy</h1>}
      </nav>
      <div>
        <label>Username</label>
        <input
          value={username}
          type="text"
          onChange={onUsernameChangeHanlder}
        />
        <label>Password</label>
        <input
          type={passwordVisiblity ? "text" : "password"}
          //   type={"password"}
          value={password}
          onChange={onPasswordChangeHanlder}
        />
        <p onClick={onShowPasswordHandler}>show</p>
        <br />
        <button onClick={onSubmitHandler}>Login</button>
        <br />
        <button onClick={clickHandler}>CallBack-Button</button>
      </div>
    </>
  );
};

export default Login;
