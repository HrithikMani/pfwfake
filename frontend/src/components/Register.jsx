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

            axios.post('http://localhost:3000/register',data).then(response => {
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
        <section className="form-section">
        <h1 className="homepage-heading">Talent Acquisition Hub</h1>
            <div className={`successMsg ${isValid ? 'hide' : 'show'}`}>
            Registered Successfully
            

            </div>
        <form onSubmit={handleSubmit}>
            <input required value={firstname} onChange={(e)=>  setFirstname(e.target.value)}  type="text" placeholder="First Name" />
            <input required type="text" placeholder="Last Name"  value={lastname} onChange={(e)=>  setLastname(e.target.value)} />
            <input required type="email" placeholder="Email ID"  value={email} onChange={(e)=>  setEmail(e.target.value)}/>
            <input required type="password" placeholder="Password" value={password} onChange={(e)=>  setPassword(e.target.value)} />
            <button type="submit" className="cyan-button">Sign Up</button>
        </form>
        <p className="white-link">Already have an account?<Link to="/login"><span href="signin.html" className="white-link white-link-dec"> Sign in here </span></Link> </p>
    </section>
        </>
    )
}
export default Register