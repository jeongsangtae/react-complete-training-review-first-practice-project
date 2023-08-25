import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
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
    <Card className={styles.input}>
      <form onSubmit={userInputSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" onChange={userNameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" onChange={userAgeHandler} />
        <Button />
      </form>
    </Card>
  );
};

export default AddUser;
