import React, { useState } from "react";
import './style.css'

const AddToCartButton = () => {

  const [added, setAdded] = useState(false)
  
  const handleAddToCart = () => {
    setAdded(!added)
  }

  return (
    <div className="add-to-cart-btn">
      <button onClick={handleAddToCart} className={added ? "added" : ""}>
        {added ? "adicionado" : "adicionar"}
      </button>
    </div>
  )
}

export default AddToCartButton;