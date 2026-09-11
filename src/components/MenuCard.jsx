function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <h2>{item.name}</h2>
      <p>{item.category}</p>
      <strong>₹{item.price}</strong>
    </article>
  );
}

export default MenuCard;