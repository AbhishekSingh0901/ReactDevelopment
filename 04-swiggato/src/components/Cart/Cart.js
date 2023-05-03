import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
const Cart = (props) => {
  const cartItems = [{ id: "c1", itemName: "Sushi", price: 12.99 }].map(
    (item) => {
      return <li>{item.itemName}</li>
    }
  )
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
