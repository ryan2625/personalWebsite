import { NavLink, useNavigate } from "react-router-dom"
import "./navbar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import {FaBars, FaTimes} from "react-icons/fa"
import React, {useState} from "react"
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



        <div onClick={handleClick}
        className={click ? "menu-icon iconClosed" : "menu-icon iconOpen"}>
                {click ? <FaTimes /> : <FaBars />}
            </div>

        <div className="mobileNavbar">
            <ul className={click ? "navMenu active" : "nav-menu closed"}>
                
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