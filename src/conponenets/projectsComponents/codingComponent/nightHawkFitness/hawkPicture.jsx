import "./hawkImage.png"
import "./hawkPicture.css"
import image from "./intro.gif"
export const Nhawk = () => {
    return <div className="pictureHawk">
        <img className="hawkGif" src={image} alt="" />
        <div className="topHawk"><h1>Dashboard</h1></div>
        <div className="bottomHawk"><h1>Workout Plan</h1></div>
    </div>
}