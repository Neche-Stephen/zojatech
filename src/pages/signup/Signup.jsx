import React, {useState} from "react";


import SignupInfo from "../../components/signup/signup-info/SignupInfo";
import ChooseSignupPlatform from "../../components/signup/choose-signup-platform/ChooseSignupPlatform";
import SignupForm from "../../components/signup/signup-form/SignupForm";
import ConfirmEmail from "../../components/signup/confirm-email/ConfirmEmail";
import VerifyEmail from "../../components/signup/verify-email/VerifyEmail";
import EmailConfirmed from "../../components/signup/email-confirmed/EmailConfirmed";
import { Outlet } from "react-router-dom";

export default function Signup() {

  return (
    <div className="min-h-screen flex flex-wrap">
      <div className="w-full md:w-6/12 ">
        <SignupInfo />
      </div>

      <div className="bg-[#F8FAFC] w-full md:w-6/12">
       <Outlet />
        <div className="md:hidden text-center md:text-start py-8 text-[#83909a] text-[13px] font-normal font-['Mulish'] leading-[19px]">
        © 2022 Revvex. All rights reserved
      </div>
      </div>
    </div>
  );
}
