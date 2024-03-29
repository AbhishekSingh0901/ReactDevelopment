import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem"
import Card from "../UI/Card"
import MealImages from "./MealImages"
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    src: MealImages[0],
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    src: MealImages[1],
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    src: MealImages[2],
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    src: MealImages[3],
  },
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        src={meal.src}
        key={meal.id}
      ></MealItem>
    )
  })

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
