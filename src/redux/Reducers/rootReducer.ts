import { combineReducers } from "redux";
import signupModalReducer from "./SignupModalReducer";
import splashScreenReducer from "./SplashScreenReducer";

const mainReducer = combineReducers({
 signupModalReducer,
 splashScreenReducer,
});

export default mainReducer;