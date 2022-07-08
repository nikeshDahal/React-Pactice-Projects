import React from "react";
import Card from "./Card";
import Button from "./Button";
import errorModuleCss from "./Error.module.css";
import ReactDOM from "react-dom" 

const Backdrop = (props) => {
  return(<div className={errorModuleCss.backdrop} />);
};
const Overlay = (props) => {
  return (
    <Card className={errorModuleCss.modal}>
      <header className={errorModuleCss.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={errorModuleCss.content}>
        <p>{props.message}</p>
      </div>
      <footer className={errorModuleCss.actions}>
        <Button onClick={props.onClick}>okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModule = (props) => {
  return(
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop/>,document.getElementById('Backdrop'))}
    {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onClick={props.onConfirm}/>,document.getElementById('Model-Overlay'))}
  </React.Fragment>
  )
};
export default ErrorModule;
