import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import menus from '../../Images/Icons/Menus.svg';
import mais from '../../Images/Icons/Add.svg';
import remove from '../../Images/close.svg'

interface CartItem {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  color: string;
  size: string;
  quantity: number;
}

const CartItems: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleQuantityChange = (itemId: number, increment: boolean) => {
    dispatch(updateQuantity({ id: itemId, increment }));
  };

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-neutral-900 mb-2 mt-50">Your cart is empty</h2>
        <p className="text-neutral-500">Add some products to your cart and they will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 font-[Inter] mt-10 w-200 ml-32">
      <h1 className='font-[Inter] font-semibold text-neutral-900 border-b-2 border-neutral-200 pb-4'>Your cart</h1>
      {cartItems.map((item: CartItem) => (
        <div key={item.id} className="flex items-center mt-10 gap-4 p-4 bg-white rounded-lg ">
          <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover p-2 bg-neutral-100" />
          <div className="flex-1  items-center gap-12">
            <h3 className="font-medium text-neutral-900">{item.name}</h3>
            <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-500">Color: </span>
              <div 
                className="w-6 h-6 rounded-full border-2 border-neutral-200"
                style={{ backgroundColor: item.color.toLowerCase() }}
              />
              <img src={menus} alt="Color" />
              <span className="text-sm text-neutral-500">Size: {item.size}</span>
            </div>
          </div>
          <p className="font-medium text-neutral-900 mt-2 mr-10">${item.price}</p>
          <div className="flex items-center gap-3 border-2 border-neutral-200 rounded-md pt-2 pb-2 pl-1 pr-1">
            <button
              onClick={() => handleQuantityChange(item.id, false)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100"
            >
              <img src={menus} alt="Decrease" />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, true)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100"
            >
              <img src={mais} alt="Increase" />
            </button>
          </div>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            <img src={remove} className='hover:bg-neutral-100 p-2 rounded-2xl' alt="" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems; 