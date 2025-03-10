import './App.css'
import Home from '../src/pages/home'
import Login from '../src/pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/Login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

