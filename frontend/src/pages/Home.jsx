import "../css/Home.css"
import { Link } from "react-router-dom"
function Home(){
    const handleSeeker = ()=>{
        localStorage.setItem("type",0);
    }
    const handleRecuiter = ()=>{
        localStorage.setItem("type",1);
    }
    return (
        <>
  
    <section className="homepage">
        <div className="gettingStartedLogo">
        <h1>Talent Acquisition Hub</h1>
        </div>
        <img src="/assets/img1.jpg" alt="Talent Acquisition Hub" />
        <Link to="/Login">

        <button  onClick={handleSeeker} className="get-started-button">Are you a job seeker ?</button>

        </Link>

        <Link to="/Login">

            <button onClick={handleRecuiter}  className="get-started-button">Are you a recruiter?</button>

        </Link>
       
    </section>


        </>
    )
}
export default Home