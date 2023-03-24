import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../../assets/images/user.jpg";
import erth from "../../../assets/images/erthugrul-page-icon.jpg";
import poe from "../../../assets/images/poetry-group-icon.jpg";

const ContactsComp: React.FC = () => {
  //contacts array
  const contactsData = [
    {
      imgSource: userIcon,
      name: "Nemat Afridi",
    },
    {
      imgSource: erth,
      name: "Ahmed afridi",
    },
    {
      imgSource: poe,
      name: "Irfoo writes",
    },
    {
      imgSource: erth,
      name: "Ahmed afridi",
    },
    {
      imgSource: userIcon,
      name: "Nemat Afridi",
    },
    {
      imgSource: poe,
      name: "Irfoo writes",
    },
    {
      imgSource: erth,
      name: "Ahmed afridi",
    },
    {
      imgSource: poe,
      name: "Irfoo writes",
    },
    {
      imgSource: erth,
      name: "Ahmed afridi",
    },
  ];

  //
  return (
    <>
      <h2 className="text-[16px] pl-2 font-medium">Contacts</h2>
      {contactsData.map((item, index) => {
        return (
          <li key={index} className="rounded-sm flex items-center">
            <Link
              to="#"
              className="flex items-center px-2 pt-2 space-x-3 rounded-md "
            >
              <img
                src={item.imgSource}
                alt=""
                className="w-[22px] h-[22px] rounded-[50px]"
              />
              <span className="font-meduim tracking-wider mt-1">
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default ContactsComp;
