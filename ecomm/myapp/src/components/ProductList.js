import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Import the CSS file for styling

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {filteredProducts.map(product => (
        <div key={product._id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`} className="details-link">View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;