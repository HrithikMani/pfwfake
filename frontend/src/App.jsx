
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
 const profile = lazy(()=> import("./pages/MyProfile"));
 const recruiter = lazy(()=> import("./pages/Recruiter"));
 const myorofrec = lazy(()=> import("./pages/MyProfileRecruiter"));
 
 const review = lazy(()=> import("./pages/Review"));
 const myjobs = lazy(()=> import("./pages/MyJobs"));
   
 return (
    

<Router>
<Suspense>
  <Routes>
  <Route path="/Login" Component={LoginPg} />
  
  <Route path="/register" Component={RegisterPg} />

  <Route path="/" Component={HomePg} />
  <Route path="/listjobs" Component={listjobs} />
  <Route path="/myprofile" Component={profile} />
  <Route path="/job/:jobid" Component={job} />
  <Route path="/review/:jobid" Component={review} />
  
  

  <Route path="/recruiter" Component={recruiter} />
  <Route path="/recruiter/profile" Component={myorofrec} />
  <Route path="/myjobs" Component={myjobs} />
  
  
  


 
  </Routes>
</Suspense>
  </Router>

  )
}

export default App
