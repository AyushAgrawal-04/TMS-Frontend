import React from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage.jsx';
import ProductPage from './pages/ProductPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">TMS</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path='/product/:slug' element={<ProductPage/>}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
