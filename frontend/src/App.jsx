

import './App.css'
import Home from './components/Home';
import React, { useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NoPage from './components/NoPage';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import ApiService from './api/testService';
function App() {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    ApiService.fetchData("")
      .then((data) => {
        setData(data)
        console.log(data)
      })
      .catch(error => console.error('Error:', error));

      
  }, []);

  return (
    
    <Router>
      <NavBar></NavBar>
  
      <Routes>
      
      <Route path='*' element={<NoPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      </Routes>
    </Router>
  )
}

export default App
