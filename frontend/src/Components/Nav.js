import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" shadow-2xl box-border  w-1/6 z-20  bg-[white]  ">
      <div className=" border-b-2 p-6 flex flex-col gap-10 ">
        <h3 className=" font-medium text-[#2FA9F3] text-xl">Grow Lease</h3>
        <div className="flex">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-1395062611.jpg"
            alt="Rounded avatar"
          />
          <div className="flex flex-col px-5">
            <h4 className="font-semibold"> Elon Musk</h4>
            <h6 className="text-xs font-medium text-[#90A0B7]">Admin</h6>
          </div>
        </div>

        <div className="  flex flex-col gap-5">
          <div className="flex items-center">
            <img
              className="  opacity-30 w-5 h-5"
              src="../../icons/dashboard.png"
              alt="img"
            />
            <h4 className="text-[#365070] font-semibold pl-3">Dahsboard</h4>
          </div>
          <div className="flex items-center">
            <img
              className=" opacity-30 w-5 h-5"
              src="../../icons/deals.png"
              alt="img"
            />
            <h4 className="text-[#365070] font-semibold  pl-3">
              <Link to={"/Deals"}>Deals</Link>{" "}
            </h4>
          </div>
          <div className="flex items-center">
            <img
              className="  opacity-30 w-5 h-5"
              src="../../icons/mail.png"
              alt="img"
            />
            <h4 className="text-[#365070] font-semibold  pl-3">Emails</h4>
          </div>
          <div className="flex items-center">
            <img
              className="  opacity-30  w-5 h-5"
              src="../../icons/investors.png"
              alt="img"
            />
            <h4 className="text-[#365070] font-semibold  pl-3">Investors</h4>
          </div>
          <div className="flex items-center">
            <img
              className="  opacity-30 !fill-[#2FA9F3] w-5 h-5"
              src="../../icons/chat.svg"
              alt="img"
            />
            <h4 className="text-[#365070] font-semibold  pl-3">Chat</h4>
          </div>
          <div className="flex items-center">
            <img
              className="  opacity-30 w-5 h-5"
              src="../../icons/finances.png"
              alt="img"
            />
            <h4 className="text-[#365070] font-semibold  pl-3">Finances</h4>
          </div>
        </div>
      </div>
      <div className="flex items-center pl-6 pt-6">
        <img
          className=" opacity-30  w-5 h-5"
          src="../../icons/settings.png"
          alt="img"
        />
        <h4 className="text-[#365070] font-semibold   pl-3">Settings</h4>
      </div>
    </div>
  );
}

export default Nav;
