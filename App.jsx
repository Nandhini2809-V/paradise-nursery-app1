import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import AboutUs from './AboutUs';
import './App.css';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>🌿 Paradise Nursery</h1>
        <AboutUs />
        <ProductList />
        <ShoppingCart />
      </div>
    </Provider>
  );
}

export default App;
