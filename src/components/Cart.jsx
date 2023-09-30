import React from 'react';
import './Cart.css';

function Cart({ cartItems, onRemoveFromCart }) {
  // Función para calcular el precio total del carrito
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras 🛒</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío. 😭</p>
      ) : (
        <div className='ListsStyle'>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => onRemoveFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotalPrice().toFixed(2)}</p> {/* Muestra el precio total con dos decimales */}
        </div>
      )}
    </div>
  );
}

export default Cart;

