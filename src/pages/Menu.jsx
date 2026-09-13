import {useState} from "react";
import menu from "../data/menu";
import MenuCard from "../components/MenuCard";

function Menu() {
  const[category, setCategory] = useState('All');
  const filteredMenu =
    category === "All"
      ? menu
      : menu.filter(item => item.category === category);
  return (
    <main>
      <h1>Our Menu ☕</h1>

      <div className="filter-buttons">
        <button 
          className={category === "All" ? "active" : ""}
          onClick={()=> setCategory("All")}
        >
          All
        </button>
        <button 
          className={category === "Coffee" ? "active" : ""}
          onClick={()=> setCategory("Coffee")}
        >
          Coffee
        </button>
        <button 
          className={category === "Tea" ? "active" : ""}
          onClick={()=> setCategory("Tea")}
        >
          Tea
        </button>
        <button 
          className={category === "Dessert" ? "active" : ""}
          onClick={()=> setCategory("Dessert")}
        >
          Dessert
        </button>
      </div>
      
      <div className="menu-grid">
        {filteredMenu.map((item) => (
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