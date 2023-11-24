import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import Products from './Products';
import CartPage from './CartPage';
import NotFound from './NotFound';

export default function Routess() {
  const [cart2,setCart2]=useState()
  return (
    <div>
      <Routes>
        <Route index element={<Products />} />
        <Route path="Purchases" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
