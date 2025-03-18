import './App.css'
import Home from '../src/pages/home'
import Login from '../src/pages/Login'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Listing from '../src/pages/Listing'
import ProductDetail from '../src/pages/ProductDetail'
import LoginUser from './components/Login/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
       <Route path='/Home' element={<Home />}/>
       <Route path='/Login' element={<LoginUser />}/>
       <Route path="/product/:id" element={<ProductDetail />} />
       <Route path='/Listing' element={<Listing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

