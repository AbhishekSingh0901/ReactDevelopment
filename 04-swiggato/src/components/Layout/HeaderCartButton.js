import { useContext, useEffect, useState } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-content"

const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false)
  const cartCtx = useContext(CartContext)
  const numberOfCArtItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ""}`

  useEffect(() => {
    if (cartCtx.items.length === 0) return
    setBtnHighlight(true)
    const timer = setTimeout(() => {
      setBtnHighlight(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [cartCtx.items])

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfCArtItems}</span>
    </button>
  )
}

export default HeaderCartButton
