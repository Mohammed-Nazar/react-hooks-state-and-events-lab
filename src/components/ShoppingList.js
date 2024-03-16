import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selCatagory, setCatagory] = useState("All");
  

  function handleChange({target}) {
    setCatagory(target.value);
  }

  const filterItems = items.filter((i)=> selCatagory === "All" || i.category === selCatagory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
