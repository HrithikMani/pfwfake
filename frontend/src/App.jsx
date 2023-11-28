
import React, { useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from "./pages/Home";

function App() {
  
 const HomePg = lazy(()=> import("./pages/Home"));

 const LoginPg = lazy(()=> import("./pages/Login"));

 
 const RegisterPg = lazy(()=> import("./pages/Register"));
 const Profile = lazy(()=> import("./pages/Profile"));

  return (
    
//     <Router>

  
//       <Routes>
// {/*       
//       <Route path='*' element={<NoPage />} /> */}

//       <Route path="/" ele={HomePg} />
      
//       {/* <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/profile" element={<Profile />} /> */}

      
//       </Routes>
//     </Router>
<Router>
<Suspense>
  <Routes>
  <Route path="/Login" Component={LoginPg} />
  
  <Route path="/register" Component={RegisterPg} />

  <Route path="/" Component={HomePg} />
  <Route path="/profile" Component={Profile} />


 
  </Routes>
</Suspense>
  </Router>

  )
}

export default App
