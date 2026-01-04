import "./TopNav.css";

  export default function TopNav({ onLogout, onMenuClick }) {
  return (
    <div className="topnav">
      <span className="hamburger" onClick={onMenuClick}>☰</span>
      <span className="logo">Transport Management System</span>

      <button onClick={onLogout} style={{ float: "right" }}>
        Logout
      </button>

      <nav className="nav-links">
          <span>Home</span>
          <span>Shipments</span>
          <span>Reports</span>
          <span>Help</span>
        </nav>
    </div>
  );
}

