import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddItemToCartHandler = (item) => {
    const addedItem = {
      ...item,
      amount: 1,
    };
    cartCtx.addItem(addedItem);
  };
  const onRemoveItemFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((cartItem) => {
        return (
          <CartItem
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            amount={cartItem.amount}
            onAdd={onAddItemToCartHandler.bind(null, cartItem)}
            onRemove={onRemoveItemFromCartHandler.bind(null, cartItem.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onHideHandler={props.onHideHandler}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideHandler}>
          Close
        </button>
        <button className={styles.button} onClick={props.onOrderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
