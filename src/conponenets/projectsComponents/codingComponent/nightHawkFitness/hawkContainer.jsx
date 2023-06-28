import { Nhawk } from "./hawkPicture"
import { Hawk } from "./nightHawk"
import "./hawkContainer.css"

export const HawkContainer = () =>{
    return <>
    <div className="homeContainer3">
    <div className="homeCard3">
        <Nhawk/>
        </div>
        <div className="homeContent3">
            <Hawk/>
        </div>
        </div>
    </>
}