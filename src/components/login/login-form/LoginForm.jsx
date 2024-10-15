import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import MAIL_ICON from "../../../assets/signup/email.svg";

import HELP_MESSAGE_ICON from "../../../assets/signup/help_message.svg";
import LOCK from "../../../assets/signup/lock_open.svg";

export default function LoginForm() {
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for error and loading
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://fe-test.revvex.io/api/admin/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("email", email);

        console.log(response.data.data.user);

        const newUser = {
          id: response.data.data.user.id,
          first_name: response.data.data.user.first_name,
          last_name: response.data.data.user.last_name,
          profile_picture: "/brown.jpg", // default image url
        };
        console.log("newUser", newUser);

        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        addUserToLocalStorage(newUser);

        navigate("/dashboard");
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to add a new user to localStorage
  const addUserToLocalStorage = (newUser) => {
    // Retrieve current users object from localStorage
    const usersFromStorage = JSON.parse(localStorage.getItem("users")) || {};

    // Add the new user to the users object
    const updatedUsers = {
      ...usersFromStorage,
      [newUser.id]: newUser,
    };

    // Save the updated users object back into localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    console.log("New user added:", newUser);
    console.log("Updated users:", updatedUsers);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {" "}
      <div className="md:w-[88.9%] lg:w-[68.9%] bg-white p-[50px] mx-auto mt-[160px] rounded-lg md:shadow-lg md:border md:border-[#dde2e4]">
        <div className=" text-[#1d1d18] text-2xl font-bold font-['Mulish'] leading-normal mb-[12px]">
          Log in to your account
        </div>

        <div className="text-[#5a6771] text-[13px] font-normal font-['Mulish'] leading-[19px] mb-[20px]">
          Proceed to login and setup your organization
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-full border pl-12 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md  focus:outline-none  focus:ring-1 focus:ring-[#ff8600]"
              placeholder="Email"
              required
            />
            <img
              className="absolute top-[15px] left-[20.23px]"
              src={MAIL_ICON}
              alt="User Icon"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-[30px]">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 w-full border pl-12 pr-10 placeholder:text-[#5B6871] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[-0.0045em] font-[Mulish] border-[#DDE2E4] rounded-md focus:outline-none  focus:ring-1 focus:ring-[#ff8600]"
              placeholder="Password"
              required
            />
            <img
              className="absolute top-[10px] left-[20.23px]"
              src={LOCK}
              alt="Lock Icon"
            />
            <span
              className="absolute top-[12px] right-[20.23px] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} color="#B0BABF" />
              ) : (
                <AiFillEye size={20} color="#B0BABF" />
              )}
            </span>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 mb-3 text-center">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`h-10 w-full mb-[33px] bg-[#ff8600] text-[#f6f7f8] rounded-md text-sm font-semibold font-['Mulish'] leading-normal ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-[#83909a] text-[13px] font-normal font-['Mulish'] leading-[19px] mb-[76px]">
          By clicking the button above, you agree to our{" "}
          <span className="text-[#ff8600]">Terms of Service</span> and{" "}
          <span className="text-[#ff8600]">Privacy Policy</span>.
        </div>

        <div className=" text-[#5a6771] text-sm font-normal font-['Mulish'] leading-normal">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#ff8600]  text-sm font-medium">
            Register
          </Link>
        </div>
      </div>

      {/* Get Help */}
      <div className="pr-[110px] pb-3">
        <button className="mt-[39px] md:mt-[156px] ml-auto h-[51px] p-[15px] bg-[#ff8600] rounded-[60.71px] shadow flex gap-[10px] text-white text-sm font-semibold font-['Mulish'] leading-normal">
          <span>Get Help</span>
          <img src={HELP_MESSAGE_ICON} alt="" />
        </button>
      </div>
    </>
  );
}
