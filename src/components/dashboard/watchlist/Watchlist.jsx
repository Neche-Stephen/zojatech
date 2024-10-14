import React from "react";
import ICONS from "../../../assets/dashboard/";

export default function Watchlist() {
  return (
    <div className="w-[93.2%] h-[287px] p-5 bg-white rounded-2xl mx-auto md:mx-0  mt-8 md:mt-0 mb-4">
      <div className="flex justify-between items-center mb-4 gap-2">
        <div className="text-[#3a3a45] text-xl font-bold font-['Lexend'] leading-relaxed">
          Watchlist
        </div>
        <div className="text-[#ff8600] text-xs font-semibold font-['Lexend'] uppercase whitespace-nowrap">
          View All
        </div>
      </div>

      <div className="h-24 px-4 py-3 bg-[#F6F6F6] rounded-xl flex justify-between items-center mb-3">
        <div>
          <div className="text-[#3a3a45] text-lg font-semibold font-['Lexend'] flex mb-[8.5px] gap-6">
            AAPL{" "}
            <span className="">
              <img src={ICONS.GREEN_DOWN_ARROW} alt="" />
            </span>
          </div>
          <div className="text-[#a3a3a6] text-[15px] font-medium font-['Lexend'] leading-snug mb-1">
            $142.90
          </div>
          <div className="text-[#00a441] text-xs font-medium font-['Lexend'] leading-[17.92px]">
            +0.47%
          </div>
        </div>
        <div>
          <img src={ICONS.LINE_CHART} alt="" />
        </div>
      </div>

      <div className="h-24 px-4 py-3 bg-[#F6F6F6] rounded-xl flex justify-between items-center">
        <div>
          <div className="text-[#3a3a45] text-lg font-semibold font-['Lexend'] flex mb-[8.5px] gap-6">
            BPL{" "}
            <span className="">
              <img src={ICONS.RED_DOWN_ARROW} alt="" />
            </span>
          </div>
          <div className="text-[#a3a3a6] text-[15px] font-medium font-['Lexend'] leading-snug mb-1">
            $142.90
          </div>
          <div className="text-[#ff5151] text-xs font-medium font-['Lexend'] leading-[17.92px]">
            -0.78%
          </div>
        </div>
        <div>
          <img src={ICONS.LINE_CHART} alt="" />
        </div>
      </div>
    </div>
  );
}
