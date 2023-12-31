import { useState } from "react"
import "../css/Login.css"
import { Link } from "react-router-dom"
import axios from 'axios';
function Register(){
    
    const [ermsg,setErmsg] = useState("");

        const [email,setEmail] = useState("")
        const [firstname,setFirstname] = useState("")
        const [lastname,setLastname] = useState("")
        const [password,setPassword] = useState("")    

        const [isValid,setIsValid] = useState(true)


      const handleSubmit = (e) => {
        e.preventDefault();
        var data = {email:email,firstname:firstname,lastname:lastname,password:password}

            if(localStorage.getItem("type")=="1"){
                axios.post('http://3.93.52.148/api/recruiter/register',data).then(response => {
                console.log(response)
                setIsValid(false)
                setEmail("")
                setFirstname("")
                setLastname("")
                setPassword("")
            })
            return;
            }


            axios.post('http://3.93.52.148/api/register',data).then(response => {
                console.log(response)
                setIsValid(false)
                setEmail("")
                setFirstname("")
                setLastname("")
                setPassword("")
            })
            .catch(error => {
                console.error('Error sending data:', error);
           });



      };

    return (
        <>
        <div className="gettingStartedLogo">
        <h1>Talent Acquisition Hub</h1>
        </div>
        <section className="form-section divLoginOuter">
            <h1 className="homepage-heading">Talent Acquisition Hub</h1>
            <div className={`successMsg ${isValid ? 'hide' : 'show'}`}>
            Registered Successfully
            </div>

        <form onSubmit={handleSubmit}>
            <input required value={firstname} onChange={(e)=>  setFirstname(e.target.value)}  type="text" placeholder="First Name" />
            <input required type="text" placeholder="Last Name"  value={lastname} onChange={(e)=>  setLastname(e.target.value)} />
            <input required type="text" placeholder="Email ID"  value={email} onChange={(e)=>  setEmail(e.target.value)}/>
            <input required type="password" placeholder="Password" value={password} onChange={(e)=>  setPassword(e.target.value)} />
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        <div className="loginFoot">
        <p className="white-link">Already have an account?<Link to="/Login"><span className="white-link white-link-dec"> Sign in here </span></Link> </p>
        </div>
    </section>
        </>
    )
}
export default Register