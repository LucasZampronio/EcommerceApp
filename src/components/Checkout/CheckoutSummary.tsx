import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { clearCart } from '../../store/slices/cartSlice';

const CheckoutSummary: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity);
  }, 0);

  const shipping = subtotal >= 100 ? 0 : 3;
  const tax = 3;
  const total = subtotal + shipping + tax;

  const handleEditCart = () => {
    navigate('/cart');
  };

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    navigate('/afterpayment');
  };

  return (
    <div className="w-full max-w-md p-6 bg-white border-neutral-200 border-l-2 pl-20 ">
      <div className="  justify-between mb-6">
        <h2 className="text-xl font-semibold text-neutral-900">Your Order</h2>
        <button
          onClick={handleEditCart}
          className="text-neutral-600 border-2 ml-61 mt-10 mb-10 border-neutral-200 pt-3 pb-3 pl-5 pr-5 rounded-lg hover:text-neutral-900 text-sm font-medium cursor-pointer"
        >
          Edit Cart
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-neutral-200 pt-4">
          <div className="flex justify-between">
            <span className="font-semibold text-neutral-900">Total</span>
            <span className="font-semibold text-neutral-900">${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-neutral-900 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity mt-6 cursor-pointer"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary; 