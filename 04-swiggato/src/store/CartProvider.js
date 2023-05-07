import CartContext from "./cart-content"
import { useReducer } from "react"

const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item)
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount
    console.log(updatedAmount)
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    }
  } else return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dipatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemFromCartHandeler = (item) => {
    dipatchCartAction({
      type: "ADD_ITEM",
      item: item,
    })
  }
  const removeItemFromCartHandler = (id) => {
    dipatchCartAction({
      type: "ADD_ITEM",
      id: id,
    })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemFromCartHandeler,
    removeItem: removeItemFromCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
