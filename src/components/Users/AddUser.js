import React from "react";
import { useState } from "react";
import Card from "../Ui/Card";
import AddUserModuleCss from "./AddUser.module.css";
import Button from "../Ui/Button";
import ErrorModule from "../Ui/ErrorModule";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const submitButtonHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:"An Error Occured",
        message:"please enter username and age to proceed"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title:"Age Error",
        message:"please insert age greater than 0 to proceed"
      })
      return;
    }
    props.onaddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const confirmationHandler = () =>{
    setError(null)
  };
  return (
    <div>
      {error && <ErrorModule title={error.title} message={error.message} onConfirm = {confirmationHandler} />}
      <Card className={AddUserModuleCss.input}>
        <form onSubmit={submitButtonHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={userAgeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
