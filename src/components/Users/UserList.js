import React from "react";

import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        <li>{props.userName}</li>
        <li>{props.age}</li>
      </ul>
    </Card>
  );
};

export default UserList;
