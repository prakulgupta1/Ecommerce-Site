
import React, { useState } from 'react';


function Cart() {

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product._id !== productId));
  };

  const sampleProducts = [
    { _id: '1', name: 'Product 1', price: 10 },
    { _id: '2', name: 'Product 2', price: 20 },
    { _id: '3', name: 'Product 3', price: 30 }
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(product => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => removeFromCart(product._id)}>Remove</button> {/* Button to remove the product from the cart */}
        </div>
      ))}
      <p>Total: ${cart.reduce((total, product) => total + product.price, 0)}</p> {/* Calculate and display the total price */}
      
      <h2>Add Products</h2>
      {sampleProducts.map(product => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Button to add the product to the cart */}
        </div>
      ))}
    </div>
  );
}

export default Cart;