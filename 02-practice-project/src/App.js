import React, { Fragment, useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: userName,
          age: userAge,
          id: Math.random().toFixed(3).toString(),
        },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </Fragment>
  );
}

export default App;
