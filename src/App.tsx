import './App.css'
import Home from './pages/home'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Listing from './pages/Listing'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Cart from './pages/cart'
import Checkout from './pages/Checkout'
import AfterPayment from './pages/AfterPayment'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/afterpayment" element={<AfterPayment />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

