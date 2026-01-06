import React, { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile offcanvas

  const toggleSidebar = () => setSidebarCollapsed((s) => !s);

  const value = useMemo(
    () => ({ sidebarCollapsed, toggleSidebar, sidebarOpen, setSidebarOpen }), 
    [sidebarCollapsed, sidebarOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
