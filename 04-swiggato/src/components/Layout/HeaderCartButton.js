import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-content"

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numberOfCArtItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfCArtItems}</span>
    </button>
  )
}

export default HeaderCartButton
