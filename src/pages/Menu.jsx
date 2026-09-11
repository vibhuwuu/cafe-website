import menu from "../data/menu";
import MenuCard from "../components/MenuCard";

function Menu() {
  return (
    <main>
      <h1>Our Menu ☕</h1>

      <div className="menu-grid">
        {menu.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </main>
  );
}

export default Menu;