import { useState, useRef, useEffect } from "react";
import "./MenuButton.css";

export default function MenuButton({ onEdit, onFlag, onDelete }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="menu-button-container" ref={ref}>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
      >
        ⋮
      </button>

      {open && (
        <div className="menu-dropdown">
          <div onClick={() => { onEdit?.(); setOpen(false); }}>Edit</div>
          <div onClick={() => { onFlag?.(); setOpen(false); }}>Flag</div>
          <div className="danger" onClick={() => { onDelete?.(); setOpen(false); }}>
            Delete
          </div>
        </div>
      )}
    </div>
  );
}
