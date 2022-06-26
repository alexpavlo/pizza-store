import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {Header} from './components/index'
import {Home, Cart} from './pages/index'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="wrapper">
      <Header />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/cart" element={<Cart/>} exact/>
        </Routes>
      </div>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
