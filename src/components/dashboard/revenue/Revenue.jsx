import React from "react";
import ICONS from "../../../assets/dashboard/";

const revenue = [
  { value: "$4,000", title: "Recently Added Pages", icon: ICONS.FACEBOOK },
  { value: "$2,120", title: "Video Monetization", icon: ICONS.FACEBOOK },
  { value: "$1,752", title: "Community Buildup", icon: ICONS.FACEBOOK },
];

export default function Revenue() {
  return (
    <div className="w-[93.2%] mt-8 mb-4 mx-auto md:mx-0 p-5 bg-white rounded-2xl">
      <div className="text-[#3a3a45] text-xl font-bold font-['Lexend'] leading-relaxed">
        Revenue
      </div>

      <div className="flex flex-col gap-3">
        {revenue.map((item, index) => {
          return (
            <div key ={index} className=" bg-white p-4 rounded-xl flex justify-between items-center gap-[65px] shadow border border-[#f1f1f1] ">
              <div className=" w-2/12">
                <div className="text-[#3a3a45] text-[25px] font-bold font-['Lexend'] leading-[33.25px] mb-1">
                  {item.value}
                </div>
                <div className="text-[#a3a3a6] text-xs font-normal font-['Lexend'] leading-none tracking-tight whitespace-nowrap">
                  {item.title}
                </div>
              </div>

              <div className="[@media(min-width:640px)_and_(max-width:1108px)]:hidden">
                <img className="w-full" src={item.icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
