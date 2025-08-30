import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/image/:id" element={<MenuPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;