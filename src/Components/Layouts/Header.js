import React from "react";
import styles from "./Header.module.css";
import mealsImage from "./../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onClick={props.onShowHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Delicious foods" />
      </div>
    </React.Fragment>
  );
};

export default Header;
