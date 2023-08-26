import React from "react";

import Card from "../UI/Card";

import styles from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.userData);

  return (
    <Card className={styles.users}>
      <ul>
        <li>
          {props.userData[0].userName} ({props.userData[0].age}) 살
        </li>
      </ul>
    </Card>
  );
};

export default UserList;
