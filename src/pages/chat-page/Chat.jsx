import React, { useState, useEffect } from "react";
import ICONS from "../../assets/dashboard/";
import { BsMenuButtonWide } from "react-icons/bs";

import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import MobileSidebar from "../../components/dashboard/sidebar/MobileSidebar";
import DashboardNavbar from "../../components/dashboard/dashboard-navbar/DashboardNavbar";


import ChatApp from "../../components/chat-page/chat-app/ChatApp";

export default function Dashboard() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Toggle Mobile sidebar
  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Close mobile sidebar if screen width exceeds lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile sidebar when clicking outside
  const handleOutsideClick = (e) => {
    if (isMobileSidebarOpen && !e.target.closest(".sidebar")) {
      setIsMobileSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileSidebarOpen]);

  const dashboardAnalytics = [
    { title: "Total Channels", value: "51", icon: ICONS.TOTAL_CHANNELS },
    { title: "New Members", value: "125", icon: ICONS.TOTAL_CHANNELS },
    { title: "   All Impressions", value: "789", icon: ICONS.TOTAL_CHANNELS },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap h-screen">
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={toggleSidebar} current="Messages"/>

      {/* Left Sidebar */}
      <div className="hidden lg:block w-[17.4%] ">
        <Sidebar current="Messages"/>
      </div>

      {/* Main */}
      <div className=" w-full lg:w-[82.6%]  bg-[#F6F6F6] pl-8 pr-[18px]">
        {/* Mobile Navbar */}
        <div className="flex justify-between items-center mt-4 sm:mt-10 lg:hidden">
          <div>
            <img src={ICONS.LOGO_TRANSPARENT} alt="" />
          </div>
          <BsMenuButtonWide
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className=" w-full">
          <DashboardNavbar />
        </div>

        <div className="w-full ">
          <ChatApp />
        </div>
      </div>
    </div>
  );
}
