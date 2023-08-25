import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const userInputData = (inputData) => {
    setUsers((prevInputData) => {
      return [inputData, ...prevInputData];
    });
    console.log(inputData);
  };

  console.log(users);

  return (
    <div>
      <AddUser data={userInputData} />
      <UserList userData={users} />
    </div>
  );
}

export default App;
