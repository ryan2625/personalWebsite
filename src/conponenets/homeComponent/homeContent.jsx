import "./homeContent.css" 
import { NavLink } from "react-router-dom"
export const HomeContent = () =>{
    return <div className="containerAll">
    <h1 className="intro" id="n0">About Me</h1>
    <div className="homeContainer2">
        
         <div id="n1" className="namer left">
            <h1  className="qLeft">
                Who are you?
            </h1>
        </div>

         <div id="n2" className="a1 right">
            <h4  className="aRight">
                 Hey there, my name is Ryan and I recently graduated from Augustana college with my B.A. in computer science.
            </h4>
        </div>

        <div id="n3" className="q2 left">
            <h1  className="qLeft">
                What skills do you have?
            </h1>
        </div>

        <div id="n4" className="a2 right">
            <h4  className="aRight">
                I am proficient in  React, and have experience in Javascript, CSS, and HTML. I have some experience in Python and Java as well and I'm excited to see what I'll learn next.
            </h4>
        </div>

        <div id="n5" className="q3 left">
            <h1  className="qLeft">
               What else can you tell me about yourself?
            </h1>
        </div>

        <div id="n6" className="a3 right">
            <h4  className="aRight">
               I have been playing the violin in various orchestras for around 15 years and I have a passion for weightlifting. I would love to talk to you so feel free to contact me!
            </h4>
        </div>
    </div>
    <NavLink className="navLink1" to="/contacts">
        <button className="button1">LET'S TALK</button>
    </NavLink>
    </div>
}