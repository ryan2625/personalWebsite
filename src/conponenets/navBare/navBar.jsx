import { NavLink, useNavigate } from "react-router-dom"
import "./navbar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import {FaBars, FaTimes} from "react-icons/fa"
import React, {useState} from "react"
import { Transform } from "@mui/icons-material";
export const Navbar = () =>{

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    return<>
    <div className="navBar">
        <div className="header">
            <div className="firstNav">
            <div id="icon" className="icon">
                <DashboardIcon/>
            </div>
            <h2 id="name">Ryan Freas</h2>
        </div>
        </div>
        <div className="quickLinks">
            <ul>
                <NavLink className={"effect"} to="/">
                     <li>Home</li>
                </NavLink>
                <NavLink className={"effect"} to="/projects">
                    <li>Projects</li>
                </NavLink>
                <NavLink className={"effect"}  to="/contacts">
                    <li>Contact</li>
                </NavLink>

            </ul>
        </div>




        <div className= {click ? "mobileNavbar full" : "mobileNavbar cut"}>
        <div className="firstNav">
            <div id="icon" className="icon">
                <DashboardIcon/>
            </div>
            <h2 id="name">Ryan Freas</h2>
        </div>
        <div onClick={handleClick}
        className={click ? "menu-icon iconClosed" : "menu-icon iconOpen"}>
                <FaBars />
            </div>
            <ul className={click ? "navMenu active" : "nav-menu closed"}>
                <div className="mobileLinks">
            <FaTimes style={{transform: "scale(2.5)", margin: "1rem"}} 
                onClick={closeMobileMenu} />
                <li className="nav-item">
                     <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} 
                     onClick={closeMobileMenu}>
                        Home
                     </NavLink>
                </li>
                <li className="nav-item">
                     <NavLink to="/projects" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                     onClick={closeMobileMenu}>
                        Projects
                     </NavLink>
                </li>
                <li className="nav-item">
                     <NavLink to="/contacts" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                     onClick={closeMobileMenu}>
                        Contact
                     </NavLink>
                </li>
                </div>
            </ul>
            
            </div>
    </div>
    </>
}


        {/*}  
                <NavLink className={"effect"} to="/futureDev">
                    <li>Future Developments</li>
                </NavLink>
                <NavLink className={"effect"} to="/blog">
                    <li>Blog</li>
                </NavLink>
*/}