import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedCartItems = [];
    const updatedTotalAmount =
      state.totalAmount + +action.item.price * +action.item.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (existingItemIndex !== -1) {
      let updatedCartItem = {
        ...state.items[existingItemIndex],
        amount: state.items[existingItemIndex].amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updatedCartItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }

    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const updatedTotalAmount = state.totalAmount - state.items[itemIndex].price;
    const updatedItem = {
      ...state.items[itemIndex],
      amount: state.items[itemIndex].amount - 1,
    };
    let updatedCartItems = [...state.items];
    if (updatedItem.amount === 0) {
      updatedCartItems.splice(itemIndex, 1);
    } else {
      updatedCartItems[itemIndex] = updatedItem;
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartReducer] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartReducer({
      type: "ADD_ITEM",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartReducer({
      type: "REMOVE_ITEM",
      id: id,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
