import React from "react";
import { Link } from "react-router-dom";

import MAIL_LOGO from "../../../assets/signup/mail_icon.svg";
import GOOGLE_LOGO from "../../../assets/signup/google_icon.svg";
import HELP_MESSAGE_ICON from "../../../assets/signup/help_message.svg";


export default function ChooseSignupPlatform() {
  return (
    <>
      <div className="md:w-[88.9%] lg:w-[68.9%] bg-white p-[50px] mx-auto mt-[160px] rounded-lg md:shadow md:border md:border-[#dde2e4]">
        <div className=" text-[#1d1d18] text-2xl font-bold font-['Mulish'] leading-normal mb-[33px]">
          Register your account
        </div>
        <Link to ='/signup' className="h-10 mb-3 w-[100%] gap-2 rounded-md border border-[#dde2e4] flex  justify-center items-center">
          <div>
            <img src={MAIL_LOGO} alt="" />
          </div>
          <div className="text-[#5a6771] text-sm font-normal font-['Mulish'] leading-normal">
            Sign up with email
          </div>
        </Link>

        <div className="flex items-center mb-3">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-4 text-[#5a6771] text-[13px] font-normal font-['Mulish'] leading-[19px]">
            or
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button className="h-10 w-[100%] mb-[41px] gap-2 rounded-md border border-[#dde2e4] flex  justify-center items-center">
          <div>
            <img src={GOOGLE_LOGO} alt="" />
          </div>
          <div className="text-[#5a6771] text-sm font-normal font-['Mulish'] leading-normal">
            Sign up with Google
          </div>
        </button>

        <div className="text-[#83909a] text-[13px] font-normal font-['Mulish'] leading-[19px] mb-[76px]">
          By clicking the button above, you agree to our{" "}
          <span className="text-[#ff8600]">Terms of Service</span> and{" "}
          <span className="text-[#ff8600]">Privacy Policy</span>.
        </div>

        <div className=" text-[#5a6771] text-sm font-normal font-['Mulish'] leading-normal">
          Already have an account?{" "}
          <span className="text-[#ff8600]  text-sm font-medium">Login</span>
        </div>
      </div>

      <button className="mt-[268px] h-[51px] p-[15px] bg-[#ff8600] rounded-[60.71px] shadow flex gap-px text-white text-sm font-semibold font-['Mulish'] leading-normal">
        <span>Get Help</span>
        <img src={HELP_MESSAGE_ICON} alt="" />
      </button>
    </>
  );
}
