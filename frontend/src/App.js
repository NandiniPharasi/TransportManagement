import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import TopNav from "./components/layout/TopNav";
import ShipmentList from "./components/shipments/ShipmentList";
import ShipmentDetail from "./components/shipments/ShipmentDetail";
import AddShipmentModal from "./components/shipments/AddShipmentModal";
import Login from "./components/auth/login";

import { isLoggedIn, isAdmin, logout } from "./services/authService";

function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // 🔐 LOGIN PAGE
  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#f4f6f8" }}>
        <TopNav
          onLogout={() => {
            logout();
            setLoggedIn(false);
          }}
        />

        <div style={{ padding: "24px" }}>
          {/* ADMIN ONLY BUTTON */}
          {isAdmin() && (
            <button
              onClick={() => setShowAddModal(true)}
              style={{
                marginBottom: "16px",
                padding: "8px 16px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              ➕ Add Shipment
            </button>
          )}

          {/* ADD MODAL */}
          {showAddModal && (
            <AddShipmentModal onClose={() => setShowAddModal(false)} />
          )}

          {/* LIST */}
          <ShipmentList onSelect={setSelectedShipment} />

          {/* DETAIL VIEW */}
          {selectedShipment && (
            <ShipmentDetail
              shipment={selectedShipment}
              onClose={() => setSelectedShipment(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
