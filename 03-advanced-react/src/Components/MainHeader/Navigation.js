import React from "react";
import Button from "../UI/Button/Button";

const Navigation = (props) => {
  return (
    <nav>
      <ul className="list-none m-0 p-0 flex items-center text-teal-600">
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Button
              className="bg-gradient-to-tr from-teal-300 to-teal-500 text-gray-500 px-6 py-1 rounded-lg shadow-sm hover:opacity-70 hover:shadow-lg"
              onClick={props.onLogout}
            >
              LogOut
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
