import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Import the CSS file for styling

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('There was an error fetching the product details!', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;