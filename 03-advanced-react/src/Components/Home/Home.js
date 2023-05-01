import React, { useContext } from "react"

import Card from "../UI/Card/card"
import Button from "../UI/Button/Button"
import AuthContext from "../../store/auth-context"

const Home = (props) => {
  const ctx = useContext(AuthContext)
  return (
    <Card className="w-11/12 max-w-2xl mt-52 mx-auto text-center">
      <h1 className=" my-10 font-bold uppercase md:text-4xl text-2xl bg-gradient-to-r from-teal-800 to-teal-600 text-transparent bg-clip-text cursor-pointer ">
        Welcome Back!
      </h1>
      <Button onClick={ctx.onLogout}>LogOut</Button>
    </Card>
  )
}

export default Home
