import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  { id: 1, name: 'Snake Plant', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Peace Lily', price: 25, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Aloe Vera', price: 15, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Spider Plant', price: 18, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Monstera', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Fiddle Leaf Fig', price: 35, image: 'https://via.placeholder.com/150' },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Plant Shop</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
