import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Load initial state from localStorage
const loadCartState = (): CartState => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return { items: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading cart state:', err);
    return { items: [] };
  }
};

const initialState: CartState = loadCartState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id && 
                item.color === action.payload.color && 
                item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      // Save to localStorage after adding item
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      // Save to localStorage after removing item
      localStorage.setItem('cart', JSON.stringify(state));
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; increment: boolean }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        if (action.payload.increment) {
          item.quantity += 1;
        } else {
          item.quantity = Math.max(1, item.quantity - 1);
        }
        // Save to localStorage after updating quantity
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.items = [];
      // Clear localStorage when clearing cart
      localStorage.removeItem('cart');
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 