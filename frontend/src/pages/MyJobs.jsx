import React, { useEffect, useState } from 'react'
import "../css/Profile.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
function MyJobs() {
    const user_id = localStorage.getItem("id");
    const [data,setData] = useState([]);
   useEffect(() => {
    
       axios.get("http://3.93.52.148/api/jobs/user/"+user_id).then((data)=>{
           console.log(data.data)
           setData(data.data) ;         
       })
    
     }, []);
   

    return (
  
    <div>
      <div className="logoProfileHeader">
        <h1>Talent Acquisition Hub</h1>
    </div>

    <div class="sidebar">
        
         
    <Link to="/recruiter"><span href="#"><i class="fa-solid fa-circle-left sideIcon"></i>Back</span></Link>
            <Link to="/login"><span href="#"><i class="fa-solid fa-circle-xmark sideIcon"></i>Logout</span></Link>
    </div>
    <div className="content jcontent tablec">
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-12'>
                
            
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Job Title</th>
      <th scope="col">Applicant Name</th>
      <th scope="col">Applicant Email</th>
      <th scope="col">Resume</th>
    </tr>
  </thead>
 
    {
      (data.length == 0) ? (<h1>No Jobs are currently been applied</h1>):(
        <tbody>
        {
          data.map((item,index)=>(
            <tr>
            <th scope="row">{index+1}</th>
            <td>{item.job_title}</td>
            <td>{item.firstname}</td>
            <td>{item.email}</td>
           <Link to=""> <td>{item.resume}</td></Link>
           
          </tr>
      
          ))
        }
         </tbody>
      )
    }
    
    
    
 
</table>

            </div>
            
            </div>
          

        </div>

    </div>
    </div>
  
  
    )
}

export default MyJobs
