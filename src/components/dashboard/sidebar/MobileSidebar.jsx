import React, { useState } from "react";
import { sidebarItems } from "../../../utils/sidebar/sidebar-items";
import ICONS from "../../../assets/dashboard/";
import Sidebar from "./Sidebar";

import styles from "./Sidebar.module.scss";
import { FaTimes } from "react-icons/fa";

const MobileSidebar = ({ isOpen, onClose, current }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.sidebarOverlay} fixed inset-0 z-40 flex items-center justify-start bg-black bg-opacity-50`}
    >
      <Sidebar mobile={true} onClose={onClose} current={current} />
    </div>
  );
};

export default MobileSidebar;
