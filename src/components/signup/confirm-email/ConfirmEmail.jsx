import React from "react";
import { useNavigate } from "react-router-dom";
import SENT_EMAIL from "../../../assets/signup/email_sent.svg";

export default function ConfirmEmail( ) {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const handleConfirmEmail = () => {
    navigate("/verify-otp");
  };
  
  return (
    <div className="md:w-[88.9%] lg:w-[68.9%] bg-white py-[50px] mx-auto mt-[160px] rounded-lg md:shadow md:border md:border-[#dde2e4] flex flex-col items-center">
      <div>
        <img src={SENT_EMAIL} alt="" />
      </div>
      <div className="text-[#1d1d18] text-2xl font-bold font-['Mulish'] leading-normal text-center">
        Check your mailbox !
      </div>
      <div className="w-[64.6%] mb-[21px] text-center text-[#5a6771] text-sm font-normal font-['Mulish'] leading-normal">
        <span className="">
          We've sent an email to{" "}
        </span>
        <span className="text-[#242c31]">
         {email}{" "}
        </span>
        <span className="">
          with a an OTP to confirm your account. Check your inbox to activate
          your account.
        </span>
      </div>

      <button className="w-40 mb-[38px] h-10 px-4 py-2 bg-[#ff8600] rounded-md text-[#f6f7f8] text-sm font-semibold font-['Mulish'] leading-normal" onClick={handleConfirmEmail}>
      Confirm Email
      </button>

      <div className="text-center text-[#5a6771] text-sm font-normal font-['Mulish'] leading-normal">Didn't get the mail? <span className="text-[#ff8600]">Resend</span></div>
    </div>
  );
}
