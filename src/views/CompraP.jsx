import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import './CompraP.css';
import { ProduCompra } from '../data/ProduCompra';
import Cart from '../components/Cart';

function CompraP() {
  const [cart, setCart] = useState([]); // Estado del carrito de compras
  const [showCart, setShowCart] = useState(false); // Estado para mostrar/ocultar el carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Función para mostrar/ocultar el carrito
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Mustra los datos del array ProduCompra
  const compraList = ProduCompra.map((v) => {
    return (
      <ProductList
        title={v.name}
        image={v.image}
        price={v.price}
        key={v.id}
        onAddToCart={() => addToCart(v)}
      />
    );
  });


  return (
    <>
    <div className='contenedor-flex'>
      <button className="btn1 btn btn-danger" onClick={toggleCart}>
        <h4 className='h4-Container'>Ver carrito de compras 🤗</h4>
      </button>
    </div>
      {showCart && <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />} {/* Muestra el carrito si showCart es true */}
      <div className='cd-Container'>
        {compraList} {/*Muestra los productos */}
      </div>
    </>
  );
}

export default CompraP









