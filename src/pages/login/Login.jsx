import React from "react";


import SignupInfo from "../../components/signup/signup-info/SignupInfo";
import LoginForm from "../../components/login/login-form/LoginForm";


export default function Login() {
  return (
    <div className="min-h-screen flex flex-wrap">
      <div className="w-full md:w-6/12 ">
        <SignupInfo />
      </div>

      <div className="bg-[#F8FAFC] w-full md:w-6/12">
        <LoginForm />
        
        <div className="md:hidden text-center md:text-start py-8 text-[#83909a] text-[13px] font-normal font-['Mulish'] leading-[19px]">
        © 2022 Revvex. All rights reserved
      </div>
      </div>
    </div>
  );
}
