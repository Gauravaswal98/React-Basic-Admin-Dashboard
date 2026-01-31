import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="dashboard">
      <Sidebar collapsed={collapsed} />

      <div className="main">
        <Topbar
          title="Dashboard"
          toggleSidebar={() => setCollapsed(!collapsed)}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
