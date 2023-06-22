import { Nhawk } from "./hawkPicture"
import { Hawk } from "./nightHawk"

export const HawkContainer = () =>{
    return <>
    <div className="flexContainer">
    <div className="homeCard">
        <Nhawk/>
        </div>
        <div className="homeContent">
            <Hawk/>
        </div>
        </div>
    </>
}