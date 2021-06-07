import React, { useState, createContext, useEffect } from "react";
export const SidebarContext = createContext();
export const SidebarProvider = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {props.children}
    </SidebarContext.Provider>
  );
};
