import React from "react";
import ICONS from "../../../assets/dashboard/";

export default function PotentialMembers() {
  const members = [
    { name: "Wanda Parker", username: "@ashking1234", growth: "10.3%", profile_pic: ICONS.WANDA },
    { name: "Terry Brown", username: "@ashking1234", growth: "9.8%", profile_pic: ICONS.WANDA  },
    { name: "Lucas Holmes", username: "@ashking1234", growth: "6.5%", profile_pic: ICONS.WANDA  },
    { name: "Janice Miller", username: "@ashking1234", growth: "8.6%", profile_pic: ICONS.WANDA  },
    { name: "Terry Brown", username: "@ashking1234", growth: "9.8%", profile_pic: ICONS.WANDA  },


  ];

  return (
    <div className="p-5 bg-white rounded-2xl ">
      <div className="text-[#3a3a45] text-xl font-bold font-['Lexend'] leading-relaxed mb-4">
        Potential Members
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {members.map((member, index) => {
          return (
            <div className=" px-4 py-3 bg-white rounded-xl border border-[#f1f1f1] flex flex-col items-center">
              <div className="mb-2">
                <img src={member.profile_pic} alt="" />
              </div>
              <div className="text-center text-[#3a3a45] text-sm font-semibold font-['Lexend'] whitespace-nowrap">
                {member.name}
              </div>
              <div className="text-center text-[#808086] text-[11px] font-normal font-['Lexend'] mb-2">
                {member.username}
              </div>
              <div className="flex items-center">
                <img src={ICONS.GROWTH_GREEN} alt="" />
                <div className="text-[#3a3a45] text-base font-bold font-['Lexend']">
                  {member.growth}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
