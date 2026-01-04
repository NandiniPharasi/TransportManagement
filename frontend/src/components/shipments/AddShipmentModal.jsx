import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { ADD_SHIPMENT } from "../../graphql/mutation";

export default function AddShipmentModal({ onClose }) {
  const [name, setName] = useState("");
  const [shipmentClass, setShipmentClass] = useState("");
  const [attendance, setAttendance] = useState("");

  const [addShipment, { loading }] = useMutation(ADD_SHIPMENT, {
    refetchQueries: ["GetShipments"]
  });

  const submit = async () => {
    await addShipment({
      variables: {
        input: {
          name,
          shipmentClass,
          attendance: Number(attendance)
        }
      }
    });

    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Add Shipment</h3>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Shipment Class"
          value={shipmentClass}
          onChange={(e) => setShipmentClass(e.target.value)}
        />

        <input
          placeholder="Attendance"
          type="number"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />

        <div className="modal-actions">
          <button onClick={submit} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
