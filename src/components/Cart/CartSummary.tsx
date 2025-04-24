import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CartSummary: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity);
  }, 0);

  const shipping = subtotal >= 100 ? 0 : 3;
  const tax = 3;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white p-6 rounded-lg border-neutral-200 mb-20 mt-10 border-2">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-neutral-500">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">Shipping</span>
          <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-neutral-200 pt-4">
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <button
          onClick={() => navigate('/checkout')}
          className="w-full bg-neutral-900 text-white py-3 px-6 cursor-pointer rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={() => navigate('/Listing')}
          className="w-full bg-white text-neutral-900 underline hover:text-neutral-500 cursor-pointer py-3 px-6 rounded-lg font-medium  transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartSummary; 