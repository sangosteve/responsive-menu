import React, { useState, useContext } from "react";
import "./Header.css";
import { FiMenu } from "react-icons/fi";
import { SidebarContext } from "../../contexts/SidebarContext";

const Header = (props) => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const SidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="HeaderWrapper">
      <FiMenu
        className="sidebar-menu-icon"
        size={18}
        style={{ cursor: "pointer" }}
        onClick={SidebarToggle}
        color="#3d5170"
      />
    </div>
  );
};

export default Header;
