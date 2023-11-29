
import React, { useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from "./pages/Home";

function App() {
  
 const HomePg = lazy(()=> import("./pages/Home"));

 const LoginPg = lazy(()=> import("./pages/Login"));

 
 const RegisterPg = lazy(()=> import("./pages/Register"));
 const listjobs = lazy(()=> import("./pages/ListJobs"));
 const job = lazy(()=> import("./pages/Job"));

  return (
    

<Router>
<Suspense>
  <Routes>
  <Route path="/Login" Component={LoginPg} />
  
  <Route path="/register" Component={RegisterPg} />

  <Route path="/" Component={HomePg} />
  <Route path="/listjobs" Component={listjobs} />
  
  <Route path="/job/:jobid" Component={job} />
  
  



 
  </Routes>
</Suspense>
  </Router>

  )
}

export default App
