import "./home.css" 
import { HomeCard } from "./homeCard"
import { HomeContent } from "./homeContent"
export const Home = () =>{
    return <>
        <div className="homeContainer">
            <div className="homeCard">
                <HomeCard />
            </div>
            <div className="homeContent">
                <HomeContent />
            </div>
        </div>
        </>
}