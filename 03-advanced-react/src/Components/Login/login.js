import React, { useState } from "react";
import Card from "../UI/Card/card";
import Button from "../UI/Button/Button";
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className="w-11/12 max-w-2xl my-40 mx-auto">
      <form onSubmit={submitHandler}>
        <div className={`control ${emailIsValid === false ? "invalid" : ""}`}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          ></input>
        </div>
        <div
          className={`control ${passwordIsValid === false ? "invalid" : ""}`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          ></input>
        </div>
        <div className="text-center">
          <Button
            className="text-lg font-bold mt-5"
            type="submit"
            disabled={!formIsValid}
          >
            LogIn
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
