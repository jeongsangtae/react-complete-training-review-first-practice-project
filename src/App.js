import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const userInputData = (inputData) => {
    setUsers((prevUsers) => {
      return [...prevUsers, inputData];
    });
  };

  return (
    <div>
      <AddUser data={userInputData} />
      <UserList userDatas={users} />
    </div>
  );
}

export default App;
