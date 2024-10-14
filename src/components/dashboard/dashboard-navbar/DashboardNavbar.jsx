import React from "react";
import ICONS from "../../../assets/dashboard/";

export default function DashboardNavbar() {
  return (
    <div className="flex mb-[39.5px] mt-10 gap-4 items-center">
      <div className="text-[#3a3a45] sm:text-[25px] font-bold font-['Lexend'] leading-[33.25px] mr-auto">
        My Portfolio
      </div>

      <div className="relative w-[37.7%]">
        <input
          className="w-full h-12 pl-[50px] py-3 bg-white rounded-2xl placeholder:text-[#818187] placeholder:font-[Lexend] placeholder:text-[14px] placeholder:font-medium placeholder:leading-[137.1%] placeholder:tracking-[0.28px]"
          type="search"
          placeholder="Search"
        />
        <img className="absolute top-3 left-4" src={ICONS.SEARCH_ICON} alt="" />
      </div>

      <img className="hidden sm:inline-flex" src={ICONS.PLUS_ICON} alt="" />

      <img src={ICONS.NOTIFICATION_ICON} alt="" />
    </div>
  );
}
