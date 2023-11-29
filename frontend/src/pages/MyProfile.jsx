import React from 'react'
import "../css/Profile.css"
import { Link, useParams } from 'react-router-dom'
function MyProfile() {
    const handleUpload = ()=>{
       document.getElementById("fileInput").click();
    }
  
    const handleResumeUpload = ()=>{
        document.getElementById("fileResume").click();
     }
   
    return (
    <div>
      <div className="logoProfileHeader">
        <h1>Talent Acquisition Hub</h1>
    </div>

    <div class="sidebar">
        
         
            <Link to="/listjobs"><span href="#"><i class="fa-solid fa-circle-left sideIcon"></i>Back</span></Link>
            <Link to="/login"><span href="#"><i class="fa-solid fa-circle-xmark sideIcon"></i>Logout</span></Link>
    </div>
    <div className="content jcontent">
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-8'>
                
                    <div className='row jobDescHeader'>
                        <div className='col'>
                            <h1>My Profile</h1>
                        </div>
                    </div>


                    <div className='row jobUpdateOuter'>
                        
                    <form class="form-group">
                         <input required  type="text" placeholder="First Name" className='form-control'/>
                         <input required type="text" placeholder="Last Name"  className='form-control' />
                         <input required type="text" placeholder="Email ID"  className='form-control' />
                          <input required type="password" placeholder="Password"  className='form-control'  />
                         <button type="submit" className="btn btn-primary">Update</button>
                    </form>

                    </div>

                    <div className='row jobDescHeader'>
                        <div className='col'>
                            <h1>My Resume</h1>
                        </div>
                    </div>

                    <div className='row jobUpdateOuter'>
                    <h4>Resume.pdf</h4>

                    <form class="form-group">
                         <input type="file" id="fileResume" class="file-input" className='hide'/>
                         <button onClick={handleResumeUpload} type="submit" className="btn btn-primary uploadResume">Upload Resume</button>
                    </form>

                    </div>

            </div>
            <div className='col-4'>
                <div className="jobDescImg">
                    <img className="picLogo"src="data:image/png;base64,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" width={200} height={200}/>
                </div>
             
                <div className='row jobDescSection jobdescapplybtnouter'>
                        <div className='col'>
                            <input type="file" id="fileInput" class="file-input" className='hide'/>
                            <button onClick={handleUpload} type="file" className='btn btn-success'>Upload Picture</button>
                       
                        </div>
                       
                </div>
            </div>
            </div>
          

        </div>

    </div>
    </div>
  )
}

export default MyProfile
