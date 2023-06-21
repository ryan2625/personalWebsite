import "./Coding.css"
export const Coding = () =>{
    return<>
    <div className="codingContainerProjects">

    <div className="project fitness ">
                <h1 className="title">
                    NightHawk Fitness: Senior Inquiry
                </h1>
                <div className="imageRules img2"></div>
                <div className="fontSelect description desc1"> 
                    My experience at Augustana college culminated in a special course
                    called the "Seniory Inquiry." Me and my team of a few other students worked
                    vigoursly over the course of 14 weeks to design, create and deploy a 
                    fitness based web app. This app handled user data with Firebase and was
                    powered by ReactJs.
                </div>
                <div className="technologiesUsed">
                        <h1 className="react">React</h1>  
                        <h1 className="css">CSS</h1>
                        <h1 className="HTML">HTML</h1>
                        <h1 className="javaScript">Javascript</h1>
                    </div>
           </div>

            <div className="project schedule">
                <h1 className="title">
                    Software Development: The Business Team
                </h1>
                <div className="imageRules img1"></div>
                <div className="fontSelect description desc1"> Me and a group of three
                other students were tasked to create a multi-faceted app
                that could allow students to register, drop, and visualize
                the courses they were taking during the school year. This app
                was coded in Java (utilizing the JavaFX library) and had some CSS styling as well.
                </div>
                <div className="technologiesUsed">
                        <h1 className="python">Python</h1>
                        <h1 className="css">CSS</h1>
                    </div>
           </div>


            
   
            <div className="project tapStrap ">
                <h1 className="title">
                   The Tap Strap 2 and HCI 
                </h1>
                <div className="imageRules img3"></div>
                <div className="fontSelect description desc1"> 
                    During Winter of 2022, I took the special topics course named "Human Computer Interaction."
                    In this class, I created special interactions with a handheld keyboard
                    named the Tap-Strap 2" via the manufacturers software development kit. I also 
                    worked with the python library "Tkinter" to create a GUI to show off the 
                    device's capabilities.
                    
                </div>
                <div className="technologiesUsed">
                        <h1 className="python">Python</h1>
                        <h1 className="css">CSS</h1>
                        <h1 className="machineLearning">Machine Learning</h1>
                    </div>
            </div>

        </div>
    </>
}