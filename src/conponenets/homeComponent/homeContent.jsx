import "./homeContent.css" 
import { NavLink } from "react-router-dom"
export const HomeContent = () =>{
    return <div className="containerAll">
    <h1 className="intro">About Me</h1>
    <div className="homeContainer2">
        
         <div className="namer left">
            <h1 className="qLeft">
                Who are you?
            </h1>
        </div>

         <div className="a1 right">
            <h4 className="aRight">
                 Hey there, my name is Ryan and I recently graduated from Augustana college with my B.A. in computer science.
            </h4>
        </div>

        <div className="q2 left">
            <h1 className="qLeft">
                What technologies do you know?
            </h1>
        </div>

        <div className="a2 right">
            <h4 className="aRight">
                I am proficient in  React, and have experience in Javascript, CSS, and HTML. I also have some experience in Python and Java as well and I'm excited to see what I'll learn next.
            </h4>
        </div>

        <div className="q3 left">
            <h1 className="qLeft">
               What else can you tell me about yourself?
            </h1>
        </div>

        <div className="a3 right">
            <h4 className="aRight">
               I have been playing the violin in various orchestras for around 15 years and I have a passion for weightlifting. I would love to talk to you so feel free to contact me!
            </h4>
        </div>
    </div>
    <NavLink className="navLink1" to="/contacts">
        <button className="button1">LET'S TALK</button>
    </NavLink>
    </div>
}