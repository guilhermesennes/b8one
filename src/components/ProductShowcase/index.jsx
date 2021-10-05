import React from "react";
import ShelfItem from "../ShelfItem";
import { products } from "../../services/products";

import './style.css'

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      {products.map((product) => {
        console.log(product);
        return (
          <ShelfItem product={product}/>
        )
      })}
    </div>
  )
}

export default ProductShowcase