import React from "react";
import { userState} from "react";

function Item({ name, category }) {
  const[inCart, sddCart] = userState(false)
  function addToCart(){
    addCart((inCart))=>!inCart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button onClick={addToCart}  className="add">{inCart ? "Remove from cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
