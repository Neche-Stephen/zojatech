import React from 'react';
import { Link } from 'react-router-dom';
import SENT_EMAIL from "../../../assets/signup/email_verified.svg";

export default function EmailConfirmed() {

  return (
    <div className="md:w-[88.9%] lg:w-[68.9%] bg-white py-[50px] mx-auto mt-[160px] rounded-lg md:shadow md:border md:border-[#dde2e4] flex flex-col items-center">
      <div className='mb-[32.2px]'>
        <img src={SENT_EMAIL} alt="" />
      </div>
      <div className="text-[#1d1d18] text-2xl font-bold font-['Mulish'] leading-normal text-center">
      Email verified !
      </div>
      <div className="w-[65%] mb-8 text-center text-[#5a6771] text-[13px] font-medium font-['Mulish'] leading-[19px]">The verified email address will be associated with your account. Click on the button below to continue</div>

      <Link to = '/login' className="w-40 mb-[38px] text-center h-10 px-4 py-2 bg-[#ff8600] rounded-md text-[#f6f7f8] text-sm font-semibold font-['Mulish'] leading-normal">
      Continue
      </Link>

    
    </div>
  )
}
