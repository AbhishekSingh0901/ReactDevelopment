import { useContext } from "react"
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../store/cart-content"
import CartItem from "./CartItem"

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItem = cartCtx.items.length > 0

  const cartItemRemoveHandeler = (id) => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandeler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandeler.bind(null, item.id)}
        onAdd={cartItemAddHandeler.bind(null, item)}
      />
    )
  })
  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-items"]}>{cartItems}</div>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
