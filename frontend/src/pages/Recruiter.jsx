import { Link, json } from "react-router-dom"
import "../css/Profile.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Recruiter() {
    const [selectedElement, setSelectedElement] = useState(null);
    const handlesidebar = (event)=>{
        if(selectedElement){
            selectedElement.classList.remove("sideBarActive");
        }
        event.target.classList.add('sideBarActive');
        setSelectedElement(event.target);
        }

        useEffect(() => {
            const initialActiveElement = document.querySelector('.sideBarActive');
            setSelectedElement(initialActiveElement);
     
          }, []);

        

        const [jobtitle,setJobtitle] = useState("");
        const [jobdescription,setJobdescription] = useState("");
        const [jobskills,setJobskills] = useState("");
        const [joblocation,setJoblocation] = useState("");
        const [salary,setSalary] = useState("");
        const [selectedFile, setSelectedFile] = useState(null);
        

        const data = {
            "job_title":jobtitle,
            "job_description":jobdescription,
            "job_skills":jobskills,
            "job_location":joblocation,
            "salary":salary
        }

        const handleadd = async(e)=>{
            const uploadData = new FormData();
            uploadData.append("job_title",jobtitle);
            uploadData.append("job_description",jobdescription);
            uploadData.append("job_skills",jobskills,);
            uploadData.append( "job_location",joblocation);
            uploadData.append("salary",salary);
            uploadData.append("file",selectedFile);
            uploadData.append("user_id",localStorage.getItem("id"));

            e.preventDefault();
            axios.post('http://3.93.52.148/api/addjob',uploadData).then(data=>{
                alert("Job List updated")
            })

      
        }
        return (
    <div>
       <div className="logoProfileHeader">
        <h1>Talent Acquisition Hub</h1>
        </div>
        <div class="sidebar">
            <a  onClick={handlesidebar} href="#" id="listjob" className="sideBarActive"><i class="fa-solid fa-pen-to-square sideIcon"></i>Add Job</a>
            <Link to="/myjobs"><span  onClick={handlesidebar} href="#" id="listjob"><i class="fa-solid fa-pen-to-square sideIcon"></i>My Jobs</span></Link>
            {/* <a onClick={handlesidebar} data-toggle="modal" data-target="#MyAppplications"><i  class="fa-solid fa-bookmark sideIcon"></i>My Applications</a> */}
            {/* <a onClick={handlesidebar} data-toggle="modal" data-target="#MyNotifications"  href="#"><i class="fa-solid fa-bell sideIcon"></i>Notification</a> */}
            <Link to="/recruiter/profile"><span href="#"><i class="fa-solid fa-user sideIcon"></i>My Profile</span></Link>
            <Link to="/login"><span href="#"><i class="fa-solid fa-circle-xmark sideIcon"></i>Logout</span></Link>
    </div>










    <div className="content jcontent">
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-8'>
               
                    <div className='row jobDescHeader'>
                        <div className='col'>
                            <h1>Add Job</h1>
                        </div>
                    </div>
 
                  
                    <div className='row jobUpdateOuter'>
                       
                    <form class="form-group">
                         <input onChange={(e)=>setJobtitle(e.target.value)}  required  type="text" placeholder="Job title" className='form-control'/>
                         <textarea onChange={(e)=>setJobdescription(e.target.value)} required type="textarea" id="jobarea" placeholder="Job Description"  className='form-control' ></textarea>
                         <input onChange={(e)=>setJobskills(e.target.value)} required type="text" placeholder="Skills"  className='form-control' />
                          <input onChange={(e)=>setJoblocation(e.target.value)} required type="text" placeholder="Location"  className='form-control'  />
                          <input required onChange={(e)=>setSalary(e.target.value)} type="number" placeholder="Salary"  className='form-control'  />
                          <label >Upload thumbnail : </label><input   onChange={(e)=>setSelectedFile(e.target.files[0])} type="file"  className='form-control'  />
                         <button type="submit" onClick={handleadd} className="btn btn-primary">Add Job</button>
                    </form>
 
                    </div>
 
                    
 
            </div>
           
            </div>
         
 
        </div>
 
    </div>







    </div>

  )
}

export default Recruiter
