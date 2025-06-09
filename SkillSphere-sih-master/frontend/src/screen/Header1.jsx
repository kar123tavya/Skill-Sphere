import react from "react";
import Logo from "../assets/logo.svg";
import {Link} from "react-router-dom";
function Header1(){
    return(
        <div>
            <header className="p-3 text-bg-light " styles={{borderBottom: "2px solid black"}}>

                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/home" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src={Logo} alt="logo" className="mr-2" alt="logo" /><span className="nav-title">SkillSphere</span>
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/home" className="nav-link px-2 text-black">Home</Link></li>
                            <li><Link to="/about" className="nav-link px-2 text-black">About us</Link></li>

                        </ul>


                        <div className="text-end">
                            <button type="button" className="btn btn-outline-dark me-2">Login</button>
                            <button type="button" className="btn btn-dark">Sign-up</button>
                        </div>
                    </div>
                </div>
                <hr />
            </header>

        </div>
    )
}

export default Header1;

