import React, { useContext } from "react"
import Button from "../UI/Button/Button"
import AuthContext from "../../store/auth-context"

const Navigation = () => {
  const ctx = useContext(AuthContext)
  return (
    <nav>
      <ul className="list-none m-0 p-0 flex items-center text-teal-600">
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Button
              className="bg-gradient-to-tr from-teal-300 to-teal-500 text-gray-500 px-6 py-1 rounded-lg shadow-sm hover:opacity-70 hover:shadow-lg"
              onClick={ctx.onLogout}
            >
              LogOut
            </Button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
