import DOBPicker from "./DOBPicker";
import { useTranslation } from "react-i18next";

const CreateAccountFormComp: React.FC = () => {
  const { t, i18n } = useTranslation();

  //
  return (
    <div className="mt-3">
      <form className="space-y-3">
        <div className="xmd:flex gap-3">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="First Name"
              required
              autoFocus
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
          {t("peopleWhoUseOurServiceMayHaveUploadedYour")}
        </p>
        <p className="text-[12px] text-gray-500">{t("byClickingSignup")}</p>
        <button
          type="submit"
          className="w-[200px] flex items-center justify-center bg-[#3ca626] text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center mx-auto"
        >
          {t("signup")}
        </button>
      </form>
    </div>
  );
};

export default CreateAccountFormComp;
