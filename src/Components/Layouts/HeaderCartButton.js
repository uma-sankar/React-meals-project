import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [isCartButtonBump, setIsCartButtonBump] = useState(false);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsCartButtonBump(true);
    const timer = setTimeout(() => {
      setIsCartButtonBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const itemsInCart = items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    isCartButtonBump ? styles.bump : ""
  }`;
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
