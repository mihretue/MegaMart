import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Details about product {productId}</p>
    </div>
  );
};

export default ProductDetailPage;
