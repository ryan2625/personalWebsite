import "./Research.css"
export const Research = () =>{
    return<>
    <div className="codingContainerProjects">

    <div className="project">
                <h1 className="title">
                    Cybersecurity: An Analysis on Network Attacks
                </h1>
                <div className="imageRules img2a"></div>
                <div className="fontSelect description desc1"> 
                    In my research paper, I investigated the existing literature in the
                    field of cybersecurity on network attacks and attempted to condense my findings into 
                    a single paper. My research discussed the various types of attacks
                    that may occur onto a system, as well as offering an analysis of the different
                    prevention techniques we have at our disposal.
                </div>
           </div>

            <div className="project">
                <h1 className="title">
                    A Study on Super Clustering Methods for Optical Mouse Trajectory
                </h1>
                <div className="imageRules img1a"></div>
                <div className="fontSelect description desc1"> 
                This paper presented a study on the employment of the Tap-Strap 2 
                for creative applications. The Tap strap is a wearable keyboard that
                functions via a combination of finger taps on a flat surface. Our goals
                for this paper was two-fold: (1) devise a unique and original functionality for the device,
                and (2) to perform an analysis of the learning curve associated with
                the tap combinations of the device.
                </div>
           </div>


            
   
            <div className="project">
                <h1 className="title">
                   An Investigation on Security Vulnerabilities in different WiFi protocals.
                </h1>
                <div className="imageRules img3a"></div>
                <div className="fontSelect description desc1"> 
                    This paper explored the concept of "WiFi" hacking and attempted to show
                    the different types of vulnerabilities in the WiFI protocals WEP, WPA,
                    and WPA2. Me and my group even created our own python script and
                    conducted an attack on a WiFi signal secured
                    with the WEP protocal; we did this by performing a brute force 
                    dictionary attack.
                </div>
            </div>
        </div>
    </>
}