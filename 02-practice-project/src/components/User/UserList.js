import React from "react";
import Card from "../UI/Card";
const UserList = (props) => {
  return (
    <Card className="py-5 px-3">
      <ul className="">
        {props.users.map((user) => {
          return (
            <li
              key={user.id}
              className="text-lg text-gray-600 font-medium mb-3 border-b px-3 border-cyan-400"
            >
              {user.name} ({user.age} years old!)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
