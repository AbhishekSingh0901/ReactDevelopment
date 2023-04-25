import React, { useState, useEffect } from "react"
import Login from "./Components/Login/login"
import MainHeader from "./Components/MainHeader/MainHeader"
import Home from "./Components/Home/Home"

export const App = () => {
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
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  )
}

export default App
