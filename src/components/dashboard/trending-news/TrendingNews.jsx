import React from "react";
import ICONS from "../../../assets/dashboard/";

export default function TrendingNews() {
  const news = [
    { value: "$4,000", title: "Russia & Ukraine War", icon: ICONS.UKRAINE_NEWS},
    { value: "$2,120", title: "Video Monetization", icon: ICONS.ELON_MUSK_NEWS },
    { value: "$1,752", title: "Community Buildup", icon: ICONS.FUEL_PRICE_NEWS},
  ];
  return (
    <div className="w-[93.2%] mt-8 mb-4 mx-auto md:mx-0 p-5 bg-white rounded-2xl">
      <div className="text-[#3a3a45] text-xl font-bold font-['Lexend'] leading-relaxed">
        Trending News
      </div>

      <div className="flex flex-col gap-3">
        {news.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-white p-4 rounded-xl flex justify-between items-center gap-[65px] shadow border border-[#f1f1f1] "
            >
              <div className="[@media(min-width:640px)_and_(max-width:1108px)]:hidden">
                <img className="w-full" src={item.icon} alt="" />
              </div>

              <div>
                <div className="text-[#3a3a45] text-[25px] font-bold font-['Lexend'] leading-[33.25px] mb-1">
                  {item.value}
                </div>
                <div className="text-[#a3a3a6] text-xs font-normal font-['Lexend'] leading-none tracking-tight whitespace-nowrap">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
