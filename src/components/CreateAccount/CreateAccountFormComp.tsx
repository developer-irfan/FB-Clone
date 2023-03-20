import React from "react";
import DOBPicker from "./DOBPicker";

const CreateAccountFormComp = () => {
  return (
    <div className="mt-3">
      <form className="space-y-3" action="#">
        <div className="xmd:flex gap-3">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="surname"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Surname"
              required
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            name="password"
            id="email"
            placeholder="Mobile number and email address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <DOBPicker />
        <p className="text-[12px] text-gray-500">
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </p>
        <p className="text-[12px] text-gray-500">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
        <button
          type="submit"
          className="w-[200px] flex items-center justify-center bg-[#3ca626] text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center mx-auto"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default CreateAccountFormComp;
