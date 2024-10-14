import React from "react";

export default function DashboardCard({ item }) {
  return (
    <div className="w-full sm:w-[31.9%] bg-white p-4 rounded-xl flex justify-between items-center gap-[65px] ">
      <div className=" w-2/12">
        <div className="text-[#3a3a45] text-[25px] font-bold font-['Lexend'] leading-[33.25px] mb-1">
          {item.value}
        </div>
        <div className="text-[#a3a3a6] text-xs font-normal font-['Lexend'] leading-none tracking-tight whitespace-nowrap">
          {item.title}
        </div>
      </div>

      <div className="" >
        <img className="w-full" src={item.icon} alt="" />
      </div>
    </div>
  );
}
