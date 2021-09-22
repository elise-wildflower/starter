import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

// probably wont use this (using useContext hook instead )
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (user, history) => {
    console.log("register user:", user);
    // so axios call now
    try {
      let res = await axios.post("/api/auth", user);
      console.log(res);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      // want to handle this in your UI for you sake
      alert(
        "unsuccessful register check console. maybe email is not unique pass invalid"
      );
      console.log(err);
      console.log(err.response);
    }
  };


  const handleLogin = async (user, history) => {
    console.log("login user,user", user);
    // so axios call now
    try {
      let res = await axios.post("/api/auth/sign_in", user);
      console.log(res);
      setUser(res.data.data);
      history.push("/");
    } catch (err) {
      // will hit catch if user is not db, bad usename or password
      // coundn't find email...
      alert("unsuccessful login check console check username or password");
      console.log(err);
      console.log(err.response);
    }
  };
  const handleLogout = (history) => {
    console.log("logout user");
    setUser(null);
    // remove the access from local storage.
    localStorage.removeItem("access-token");
    history.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleRegister,
        handleLogin,
        handleLogout,
        setUser,
        authenticated: user ? true : false,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
