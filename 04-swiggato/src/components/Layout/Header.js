import { Fragment } from "react"
import mealsImage from "../../assets/foodHeader.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SWIGGATO</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of food"></img>
      </div>
    </Fragment>
  )
}

export default Header
