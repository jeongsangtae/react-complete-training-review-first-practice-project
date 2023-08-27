import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const userInputSubmit = (event) => {
    event.preventDefault();

    const inputData = {
      userName: userName,
      age: +age,
      id: Math.random().toString(),
    };

    props.data(inputData);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={userInputSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={userAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
