import "./ShipmentDetail.css";

function ShipmentDetail({ shipment, onClose }) {
  if (!shipment) return null;

  return (
    <div className="detail-overlay">
      <div className="detail-card">
        <div className="detail-header">
          <h2>{shipment.name}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="detail-body">
          <p><strong>ID:</strong> {shipment.id}</p>
          <p><strong>Class:</strong> {shipment.shipmentClass}</p>
          <p><strong>Age:</strong> {shipment.age}</p>
          <p><strong>Status:</strong> {shipment.status}</p>
          <p><strong>Attendance:</strong> {shipment.attendance}%</p>
          <p>
            <strong>Subjects:</strong>{" "}
            {shipment.subjects?.join(", ")}
          </p>
        </div>

        <div className="detail-footer">
          <button onClick={onClose}>Back</button>
        </div>
      </div>
    </div>
  );
}

/* 🔴 THIS LINE IS MANDATORY */
export default ShipmentDetail;
