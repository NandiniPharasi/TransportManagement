import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {

  const [open, setOpen] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
        {open && <span className="title">TMS</span>}
      </div>

      <div className="menu">
        <div className="menu-item">📊 {open && "Dashboard"}</div>

        <div
          className="menu-item"
          onClick={() => setShowSubmenu(!showSubmenu)}
        >
          🚚 {open && "Shipments"}
        </div>

        {open && showSubmenu && (
          <div className="submenu">
            <div className="submenu-item">All Shipments</div>
            <div className="submenu-item">Pending</div>
          </div>
        )}

        <div className="menu-item">📈 {open && "Reports"}</div>
        <div className="menu-item">⚙ {open && "Settings"}</div>
      </div>
    </div>
  );
}
