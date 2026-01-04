export default function AddShipmentButton() {
  return (
    <div style={{ padding: 16 }}>
      <button
        onClick={() => alert("Add Shipment clicked (Admin only)")}
        style={{
          padding: "10px 16px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: 4
        }}
      >
        + Add Shipment
      </button>
    </div>
  );
}
