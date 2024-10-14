import React from "react";

export default function TrendingPosts() {
  return (
    <div className="bg-white p-4 rounded-xl border border-[#f1f1f1]">
      <div className="text-[#3a3a45] text-xl font-bold font-['Lexend'] leading-relaxed mb-5">
        Trending Posts
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-4">
        <div className="p-4 bg-white rounded-xl border border-[#f1f1f1] flex flex-col  gap-5">
          <div className="text-[#3a3a45] text-lg font-semibold font-['Lexend'] leading-[25.20px]">
            8 Upcoming Influencer Marketing Trends and Benefits
          </div>
          <div className="text-[#808086] text-sm font-light font-['Lexend'] leading-[21px]">
            Marketing is evolving. It's changing from a one-way street to a
            two-way conversation
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-[#f1f1f1] flex flex-col  gap-5">
          <div className="text-[#3a3a45] text-lg font-semibold font-['Lexend'] leading-[25.20px]">
            8 Upcoming Influencer Marketing Trends and Benefits
          </div>
          <div className="text-[#808086] text-sm font-light font-['Lexend'] leading-[21px]">
            Marketing is evolving. It's changing from a one-way street to a
            two-way conversation
          </div>
        </div>
      </div>
    </div>
  );
}
