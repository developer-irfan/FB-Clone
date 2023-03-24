import { HIDESIGNUPMODAL, HIDESPLASHSCREEN, SHOWSIGNUPMODAL, SHOWSPLASHSCREEN } from "../Constant/ActionTypes";

interface ShowSignupModalAction {
  type: typeof SHOWSIGNUPMODAL;
  payload: boolean;
}

export const showSignupModal = () => {
  return {
    type: SHOWSIGNUPMODAL,
  };
};

export const hideSignupModal = () => {
  return {
    type: HIDESIGNUPMODAL,
  };
};

//show splash screen
export const showSplashScreen = () => {
  return {
    type: SHOWSPLASHSCREEN,
  };

}

//hide splash screen
export const hideSplashScreen = () => {
  return {
    type: HIDESPLASHSCREEN,
  };

}



export type ActionTypes = ShowSignupModalAction;
