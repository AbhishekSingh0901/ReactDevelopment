import { createContext, useState, useEffect } from "react"

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
})

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //*this wont work as it will cause an infinite loop:
  // const storedUserLogInfo = localStorage.getItem("isLoggedIn")
  // if (storedUserLogInfo === "1") {
  //   setIsLoggedIn(true)
  // }

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("isLoggedIn")
    if (storedUserInfo === "1") {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1")
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
