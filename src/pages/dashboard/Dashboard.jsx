import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import ICONS from "../../assets/dashboard/";

import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import DashboardNavbar from "../../components/dashboard/dashboard-navbar/DashboardNavbar";
import DashboardCard from "../../components/dashboard/dashboard-card/DashboardCard";
import OverviewChart from "../../components/dashboard/overview-chart/OverviewChart";
import TrendingPosts from "../../components/dashboard/trending-posts/TrendingPosts";
import PotentialMembers from "../../components/dashboard/potential-members/PotentialMembers";
import Revenue from "../../components/dashboard/revenue/Revenue";
import TrendingNews from "../../components/dashboard/trending-news/TrendingNews";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const dashboardAnalytics = [
    { title: "Total Channels", value: "51", icon: ICONS.TOTAL_CHANNELS },
    { title: "New Members", value: "125", icon: ICONS.TOTAL_CHANNELS },
    { title: "   All Impressions", value: "789", icon: ICONS.TOTAL_CHANNELS },
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap">
        {/* Left Sidebar */}
      <div className="hidden lg:block w-[17.4%] ">
        <Sidebar />
      </div>


        {/* Main Content */}
      <div className="w-full md:w-[68.1%] lg:w-[58.1%] px-8  bg-[#F6F6F6]">

        {/* Mobile Navbar */}
        <div className="block lg:hidden">
             <Button onClick={openDrawer}>Open Drawer</Button>
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

      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-end p-4">
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>

        </div>
        <Sidebar />
      
      </Drawer>
    </div>
  );
}
