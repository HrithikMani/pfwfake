import "../css/Home.css"
import { Link } from "react-router-dom"
function Home(){
    return (
        <>
      

    <section className="homepage">
        <h1>Talent Acquisition Hub</h1>
        <img src="/assets/img1.jpg" alt="Talent Acquisition Hub" />
        <Link to="/Login">

        <button href="signin.html" className="get-started-button">Get Started</button>

        </Link>
       
    </section>


        </>
    )
}
export default Home