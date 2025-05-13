import { useState } from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Home from './pages/Home';
import Error from './pages/Error';
import Signup from './pages/Signup';
import PlacedOrder from './pages/PlacedOrder';
import MyOrder from './pages/MyOrder';

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/orders' element={<MyOrder/>}/>
      <Route path='/placeOrder' element={<PlacedOrder/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
