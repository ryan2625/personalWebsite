import "./projects.css"
import { NavLink } from "react-router-dom"
export const Projects = () =>{
    return <div className="containerProjects">
            <NavLink className={"navLinkProjects"} to="/coding">
                <div className="coding">
                    <h1 className="headings">Coding</h1>
                </div>
                </NavLink>
                <NavLink className={"navLinkProjects"} to="/research">
                <div className="research">
                    <h1 className="headings">Research</h1>
                </div>
                </NavLink>
                
         </div>
}