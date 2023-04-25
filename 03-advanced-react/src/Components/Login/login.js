import React, { useState, useReducer, useEffect } from "react"
import Card from "../UI/Card/card"
import Button from "../UI/Button/Button"
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") }
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }
  }
  return { value: "", isValid: false }
}

const PasswordReducer = (state, action) => {
  if (action.type === "USER_PASS") {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  } else if (action.type === "PASS_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: "", isValid: false }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("")
  // const [emailIsValid, setEmailIsValid] = useState()
  // const [enteredPassword, setEnteredPassword] = useState("")
  // const [passwordIsValid, setPasswordIsValid] = useState()
  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  })

  const [passwordState, dispatchPassword] = useReducer(PasswordReducer, {
    value: "",
    isValid: null,
  })
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking validity")
      setFormIsValid(emailState.isValid && passwordState.isValid)
    }, 500)

    return () => {
      // console.log("cleanup")
      clearTimeout(identifier)
    }
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value })
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid)
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_PASS", val: event.target.value })
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6)
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  }

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASS_BLUR" })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onLogin(emailState.value, passwordState.value)
  }

  return (
    <Card className="w-11/12 max-w-2xl my-40 mx-auto">
      <form onSubmit={submitHandler}>
        <div
          className={`control ${emailState.isValid === false ? "invalid" : ""}`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          ></input>
        </div>
        <div
          className={`control ${
            passwordState.isValid === false ? "invalid" : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
  )
}

export default Login
