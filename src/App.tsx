import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/Header.css';
import Header from './assets/Header.tsx';
import HomePage from './assets/HomePage.tsx'; 
import Cart from './assets/Cart';


function App() {
  return (
    <Router>
      
        <div className="App">
          <Header title="Bazarzin" subTitle="With TypeScript" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      
    </Router>
  );
}

export default App;