import React from "react";

import MAIL_ICON from "../../../assets/signup/email.svg";
import USER from "../../../assets/signup/user.svg";
import LOCK from "../../../assets/signup/lock_open.svg";

export default function LoginForm() {
  return (
    <div className="md:w-[88.9%] lg:w-[68.9%] bg-white p-[50px] mx-auto mt-[160px] rounded-lg md:shadow md:border md:border-[#dde2e4]">
      <div className=" text-[#1d1d18] text-2xl font-bold font-['Mulish'] leading-normal mb-[12px]">
      Log in to your account
      </div>

      <div className="text-[#5a6771] text-[13px] font-normal font-['Mulish'] leading-[19px] mb-[20px]">
        Proceed to login and setup your organization
      </div>

      <div className="relative mb-3">
        <input
          type="email"
          className="h-10 w-full border pl-12 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md  focus:outline-none  focus:ring-1 focus:ring-[#ff8600]"
          placeholder="Email"
        />
        <img className="absolute top-[12px] left-[20.23px]" src={USER} alt="" />
      </div>

      <div className="relative mb-[30px]">
        <input
          type="password"
          className="h-10 w-full border pl-12 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md focus:outline-none  focus:ring-1 focus:ring-[#ff8600]"
          placeholder="Password"
        />
        <img className="absolute top-[12px] left-[20.23px]" src={LOCK} alt="" />
      </div>

      <button className="h-10 w-full mb-[33px] bg-[#ff8600] text-[#f6f7f8] rounded-md  text-sm font-semibold font-['Mulish'] leading-normal">
        Login
      </button>

      <div className="text-[#83909a] text-[13px] font-normal font-['Mulish'] leading-[19px] mb-[76px]">
        By clicking the button above, you agree to our{" "}
        <span className="text-[#ff8600]">Terms of Service</span> and{" "}
        <span className="text-[#ff8600]">Privacy Policy</span>.
      </div>

      <div className=" text-[#5a6771] text-sm font-normal font-['Mulish'] leading-normal">
      Don't have an account?{" "}
        <span className="text-[#ff8600]  text-sm font-medium">Register</span>
      </div>
    </div>
  );
}
