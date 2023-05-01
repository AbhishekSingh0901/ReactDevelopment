import React, { useContext } from "react"
import Login from "./Components/Login/login"
import MainHeader from "./Components/MainHeader/MainHeader"
import Home from "./Components/Home/Home"
import AuthContext from "./store/auth-context"

export const App = () => {
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  )
}

export default App
