import React, { useState, useEffect } from "react";
import ICONS from "../../assets/dashboard/";
import { BsMenuButtonWide } from "react-icons/bs";

import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import MobileSidebar from "../../components/dashboard/sidebar/MobileSidebar";
import DashboardNavbar from "../../components/dashboard/dashboard-navbar/DashboardNavbar";
import DashboardCard from "../../components/dashboard/dashboard-card/DashboardCard";
import OverviewChart from "../../components/dashboard/overview-chart/OverviewChart";
import TrendingPosts from "../../components/dashboard/trending-posts/TrendingPosts";
import PotentialMembers from "../../components/dashboard/potential-members/PotentialMembers";
import Revenue from "../../components/dashboard/revenue/Revenue";
import TrendingNews from "../../components/dashboard/trending-news/TrendingNews";
import Watchlist from "../../components/dashboard/watchlist/Watchlist";

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

  // Close sidebar when clicking outside
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
    { title: "New Members", value: "125", icon: ICONS.DASHBOARD_USERS },
    { title: "   All Impressions", value: "789", icon: ICONS.DASHBOARD_ANALYTICS},
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap">
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={toggleSidebar} />

      {/* Left Sidebar */}
      <div className="hidden lg:block w-[17.4%] ">
        <Sidebar />
      </div>

      {/* Main */}
      <div className=" w-full lg:w-[82.6%] bg-[#F6F6F6]">
        {/* Mobile Navbar */}
        <div className="flex justify-between items-center mt-4 sm:mt-10 lg:hidden px-8">
          <div>
            <img src={ICONS.LOGO_TRANSPARENT} alt="" />
          </div>
          <BsMenuButtonWide
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className=" w-full px-8">
          <DashboardNavbar />
        </div>

        <div className="w-full flex flex-wrap md:flex-nowrap">
          {/* Main Content */}
          <div className="w-full md:w-[70.3%] px-8 ">
            <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-between mb-4">
              {dashboardAnalytics.map((item, index) => {
                return <DashboardCard key={index} item={item} />;
              })}
            </div>

            <div className="mb-4">
              <OverviewChart />
            </div>

            <div className="mb-4">
              <TrendingPosts />
            </div>

            <div>
              <PotentialMembers />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-[29.1%]  ">


            <div>
              <Watchlist /> 
            </div>
            <div>
              <Revenue />
            </div>

            <div>
              <TrendingNews />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
