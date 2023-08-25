import React from "react";

import AddUser from "./components/Users/AddUser";

function App() {
  const userInputData = (inputData) => {
    console.log(inputData);
  };

  return (
    <div>
      <AddUser data={userInputData} />
    </div>
  );
}

export default App;
