import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImagePage from './components/ImagePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ImagePage coverPage={true} />} />
          <Route path="/image/:id" element={<ImagePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;