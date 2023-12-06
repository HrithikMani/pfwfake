import React, { useEffect, useState } from 'react'
import "../css/Profile.css"
import { Link, useParams } from 'react-router-dom'
function Review() {
    
    const { jobid } = useParams();
    
    const [data,setData] = useState(null);
    const [jobapplied,setJobApplied] = useState(false);
    const [msg,setMsg] = useState("");
    useEffect(() => {
       
        fetch("http://3.93.52.148/api/job/"+jobid).then(response => response.json()).then(data =>{
            setData(data[0])
        })
        
        fetch("http://3.93.52.148/api/jobs/applied/"+localStorage.getItem("id")+"/"+jobid).then(response => response.json()).then(data =>{
            if(data.applied == true){
                setJobApplied(true)
            }
        })
        setMsg("Application received")
      }, []);
 
      const withdraw = (e)=>{
        e.preventDefault();
        fetch("http://3.93.52.148/api/jobs/applied/"+localStorage.getItem("id")+"/"+jobid,{method:"DELETE"}).then(response => response.json()).then(data =>{
            if(data.message){
                alert(data.message);
                setJobApplied(false)
            }
        })
      }

      const apply = (e)=>{
        e.preventDefault();
        
        fetch("http://3.93.52.148/api/jobs/applied",{method:"POST",headers: {
            'Content-Type': 'application/json',
          },body: JSON.stringify( {"user_id":localStorage.getItem("id"),"job_id":jobid}) }).then(response => response.json()).then(data =>{
            if(data){
                
                setJobApplied(true)
            }
        })
      }


  return (
    <>
    <div className="logoProfileHeader">
        <h1>Talent Acquisition Hub</h1>
    </div>

    <div class="sidebar">
        
         
            <Link to="/listjobs"><span href="#"><i class="fa-solid fa-circle-left sideIcon"></i>Back</span></Link>
            <Link to="/login"><span href="#"><i class="fa-solid fa-circle-xmark sideIcon"></i>Logout</span></Link>
    </div>


    {(data == null) ? (
        <p>Loading...</p>
      ) : (
        


        <div className="content jcontent">
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-8'>
                
                    <div className='row jobDescHeader'>
                        <div className='col'>
                            <h1>{data.job_title}</h1>
                        </div>
                    </div>

                    <div className='row jobDescSection'>
                        <div className='col'>
                            <h3>Job Description</h3>
                            <span>
                            <p>
                            {data.job_description}
                            </p>
                        </span>
                        </div>
                      
                    </div>

                    <div className='row jobDescSection'>
                        <div className='col'>
                            <h3>Skills</h3>
                            <p>
                            {data.skills}

                            </p>
                        </div>
                       
                    </div>



            </div>
            <div className='col-4'>
                <div className="jobDescImg">
                    <img className="picLogo" src={"http://3.93.52.148/api/uploadjobpic/"+data.pic} width={200} height={200}/>
                </div>
                <div className='row jobDescSection'>
                        <div className='col'>
                            <h4>Location : <span>{data.location}</span> </h4>
                            <h4>Job Id : <span>{data.job_id}</span> </h4>
                            <h4>Pay : <span>${data.salary}</span> </h4>
                       
                        </div>
                       
                </div>
                <div className='row jobDescSection jobdescapplybtnouter'>
                        <div className='col'>

                        <h1>Status : {msg}</h1>
                        </div>
                       
                </div>
            </div>
            </div>
          

        </div>

    </div>


      )}

   
        </>
  )
}

export default Review
