import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  useRef,
} from "react"
import Card from "../UI/Card/card"
import Button from "../UI/Button/Button"
import AuthContext from "../../store/auth-context"
import Input from "../UI/Input/Input"

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

const Login = () => {
  const ctx = useContext(AuthContext)
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
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
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value)
    } else if (!emailState.isValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  }

  return (
    <Card className="w-11/12 max-w-2xl my-40 mx-auto">
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
        />
        <div className="text-center">
          <Button className="text-lg font-bold mt-5" type="submit">
            LogIn
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
