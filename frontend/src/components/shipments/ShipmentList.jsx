import { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_SHIPMENTS } from "../../graphql/queries";
import { isAdmin } from "../../utils/auth";

import ShipmentTile from "./ShipmentTile";
import ShipmentGrid from "./ShipmentGrid";
import "./ShipmentList.css";

export default function ShipmentList({ onSelect }) {
  const [view, setView] = useState("tile");
  const admin = isAdmin();

  const { data, loading, error } = useQuery(GET_SHIPMENTS, {
    variables: { page: 0, size: 10 }
  });

  if (loading) return <p>Loading shipments...</p>;
  if (error) return <p>Error loading shipments</p>;

  const shipments = data.shipments;

  return (
    <>
      {admin && (
        <div style={{ marginBottom: "16px" }}>
          <button>+ Add Shipment</button>
        </div>
      )}

      <div className="view-toggle">
        <button
          className={view === "tile" ? "active" : ""}
          onClick={() => setView("tile")}
        >
          Tile View
        </button>
        <button
          className={view === "grid" ? "active" : ""}
          onClick={() => setView("grid")}
        >
          Grid View
        </button>
      </div>

      {view === "tile" ? (
        <div className="tile-container">
          {shipments.map((s) => (
            <ShipmentTile
              key={s.id}
              shipment={s}
              onSelect={onSelect}
              isAdmin={admin}
            />
          ))}
        </div>
      ) : (
        <ShipmentGrid
          shipments={shipments}
          onSelect={onSelect}
          isAdmin={admin}
        />
      )}
    </>
  );
}
