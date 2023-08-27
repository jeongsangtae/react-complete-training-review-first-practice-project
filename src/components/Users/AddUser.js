import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const userInputSubmit = (event) => {
    event.preventDefault();

    if (userName.length === 0 || age.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const inputData = {
      userName: userName,
      age: +age,
      id: Math.random().toString(),
    };

    props.data(inputData);
    setUserName("");
    setAge("");
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}

      <Card className={styles.input}>
        <form onSubmit={userInputSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={userAgeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
