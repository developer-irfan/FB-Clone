
import { SHOWSIGNUPMODAL  } from "../Constant/ActionTypes";
import { HIDESIGNUPMODAL } from "../Constant/ActionTypes";
import { ActionTypes } from "../Actions/Action";

const isModalOpen: boolean = false;

const signupModalReducer = (state = isModalOpen, action:ActionTypes) => {
    if(action.type === SHOWSIGNUPMODAL){
        return state = true
    }
    if(action.type === HIDESIGNUPMODAL){
        return state = false
    }
    return state
}

export default signupModalReducer;