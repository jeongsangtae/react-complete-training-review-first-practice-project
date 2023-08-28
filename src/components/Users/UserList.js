import React from "react";

import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.userDatas);

  return (
    <Card className={styles.users}>
      <ul>
        {props.userDatas.map((userData) => (
          <li key={userData.id}>
            {userData.userName} ({userData.age}) 살
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
