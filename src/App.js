import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TitlePage from './components/TitlePage';
import ImagePage from './components/ImagePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/image/:id" element={<ImagePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;