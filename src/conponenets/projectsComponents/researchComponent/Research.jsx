import "./Research.css"
import { NavLink } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export const Research = () =>{
    return<>
    <div className="codingContainerProjects">
    <div className="companion"></div>
    <NavLink to="/projects"><ArrowBackIosIcon className="exit"></ArrowBackIosIcon></NavLink>
    <div className="project">
    <div className="headers">
                <h1 className="title1">
                   Cyber Security: An Analysis on Network Attacks
                </h1>
                <h3 className="date1">
                    10/15/2022
                    </h3>
                </div>
                <div className="imageRules img2a"></div>
                <div className="fontSelect description desc1"> 
                    In my research paper, I investigated the existing literature in the
                    field of cybersecurity on network attacks and attempted to condense my findings into 
                    a single paper. My research discussed the various types of attacks
                    that may occur onto a system, as well as offering an analysis of the different
                    prevention techniques we have at our disposal.
                </div>
                <div className="technologiesUsed researcher">
                <a href="https://drive.google.com/file/d/1-KNBq8CfMS5BhY_140FT4dyBBOcnhYnz/view" className="liveApp readPaper1" id="paper1">Read Here</a>
                    </div>
           </div>

            <div className="project">
            <div className="headers">
                <h1 className="title1">
                    A Study on Superclustering Methods for Optical Mouse Trajectories
             </h1>
                <h3 className="date1">
                    1/20/2023
                    </h3>
                </div>
                <div className="imageRules img1a"></div>
                <div className="fontSelect description desc1"> 
                This paper presented a study on the employment of the Tap-Strap 2 
                for creative applications. The Tap strap is a wearable keyboard that
                functions via a combination of finger taps on a flat surface. Our goals
                for this paper was two-fold: (1) devise a unique and original functionality for the device,
                and (2) to perform an analysis of the learning curve associated with
                the tap combinations of the device.
                </div>
                <div className="technologiesUsed researcher">
                <a href="https://drive.google.com/file/d/1Xxoz19Mz0svj9FCyWJEyARw_Mw_J1t5b/view?usp=sharing" className="liveApp readPaper1" id="paper2">Read Here</a>
                    </div>
           </div>


            
   
            <div className="project">
            <div className="headers">
            <h1 className="title1">
                    An Investigation on Security Vulnerabilities in Different WiFi Protocols
                </h1>
                <h3 className="date1">
                    12/24/2022
                    </h3>
                </div>
                <div className="imageRules img3a"></div>
                <div className="fontSelect description desc1"> 
                    This paper explored the concept of "WiFi" hacking and attempted to show
                    the different types of vulnerabilities in the WiFI protocals WEP, WPA,
                    and WPA2. Me and my group even created our own python script and
                    conducted an attack on a WiFi signal secured
                    with the WEP protocal; we did this by performing a brute force 
                    dictionary attack.
                </div>
                <div className="technologiesUsed researcher">
                <a href="https://drive.google.com/file/d/1v3Aa5-VDnrWST-kWQX2arLhBmVPKiYI2/view?usp=sharing" className="liveApp readPaper1" id="paper3">Read Here</a>
                    </div>
            </div>
        </div>
    </>
}