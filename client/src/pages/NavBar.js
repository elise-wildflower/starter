import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = (props) => {
  let history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);
  const { location } = props;

  const rightNavItems = () => {
    if (user) {
      return (  
        <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
      );
    };
      return (
        <>
          <Link to="/login">
            <Menu.Item active={location.pathname == "/login"}>Login</Menu.Item>
          </Link>
          <Link to="/register">
            <Menu.Item active={location.pathname == "/register"}>
              Register
            </Menu.Item>
          </Link>
        </>
      );
    }

  return (
    <Menu>
      <Link to="/">
        <Menu.Item active={location.pathname == "/"}>Home</Menu.Item>
      </Link>
      <Menu.Menu position="right">{rightNavItems()}</Menu.Menu>
    </Menu>
  );
};

export default withRouter(Navbar);

