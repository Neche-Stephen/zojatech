import React, { useState, useEffect } from "react";
import { sidebarItems } from "../../../utils/sidebar/sidebar-items";
import { useNavigate, Link } from "react-router-dom";
import ICONS from "../../../assets/dashboard/";

import styles from "./Sidebar.module.scss";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ mobile = false, onClose, current }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState(sidebarItems);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  // Set initial clicked item based on the current prop
  useEffect(() => {
    if (current) {
      const updatedItems = sidebarItems.map((item) => ({
        ...item,
        clicked: item.title === current, // Set clicked to true if the title matches the current prop
      }));
      setItems(updatedItems);
    }
  }, [current]);

  // Handle item click and update state
  const handleItemClick = (index) => {
    const updatedItems = items.map((item, i) => ({
      ...item,
      clicked: i === index,
    }));
    setItems(updatedItems);
  };

  // Handle logout functionality
  const handleLogout = () => {
    // Clear localStorage or sessionStorage
    localStorage.removeItem("token"); // Clear the auth token

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div
      className={`${styles.hide_scrollbar} [@media(min-width:340px)]:w-[70%] [@media(min-width:540px)]:w-[47%] [@media(min-width:960px)]:w-[17.4%] lg:fixed top-0 left-0 h-screen overflow-y-auto  bg-white shadow-md flex flex-col justify-between items-center sidebar`}
      onClick={mobile ? (e) => e.stopPropagation() : undefined}
    >
      {/* Close Icon */}
      {mobile && (
        <div className="w-full flex justify-end p-4">
          <FaTimes className="cursor-pointer text-gray-500" onClick={onClose} />
        </div>
      )}

      {/* Logo */}
      <Link to="/" className="">
        <img src={ICONS.LOGO} alt="Buddy" className="mb-[42px] mt-[29px]" />
      </Link>

      {/* Sidebar Items */}
      <div className="flex-1 w-full  flex flex-col items-center mb-[416px]">
        {items.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`w-[80%] mb-2 py-4 px-8 flex items-center space-x-2 ${
              item.clicked
                ? "text-[#ff8600] bg-white rounded-2xl shadow"
                : "text-[#808086]"
            }  text-sm font-medium font-['Lexend'] leading-[19.19px] tracking-tight`}
            onClick={() => handleItemClick(index)}
          >
            <img src={item.icon} alt={item.title} className="h-6 w-6" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>

      {/* Profile & Logout */}
      <div className="border w-full pb-4">
        <div className="flex flex-col items-center gap-y-[6px]">
          <img
            src={ICONS.THERESA}
            alt="Theresa Milly"
            className="h-10 w-10 rounded-full"
          />

          <div className="text-center mb-3">
            <div className="text-[#3a3a45] text-lg font-medium font-['Lexend'] leading-normal tracking-tight">
              {(loggedInUser &&
                loggedInUser.first_name + " " + loggedInUser.last_name) ||
                "Theresa Milly"}
            </div>
            <div className="text-[#808086] text-xs font-normal font-['Lexend'] leading-none tracking-tight">
              Influencer
            </div>
          </div>
        </div>
        <button
          className="w-[68%] mx-auto py-3 flex  border-gray-200 bg-[#ff8600]/20 rounded-xl justify-center items-center gap-1 text-[#ff8600] text-sm font-medium font-['Lexend'] leading-[19.19px] tracking-tight"
          onClick={handleLogout}
        >
          <img src={ICONS.LOGOUT} alt="" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
