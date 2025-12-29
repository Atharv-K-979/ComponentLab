import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComponentMaker from './pages/ComponentMaker';
import About from './pages/About';
import ReadMore from './pages/ReadMore';
import NoPage from './pages/NoPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component-maker" element={<ComponentMaker />} />
          <Route path="/about" element={<About />} />
          <Route path="/read-more" element={<ReadMore />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App