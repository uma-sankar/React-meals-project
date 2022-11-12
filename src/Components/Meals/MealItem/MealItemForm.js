import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const inputRef = useRef();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    ) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    props.onAddItem(+enteredAmount);
  };
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isFormValid && <p>Please enter value between 1-5</p>}
    </form>
  );
};

export default MealItemForm;
