import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', marginRight: '15px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>
          Quantity: 
          <input 
            type="number" 
            value={item.quantity} 
            min="1"
            onChange={handleQuantityChange}
            style={{ width: '60px', margin: '0 10px' }}
          />
        </p>
      </div>
      <button onClick={handleRemove} style={{ backgroundColor: 'red', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px' }}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
