import React from "react";

import LOGO from "../../../assets/signup/buddy-logo.jpg";
import CHECKBOX from "../../../assets/signup/Checkbox.jpg";

export default function SignupInfo() {
  return (
    <div className="mx-auto w-[70.8%] mt-[90px] ">
      <div className="mb-[129px]">
        <img src={LOGO} alt="" />
      </div>

      <div className="flex gap-4 items-center mb-[37px]">
        <div>
          <img src={CHECKBOX} alt="" />
        </div>
        <div className="w-[87.5%] text-[#5a6771] text-lg font-normal font-['Mulish'] leading-normal">
          Track real-time overview of company's financial performance.
        </div>
      </div>

      <div className="flex gap-4 items-center mb-[37px]">
        <div>
          <img src={CHECKBOX} alt="" />
        </div>
        <div className="w-[87.5%] text-[#5a6771] text-lg font-normal font-['Mulish'] leading-normal">
          Track created projects budget against actual revenue and expenses.
        </div>
      </div>

      <div className="flex gap-4 items-center mb-[100px]">
        <div>
          <img src={CHECKBOX} alt="" />
        </div>
        <div className="w-[87.5%] text-[#5a6771] text-lg font-normal font-['Mulish'] leading-normal">
          Highlighted reports on budget deficit and surplus, accounting
          dimensions, balance sheets and real-time sales margin estimation.
        </div>
      </div>

      <div className="hidden md:block pb-1 text-[#83909a] text-[13px] font-normal font-['Mulish'] leading-[19px]">
        © 2022 Revvex. All rights reserved
      </div>
    </div>
  );
}
