import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    handleLogin({ email, password }, history);
  };
  return (
    <div>
      <h1>login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          value={email}
          onChange={(e, { value }) => {
            setEmail(value);
          }}
          label={"Email"}
        />
        <Form.Input
          value={password}
          onChange={(e, { value }) => {
            setPassword(value);
          }}
          label={"Password"}
        />
        <Button>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
