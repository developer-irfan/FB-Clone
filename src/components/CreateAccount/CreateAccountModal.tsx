import React, { useState } from "react";
import CreateAccountFormComp from "./CreateAccountFormComp";
import ModalCloseIcon from "./ModalCloseIcon";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../redux/types";

const CreateAccountModal = () => {
  //
  //
  const hasModalShow = useSelector(
    (state: RootState) => state.signupModalReducer
  );

  console.log(hasModalShow);

  //return
  return hasModalShow ? (
    <div className="">
      {/* Main modal */}
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-sm shadow dark:bg-gray-700">
            <ModalCloseIcon />
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white xmd:text-[30px] xmd:font-bold">
                Sign up
              </h3>
              <p className="xmd:text-[14px] text-gray-600">
                It's quick and easy.
              </p>
              <hr className="mt-3" />
              <CreateAccountFormComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CreateAccountModal;
