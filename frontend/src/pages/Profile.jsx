import { Link } from "react-router-dom"
import "../css/Profile.css"
function Profile() {
    return (
        <>
    <div className="logoProfileHeader">
        <h1>Talent Acquisition Hub</h1>
    </div>

    <div class="sidebar">
            <a href="#" className="sideBarActive"><i class="fa-solid fa-pen-to-square sideIcon"></i>Job Listings</a>
            <a href="#"><i class="fa-solid fa-bookmark sideIcon"></i>My Applications</a>
            <a href="#"><i class="fa-solid fa-bell sideIcon"></i>Notification</a>
            <a href="#"><i class="fa-solid fa-user sideIcon"></i>My Profile</a>
            <Link to="/login"><span href="#"><i class="fa-solid fa-circle-xmark sideIcon"></i>Logout</span></Link>
    </div>
    <div className="content">
        content
    </div>
        </>
    )
}
export default Profile