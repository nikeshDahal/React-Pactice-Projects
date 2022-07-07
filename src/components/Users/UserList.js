import React from "react";
import Card from "../Ui/Card";
import userListCssModule from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div>
      {props.users.length>0?
            <Card className={userListCssModule.users}>
            <ul>
              {props.users.map((user) => (
                <li key={user.id}>{`${user.name} (${user.age}) years old `}</li>
              ))}
            </ul>
          </Card>:0}

    </div>
  );
};
export default UserList;
