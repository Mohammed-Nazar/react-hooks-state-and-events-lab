import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  function addToCart() {
    setInCart(!inCart);
  }

  const inCartClass = inCart ? "in-cart" : "";
  

  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={`add ${!inCart ?"" :"remove"}`} onClick={addToCart}>{inCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
