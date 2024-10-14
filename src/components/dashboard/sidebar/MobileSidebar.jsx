import React, { useState } from "react";
import { sidebarItems } from "../../../utils/sidebar/sidebar-items";
import ICONS from "../../../assets/dashboard/";

import styles from "./Sidebar.module.scss";
import { FaTimes } from "react-icons/fa";

const MobileSidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [items, setItems] = useState(sidebarItems);

  // Handle item click and update state
  const handleItemClick = (index) => {
    const updatedItems = items.map((item, i) => ({
      ...item,
      clicked: i === index, // Only the clicked item becomes true, others false
    }));
    setItems(updatedItems);
  };

  return (
    <div className={`${styles.sidebarOverlay} fixed inset-0 z-40 flex items-center justify-start bg-black bg-opacity-50`}
    onClick={onClose}>
      <div
        className={`${styles.hide_scrollbar} [@media(min-width:340px)]:w-[70%] sm:w-[47%] h-screen overflow-y-auto  bg-white shadow-md flex flex-col justify-between items-center `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo */}
        <div className="">
          <img src={ICONS.LOGO} alt="Buddy" className="mb-[42px] mt-[29px]" />
        </div>

        {/* Sidebar Items */}
        <div className="flex-1 w-full  flex flex-col items-center mb-[416px]">
          {items.map((item, index) => (
            <button
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
            </button>
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
                Theresa milly
              </div>
              <div className="text-[#808086] text-xs font-normal font-['Lexend'] leading-none tracking-tight">
                Influencer
              </div>
            </div>
          </div>
          <button className="w-[68%] mx-auto py-3 flex  border-gray-200 bg-[#ff8600]/20 rounded-xl justify-center items-center gap-1 text-[#ff8600] text-sm font-medium font-['Lexend'] leading-[19.19px] tracking-tight">
            <img src={ICONS.LOGOUT} alt="" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
