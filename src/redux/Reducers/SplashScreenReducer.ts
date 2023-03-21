import { SHOWSPLASHSCREEN } from "../Constant/ActionTypes";
import { ActionTypes } from "../Actions/Action";


const isSplashScreenDisplay: boolean = false;

const splashScreenReducer = (state = isSplashScreenDisplay, action: ActionTypes) => {
    if(action.type === SHOWSPLASHSCREEN){
        return state = true;
    }
    return state;
}

export default splashScreenReducer;