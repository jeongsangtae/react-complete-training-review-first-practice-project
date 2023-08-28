import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const userInputData = (userName, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { userName: userName, age: +age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={userInputData} />
      <UserList userDatas={users} />
    </div>
  );
}

export default App;
