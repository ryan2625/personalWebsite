import { NavLink, useNavigate } from "react-router-dom"
import "./navbar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
export const Navbar = () =>{
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
                <NavLink className={"effect"} to="/futureDev">
                    <li>Future Developments</li>
                </NavLink>
                <NavLink className={"effect"} to="/blog">
                    <li>Blog</li>
                </NavLink>
            </ul>
        </div>
    </div>
    </>
}