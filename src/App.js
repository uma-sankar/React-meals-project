import React, { useState } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  const onOrderingHandler = () => {
    console.log("Ordering....!");
  };

  return (
    <CartProvider>
      {showCart && (
        <Cart
          onHideHandler={hideCartHandler}
          onOrderHandler={onOrderingHandler}
        />
      )}
      <Header onShowHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
