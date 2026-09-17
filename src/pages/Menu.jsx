import { useState, useContext } from "react";
import menu from "../data/menu";
import MenuCard from "../components/MenuCard";
import { CartContext } from "../context/CartContext.jsx";

function Menu() {
  const [category, setCategory] = useState("All");

  const { order, addToOrder } = useContext(CartContext);

  const filteredMenu =
    category === "All"
      ? menu
      : menu.filter((item) => item.category === category);

  return (
    <main>
      <h1>Our Menu ☕</h1>

      <div className="filter-buttons">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Coffee")}>
          Coffee
        </button>

        <button onClick={() => setCategory("Tea")}>
          Tea
        </button>

        <button onClick={() => setCategory("Dessert")}>
          Dessert
        </button>
      </div>

      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToOrder={addToOrder}
          />
        ))}
      </div>

      <h2>Your Order</h2>

      {order.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}
    </main>
  );
}

export default Menu;