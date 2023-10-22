

import './App.css'
import Home from './components/Home';
import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NoPage from './components/NoPage';
import Login from './components/Login';
function App() {
  
  return (
    <Router>
      <Routes>
      
      <Route path='*' element={<NoPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      </Routes>
    </Router>
  )
}

export default App
