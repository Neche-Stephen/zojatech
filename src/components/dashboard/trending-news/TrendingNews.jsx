import React from "react";
import ICONS from "../../../assets/dashboard/";

export default function TrendingNews() {
  const news = [
    {title: "Russia & Ukraine War", subtitle: "Marketing is evolving. It's chang...", icon: ICONS.UKRAINE_NEWS},
    { title: "Elon Musk bought Twitter", subtitle: "Twitter is the most useful social pl...", icon: ICONS.ELON_MUSK_NEWS },
    { title: "Fuel Crisis Everywhere", subtitle: "Due to covid situation in 2020 the...", icon: ICONS.FUEL_PRICE_NEWS},
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
              className=" bg-white p-4 rounded-xl flex justify-between items-center gap-2 shadow border border-[#f1f1f1] "
            >
              <div className="[@media(min-width:640px)_and_(max-width:1108px)]:hidden">
                <img className="w-full" src={item.icon} alt="" />
              </div>

              <div>
              <div className="text-[#3a3a45] text-sm font-semibold font-['Lexend']">{item.title}</div>
              <div className="text-[#808086] text-xs font-light font-['Lexend'] leading-none">{item.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
