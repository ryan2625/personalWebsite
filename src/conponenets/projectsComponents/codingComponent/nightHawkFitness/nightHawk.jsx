import "./nightHawk.css"

export const Hawk = () =>{
    return <div className="hawkInfoContainer">
        <h1 className="projInfo">Nighthawk Fitness</h1>
        <h4 className="aligner">&ensp;&ensp; A comprehensive fitness app that can track your weight, create and log your workouts, and help you track your calories with the nutrituinix.com API. This project was completed with me and my team of three other students over the course of the Spring of 2023.</h4>
        <h2 className="aligner">Background</h2>
        <h4 className="aligner">&ensp;&ensp; At the end of senior year, all CSC majors graduating from Augustana have to take CSC490, a course designed to prepare students 
        to create applications that have a purpose in the real world. This course is completed mostly without instructor aide and forces students to learn new technologies and skills while also applying them simultaneously.
        Me and my groupmates Donny, Ezana, and Minh had to communicate effectively to deliver a complete and original app while keeping up with the sprint deadlines set up by our professor. </h4>
        <div className="teamImage"></div>
        <div className="lister">
        <h2 className="aligner" id="featuresName">Features</h2>
        <ul className="lister">
            <li>Calorie Tracking with nutritionx.com API</li>
            <li>Secure login with Firebase and Google Authenticator</li>
            <li>Saving user data with Firestore and local storage</li>
            <li>Custom algorithm to create a workout plan based on 
                users needs
            </li>
            <li>Light and dark mode options</li>
            <li>Functioning contact and support link</li>
        </ul>
        </div>
        <h2 className="aligner lister">Challenges</h2>
        <h4 className="aligner">&ensp;&ensp; This project was particularly challenging because I had no serious prior experience with web development. I knew little about CSS, HTML, and JS. 
        The fact that I had to learn the React library at the same time I learned the basics made the deadlines for this project more stressful. Thankfully, our team worked amazingly together 
        &#40;special thanks to Minh for being a great leader&#41; and we came out at the end of this class not just alive, but with a project we could be proud of. This project really inspired me to focus my attention on web development and overall,
        I loved working in this group.
        </h4>
        

    </div>
}