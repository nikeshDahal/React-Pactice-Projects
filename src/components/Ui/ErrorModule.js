import React from "react";
import Card from "./Card";
import Button from "./Button";
import errorModuleCss  from './Error.module.css'

const ErrorModule = (props) => {
  return (
    <div className={errorModuleCss.backdrop}>
    <Card className={errorModuleCss.modal}>
      <header className={errorModuleCss.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={errorModuleCss.content}>
        <p>{props.message}</p>
      </div>
      <footer className={errorModuleCss.actions}>
        <Button onClick={props.onConfirm}>okay</Button>
      </footer>
    </Card>
    </div>
  );
};
export default ErrorModule;
