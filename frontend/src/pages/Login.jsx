import { useState } from "react"
import "../css/Login.css"
import { Link } from "react-router-dom"
import axios from 'axios';
function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [ermsg,setErmsg] = useState("");

    const [isValid, setIsValid] = useState(true);
   const  handlelogin = (e) =>{
        e.preventDefault();
        if(email.length == 0){
            setErmsg("Please enter email");
            setIsValid(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(email));
        if(isValid === false){
            setErmsg("Invalid email");
            return;
        }

        if(password.length == 0){
            setErmsg("Please enter password");
            setIsValid(false);
            return;
        }
        var dataB = {email:email,password:password}
        axios.post('http://localhost:3000/login',dataB)
            .then(response => {
                    if(response.data.res === 0){
                        setErmsg("Invalid Credentials");
                        setIsValid(false);
                       
                    }else{
                       window.location = "/listjobs";
                    }
             })    
        .catch(error => {
             console.error('Error sending data:', error);
        });
        
    }

    return (
        <>
 
    
        <div className="gettingStartedLogo">
        <h1>Talent Acquisition Hub</h1>
        </div>
        <section className="form-section divLoginOuter">
        <form>
            <div className={`errorMsg ${isValid ? 'hide' : 'show'}`}>{ermsg}</div>
            <input value={email}  onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Username/Email" required />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" required />
            <button type="button" onClick={handlelogin} className="cyan-button btn btn-primary">Sign In</button>
        </form>
        <div className="loginFoot">

        <p >Don't have an account? <Link to="/register"><span className="white-link white-link-dec">Sign up here</span> </Link> </p>

        </div>
        
    </section>
        </>
    )
}
export default Login