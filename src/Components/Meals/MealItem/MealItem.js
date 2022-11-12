import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
import CartContext from "../../../store/CartContext";
const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const onAddItemHandler = (amount) => {
    const meal = {
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: amount,
    };
    cartContext.addItem(meal);
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>
          ${Number(props.meal.price).toFixed(2)}
        </div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddItem={onAddItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
