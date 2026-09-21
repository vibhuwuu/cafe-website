import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [order, setOrder] = useState([]);

  function addToOrder(item) {
    const existingItem = order.find(
      (orderItem) => orderItem.id === item.id
    );

    if (existingItem) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? {
                ...orderItem,
                quantity: orderItem.quantity + 1
              }
            : orderItem
        )
      );
    } else {
      setOrder([
        ...order,
        {
          ...item,
          quantity: 1
        }
      ]);
    }
  }

  function increaseQuantity(id) {
    setOrder(
      order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setOrder(
      order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter((item) => item.quantity > 0)
    );
  }
  function removeFromOrder(id) {
    setOrder(
      order.filter((item) => item.id !== id)
    );
  }

  return (
    <CartContext.Provider
      value={{
        order,
        addToOrder,
        increaseQuantity,
        decreaseQuantity,
        removeFromOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;