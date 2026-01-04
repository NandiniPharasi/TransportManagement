import "./ShipmentGrid.css";

export default function ShipmentGrid({ shipments, onSelect }) {
  return (
    <table className="shipment-grid">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Class</th>
          <th>Age</th>
          <th>Status</th>
          <th>Attendance</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Subjects</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {shipments.map((s) => (
          <tr key={s.id} onClick={() => onSelect(s)}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.shipmentClass}</td>
            <td>{s.age}</td>
            <td>{s.status}</td>
            <td>{s.attendance}%</td>
            <td>{s.origin}</td>
            <td>{s.destination}</td>
            <td>{s.subjects.join(", ")}</td>
            <td>{s.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
