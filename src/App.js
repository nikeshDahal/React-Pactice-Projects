import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addedUser = (userName, userAge) => {
    setUserList((prevValue) => {
      return [...prevValue, {id : Math.random().toString(), name: userName, age: userAge  }];
    });
  };
  return (
    <div>
      <AddUser onaddUser={addedUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
