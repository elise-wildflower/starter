import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

// checking if token is valid or not....
const FetchUser = (props) => {
  let { user, setUser } = useContext(AuthContext);
  let [checked, setChecked] = useState(false);
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    // if user(in our react state) is authentecated or doesn't not have access token
    // we can setloaded to true and return from the function call
    if (user || !localStorage.getItem("access-token")) {
      setChecked(true);
      return;
    }

    // user is not authentecated but has access-token in local storage
    // let's check if it is valid if it, will grab and set user
    try {
      const res = await axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      // we don't need to handle this err. User token is expired
      // leave user null
    } finally {
      setChecked(true);
    }
  };
  return checked ? props.children : null;
};

export default FetchUser;
