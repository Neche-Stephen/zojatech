import React, {useState, useEffect} from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
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
    { title: "New Members", value: "125", icon: ICONS.TOTAL_CHANNELS },
    { title: "   All Impressions", value: "789", icon: ICONS.TOTAL_CHANNELS },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap">

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={toggleSidebar} />

        {/* Left Sidebar */}
      <div className="hidden lg:block w-[17.4%] ">
        <Sidebar />
      </div>


        {/* Main Content */}
      <div className="w-full md:w-[68.1%] lg:w-[58.1%] px-8  bg-[#F6F6F6]">

        {/* Mobile Navbar */}
        <div className="flex justify-between items-center mt-4 sm:mt-10 lg:hidden">
             <div><img src={ICONS.LOGO_TRANSPARENT} alt="" /></div>
             <BsMenuButtonWide onClick={toggleSidebar} style={{cursor:"pointer"}} />
        </div>

        <DashboardNavbar />

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
      <div className="w-full md:w-[31.9%] lg:w-[24.9%]  bg-[#F6F6F6]">
        <div>
          <Revenue />
        </div>

        <div>
            <TrendingNews />
        </div>
      </div>

    </div>
  );
}
