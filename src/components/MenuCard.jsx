function MenuCard({ item, addToOrder }) {
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