import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaWpforms,
  FaTable,
} from "react-icons/fa";

function Sidebar({ collapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="logo">
        <span>⚡</span>
        {!collapsed && <h2>Gaurav's</h2>}
      </div>

      <NavLink to="/" className="menu">
        <FaTachometerAlt className="menu-icon" />
        {!collapsed && <span className="menu-text">Dashboard</span>}
      </NavLink>

      <NavLink to="/forms" className="menu">
        <FaWpforms className="menu-icon" />
        {!collapsed && <span className="menu-text">Forms</span>}
      </NavLink>

      <NavLink to="/datatable" className="menu">
        <FaTable className="menu-icon" />
        {!collapsed && <span className="menu-text">Data Table</span>}
      </NavLink>

      <NavLink to="/users" className="menu">
        <FaUsers className="menu-icon" />
        {!collapsed && <span className="menu-text">Users</span>}
      </NavLink>
    </aside>
  );
}

export default Sidebar;
