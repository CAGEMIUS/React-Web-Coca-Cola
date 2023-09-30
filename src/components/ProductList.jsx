import React from 'react';
import './ProductList.css';

function ProductList({ title = 'Titulo de la marca', image, onAddToCart, price }) {
  return (
    <>
      <div className="card">
        {image && <img className='img2' src={image} alt={title} />}
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{price}</h5>
        <button className="btn btn-danger" onClick={onAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}

export default ProductList

