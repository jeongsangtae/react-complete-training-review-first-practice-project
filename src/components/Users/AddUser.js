import React, { useState } from "react";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState();
  const [userAge, setUserAge] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const userInputSubmit = () => {
    const inputData = {
      userName: userName,
      userAge: userAge,
    };

    props.data(inputData);
  };

  return (
    <form onSubmit={userInputSubmit} className={styles.input}>
      <label>Username</label>
      <input onChange={userNameHandler} />
      <label>Age (Years)</label>
      <input onChange={userAgeHandler} />
      <button>Add User</button>
    </form>
  );
};

export default AddUser;
