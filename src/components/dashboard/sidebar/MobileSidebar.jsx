import React, { useState } from "react";
import { sidebarItems } from "../../../utils/sidebar/sidebar-items";
import ICONS from "../../../assets/dashboard/";
import Sidebar from "./Sidebar";

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
    >
      <Sidebar mobile={true} onClose={onClose} />
    </div>
  );
};

export default MobileSidebar;
