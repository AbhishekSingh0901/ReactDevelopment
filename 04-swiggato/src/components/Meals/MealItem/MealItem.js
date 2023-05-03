import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div className={classes.mealItem}>
        <div>
          <img className={classes.image} src={props.src} alt={props.name} />
        </div>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div className={classes.form}>
        <MealItemForm id={props.id} />
      </div>
    </li>
  )
}
export default MealItem
