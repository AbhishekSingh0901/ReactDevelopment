import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onConfirm}
      className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-50"
    ></div>
  );
};

const Overlay = (props) => {
  return (
    <Card className="fixed top-1/2 left-1/2 -translate-y-full -translate-x-1/2 z-50 overflow-hidden max-w-2xl w-4/5">
      <header className="bg-gradient-to-r from-red-400 to-red-600 px-2 rounded-t-xl py-2">
        <h2 className="text-white text-center font-medium text-xl md:text-2xl">
          {props.title}
        </h2>
      </header>
      <div>
        <p className="mb-24 mx-2 mt-10 text-center">{props.message}</p>
      </div>
      <footer className="fixed text-center mb-3 mr-3 bottom-0 right-0">
        <Button onClick={props.onConfirm}>okay!</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
