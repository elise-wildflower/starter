import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from "react-router";

const Register = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456");
  const { handleRegister } = useContext(AuthContext);

  const handleSubmit = (e) => {
    if (password !== passwordConfirmation) {
      alert("passwords do not match");
      return;
    }
    handleRegister({ email, password }, history);
  };
  return (
    <div>
      <h1>register</h1>
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
        <Form.Input
          value={passwordConfirmation}
          onChange={(e, { value }) => {
            setPasswordConfirmation(value);
          }}
          label={"Password Confirmation"}
        />
        <Button>Register</Button>
      </Form>
    </div>
  );
};

export default Register;
