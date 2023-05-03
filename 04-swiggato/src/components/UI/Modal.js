import classes from "./Modal.module.css"
import ReactDOM from "react-dom"
const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>
}

const ModalOveraly = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOveraly>{props.children}</ModalOveraly>,
        portalElement
      )}
    </>
  )
}
export default Modal
