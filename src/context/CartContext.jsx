import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [order, setOrder] = useState([]);

  function addToOrder(item) {
    setOrder([...order, item]);
  }

  return (
    <CartContext.Provider value={{ order, addToOrder }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;