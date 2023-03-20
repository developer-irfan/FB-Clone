import { SHOWSIGNUPMODAL } from "../Constant/ActionTypes";

interface ShowSignupModalAction {
  type: typeof SHOWSIGNUPMODAL;
  payload: boolean;
}

export const showSignupModal = () => {
  return {
    type: SHOWSIGNUPMODAL,
  };
};

export type ActionTypes = ShowSignupModalAction;
