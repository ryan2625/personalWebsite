import "./Coding.css"
import { NavLink } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Coding = () =>{
    return<>
    <div className="codingContainerProjects">
        <div className="companion"></div>
        <NavLink to="/projects"><ArrowBackIosIcon className="exit"></ArrowBackIosIcon></NavLink>
    <div className="project fitness ">
        <div className="headers">
                <h1 className="title1">
                    NightHawk Fitness: Senior Inquiry
                </h1>
                <h3 className="date1">
                    5/20/2023
                    </h3>
                </div>
                <div className="imageRules img2"></div>
                <div className="fontSelect description desc1"> 
                    My experience at Augustana college culminated in a special course
                    called the "Seniory Inquiry." Me and my team of a few other students worked
                    vigoursly over the course of 14 weeks to design, create and deploy a 
                    fitness based web app. This app handled user data with Firebase and was
                    powered by ReactJs.
                </div>
                <div className="technologiesUsed">
                <a href="https://github.com/AugustanaCSC490Spring23/Nighthawk-Fitness" className="gitIcon">GitHub <GitHubIcon></GitHubIcon></a>
                <a href="https://fitness-dev-2.web.app/" className="liveApp">Live App</a>
                        <h1 className="react">React</h1>  
                        <h1 className="css">CSS</h1>
                        <h1 className="javaScript">Javascript</h1>
                        <h1 className="fireBase">Firebase</h1>
                    </div>
                    <NavLink to="/nightHawk" className={"naver"}><button className="readMore">Read More<EastIcon className="eastIcon"/></button></NavLink>
           </div>

            <div className="project schedule">
            <div className="headers">
                <h1 className="title1">
                    Software Development: The Business Team
                </h1>
                <h3 className="date1">
                    12/8/2021
                    </h3>
                </div>
                <div className="imageRules img1"></div>
                <div className="fontSelect description desc1"> Me and a group of three
                other students were tasked to create a multi-faceted app
                that could allow students to register, drop, and visualize
                the courses they were taking during the school year. This app
                was coded in Java (utilizing the JavaFX library) and had some CSS styling as well.
                </div>
                <div className="technologiesUsed">
                <a href="https://github.com/ryan2625/schedule-visualizer" className="gitIcon">GitHub <GitHubIcon></GitHubIcon></a>
                        <h1 className="java">Java</h1>
                        <h1 className="css">CSS</h1>
                    </div>
           </div>


            
   
            <div className="project tapStrap ">
            <div className="headers">
                <h1 className="title1">
                    Human Computer Interactions: The Tap Strap 2
                </h1>
                <h3 className="date1">
                    1/20/2023
                    </h3>
                </div>
                <div className="imageRules img3"></div>
                <div className="fontSelect description desc1"> 
                    During Winter of 2022, I took the special topics course named "Human Computer Interaction."
                    In this class, I created special interactions with a handheld keyboard
                    named the Tap-Strap 2" via the manufacturers software development kit. I also 
                    worked with the python library "Tkinter" to create a GUI to show off the 
                    device's capabilities.
                    
                </div>
                <div className="technologiesUsed">
                <a href="https://github.com/ryan2625/Extensibility" className="gitIcon">GitHub <GitHubIcon></GitHubIcon></a>
                        <h1 className="python">Python</h1>
                        <h1 className="css">CSS</h1>
                        <h1 className="machineLearning">Machine Learning</h1>
                    </div>
            </div>

        </div>
    </>
}