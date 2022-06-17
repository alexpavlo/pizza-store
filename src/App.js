import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Header} from './components/index'
import {Home, Cart} from './pages/index'



function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      setPizzas(data.pizzas)
    });
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
      <div className="wrapper">
      <Header />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home items={pizzas} />} exact/>
        <Route path="/cart" element={<Cart/>} exact/>
        </Routes>
      </div>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
