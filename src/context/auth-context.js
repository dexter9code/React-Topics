import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLogin: false,
  onLogin: (data) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isCurrentlyLogin, setIsCurrentlyLogin] = useState(false);

  useEffect(() => {
    const userInfromation = localStorage.getItem("key");

    if (userInfromation === "yes") setIsCurrentlyLogin(true);
  }, []);

  const onLoginHandler = (data) => {
    if (data.name.includes("@")) {
      localStorage.setItem("key", "yes");
    } else {
      console.log(`invalid information provided`);
    }
  };

  const onLogoutHandler = (e) => {
    localStorage.removeItem("key");
    setIsCurrentlyLogin(false);
    console.log(`You have been logout out`);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin: isCurrentlyLogin,
        onLogin: onLoginHandler,
        onLogout: onLogoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
