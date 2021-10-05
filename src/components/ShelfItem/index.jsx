import React from "react";

import AddToCartButton from "../AddToCartButton";
import WishListButton from "../WishlistButton";

import formatValue from '../../utils/formatCurrency';
import './style.css'

const ShelfItem = (props) => {

  const {
    id,
    image,
    name,
    price,
    listPrice,
    installments
  } = props.product

  console.log(image, name, price, listPrice, installments);
  return (
    <div className="shelf-item">
      <div className="prodcut-image">
        <img src={image} alt="" />
        <WishListButton/>
      </div>
      <div className="product-name">
        <h2 className="name">{name}</h2>
      </div>
      <div className="product-price">
        <p className="price">{formatValue(price)}</p>
        <p className="list-price">{formatValue(listPrice)}</p>
        <p className="product-installments">
          <span>em até</span> {installments}x de {formatValue(listPrice/installments)} <span>sem juros</span>
        </p>
      </div>
      <AddToCartButton productId={id}/>
    </div>
  )
}

export default ShelfItem