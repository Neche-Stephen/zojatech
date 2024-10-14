import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MAIL_ICON from "../../../assets/signup/email.svg";
import USER from "../../../assets/signup/user.svg";
import LOCK from "../../../assets/signup/lock_open.svg";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

export default function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.post(
        "https://fe-test.revvex.io/api/admin/register",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
        }
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("otp", response.data.data.opt);
        console.log(response.data)
        navigate("/confirm-email");
       
      } else {
        setError(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error)
      setError(error.response?.data?.message || "Failed to register. Please try again");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="md:w-[88.9%] lg:w-[68.9%] bg-white p-[50px] mx-auto mt-[160px] rounded-lg md:shadow md:border md:border-[#dde2e4]">
      <div className=" text-[#1d1d18] text-2xl font-bold font-['Mulish'] leading-normal mb-[12px]">
        Register your account
      </div>

      <div className="text-[#5a6771] text-[13px] font-normal font-['Mulish'] leading-[19px] mb-[20px]">
        Proceed to create account and setup your organization
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between  sm:flex-nowrap gap-x-[19px]  mb-3">
          <div className="relative w-full sm:w-[47.6%] mb-3 sm:mb-0">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="h-10 w-full border pl-12 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md focus:outline-none  focus:ring-1 focus:ring-[#ff8600]"
              placeholder="First Name"
              required
            />
            <img
              className="absolute top-[12px] left-[20.23px]"
              src={USER}
              alt=""
            />
          </div>
          <div className="relative w-full  sm:w-[47.6%]">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="h-10 w-full border pl-12 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md focus:outline-none  focus:ring-1 focus:ring-[#ff8600]"
              placeholder="Last Name"
              required
            />
            <img
              className="absolute top-[12px] left-[20.23px]"
              src={USER}
              alt=""
            />
          </div>
        </div>

        <div className="relative mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-10 w-full border pl-12 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md"
            placeholder="Work Email"
            required
          />
          <img
            className="absolute top-[12px] left-[20.23px]"
            src={USER}
            alt=""
          />
        </div>

        <div className="relative mb-[30px]">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="h-10 w-full border pl-12 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md focus:outline-none  focus:ring-2 focus:ring-[#ff8600]"
            placeholder="Password"
            required
          />
          <img
            className="absolute top-[12px] left-[20.23px]"
            src={USER}
            alt=""
          />
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}
      <button type="submit" className="h-10 w-full mb-[33px] bg-[#ff8600] text-[#f6f7f8]  rounded-md text-sm font-semibold font-['Mulish'] leading-normal">
      {loading ? <ClipLoader size={24} color="#fff" /> : "Create account"}
      </button>
      </form>

     

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
  );
}

