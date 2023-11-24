import React, { useState } from 'react'

export default function List({ products, addCart }) {
  return (
    <div className="prd">
      {products.map((prd) => (
        <div key={prd.id}>
          <img src={prd.images[0]} alt={prd.title} />
          <h3>{prd.title}</h3>
          <h4>$ {prd.price}</h4>
          <button onClick={() => addCart(prd)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
