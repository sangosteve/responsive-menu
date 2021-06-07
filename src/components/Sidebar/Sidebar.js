import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import "./Sidebar.css";

import {
  FiActivity,
  FiArrowLeftCircle,
  FiBarChart2,
  FiCompass,
  FiLayers,
} from "react-icons/fi";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={sidebarOpen ? "SidebarWrapper open" : "SidebarWrapper"}>
      <div className="SidebarHeader">
        <div className="SidebarHeaderTitle">
          <h5>Dashboard App</h5>
        </div>
        <FiArrowLeftCircle
          size={20}
          onClick={sidebarToggle}
          className="sidebarCloseIcon"
        />
      </div>
      <ul className="SidebarMenu">
        <li>
          <FiCompass className="sidebar-icon" /> <a href="/">Dashboard</a>
        </li>
        <li>
          <FiActivity /> <a href="/">Sales</a>
        </li>
        <li>
          <FiLayers /> <a href="/">Inventory</a>
        </li>
        <li>
          <FiBarChart2 /> <a href="/">Accounts</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
