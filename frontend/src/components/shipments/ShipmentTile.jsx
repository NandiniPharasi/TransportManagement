import MenuButton from "../common/MenuButton";
import "./ShipmentTile.css";

export default function ShipmentTile({ shipment, onSelect }) {
  return (
    <div
      className="shipment-tile"
      onClick={() => onSelect(shipment)}
    >
      <div className="tile-header">
        <h3>{shipment.name}</h3>




        {/* Stop click from bubbling to tile */}
        <div onClick={(e) => e.stopPropagation()}>
          

          <MenuButton
            onEdit={() => alert(`Edit ${shipment.name}`)}
            onFlag={() => alert(`Flag ${shipment.name}`)}
            onDelete={() => alert(`Delete ${shipment.name}`)}
          />
        </div>


      </div>

      <div className="tile-body">
        <p><strong>Class:</strong> {shipment.shipmentClass}</p>
        <p><strong>Status:</strong> {shipment.status}</p>
        <p><strong>Attendance:</strong> {shipment.attendance}%</p>
      </div>
    </div>
  );
}
