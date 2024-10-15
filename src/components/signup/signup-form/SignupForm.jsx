import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import MAIL_ICON from "../../../assets/signup/email.svg";
import HELP_MESSAGE_ICON from "../../../assets/signup/help_message.svg";
import USER from "../../../assets/signup/user.svg";
import LOCK from "../../../assets/signup/lock_open.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
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
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

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
        console.log(response);

        navigate("/confirm-email");
      } else {
        setError(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      setError(
        error.response?.data?.message || "Failed to register. Please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="md:w-[88.9%] lg:w-[68.9%] bg-white p-[50px] mx-auto mt-[160px] rounded-lg md:shadow md:border md:border-[#dde2e4]">
        <div className=" text-[#1d1d18] text-2xl font-bold font-['Mulish'] leading-normal mb-[12px]">
          Register your account
        </div>

        <div className="text-[#5a6771] text-[13px] font-normal font-['Mulish'] leading-[19px] mb-[20px]">
          Proceed to create an account and set up your organization
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between sm:flex-nowrap gap-x-[19px] mb-3">
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
                alt="User Icon"
              />
            </div>
            <div className="relative w-full sm:w-[47.6%]">
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
                alt="User Icon"
              />
            </div>
          </div>

          <div className="relative mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-10 w-full border pl-12 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8600]"
              placeholder="Work Email"
              required
            />
            <img
              className="absolute top-[15px] left-[20.23px]"
              src={MAIL_ICON}
              alt="Mail Icon"
            />
          </div>

          <div className="relative mb-[30px]">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="h-10 w-full border pl-12 pr-10 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8600]"
              placeholder="Password"
              required
            />
            <img
              className="absolute top-[10px] left-[20.23px]"
              src={LOCK}
              alt="Lock Icon"
            />
            <span
              className="absolute top-[10px] right-[20.23px] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} color="#B0BABF" />
              ) : (
                <AiFillEye size={20} color="#B0BABF" />
              )}
            </span>
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <button
            type="submit"
            className="h-10 w-full mb-[33px] bg-[#ff8600] text-[#f6f7f8] rounded-md text-sm font-semibold font-['Mulish'] leading-normal"
          >
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
          <Link to="/login" className="text-[#ff8600] text-sm font-medium">
            Login
          </Link>
        </div>
      </div>

      <div className="pr-[110px] pb-3">
        <button className="mt-[39px] md:mt-[39px] ml-auto h-[51px] p-[15px] bg-[#ff8600] rounded-[60.71px] shadow flex gap-[10px] text-white text-sm font-semibold font-['Mulish'] leading-normal">
          <span>Get Help</span>
          <img src={HELP_MESSAGE_ICON} alt="" />
        </button>
      </div>
    </>
  );
}
