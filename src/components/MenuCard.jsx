import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function MenuCard({ item }) {
  const { addToOrder } = useContext(CartContext);

  return (
    <article className="menu-card">
      <h2>{item.name}</h2>

      <p>{item.category}</p>

      <strong>₹{item.price}</strong>

      <br />

      <button onClick={() => addToOrder(item)}>
        Add to Order
      </button>
    </article>
  );
}

export default MenuCard;