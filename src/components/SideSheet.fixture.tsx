import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Side Sheet": () => {
    const [isOpen, setIsOpen] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="tz-button rounded" onClick={() => setIsOpen(true)}>
          Open Side Sheet
        </button>

        <div className={`tz-sidesheet-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />
        <div className={`tz-sidesheet ${isOpen ? "open" : ""}`}>
          <div className="tz-sidesheet-header">
            <h2 className="tz-sidesheet-title">Side Sheet</h2>
            <button className="tz-sidesheet-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="tz-sidesheet-body">
            <p>
              This is a side sheet component, perfect for displaying additional
              information or forms without leaving the current page.
            </p>
            <p>
              It slides in from the right side of the screen and can contain any
              content you need.
            </p>
          </div>
          <div className="tz-sidesheet-footer">
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  },
  "Side Sheet with Form": () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="tz-button rounded" onClick={() => setIsOpen(true)}>
          Add User
        </button>

        <div className={`tz-sidesheet-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />
        <div className={`tz-sidesheet ${isOpen ? "open" : ""}`}>
          <div className="tz-sidesheet-header">
            <h2 className="tz-sidesheet-title">Add New User</h2>
            <button className="tz-sidesheet-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="tz-sidesheet-body">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="tz-input-group">
                <label className="tz-input-label">Full Name</label>
                <input
                  type="text"
                  className="tz-input"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="tz-input-group">
                <label className="tz-input-label">Email Address</label>
                <input
                  type="email"
                  className="tz-input"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="tz-input-group">
                <label className="tz-input-label">Role</label>
                <input
                  type="text"
                  className="tz-input"
                  placeholder="Enter role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="tz-sidesheet-footer">
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Create User
            </button>
          </div>
        </div>
      </div>
    );
  },
  "Side Sheet with Sections": () => {
    const [isOpen, setIsOpen] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="tz-button rounded" onClick={() => setIsOpen(true)}>
          View Details
        </button>

        <div className={`tz-sidesheet-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />
        <div className={`tz-sidesheet ${isOpen ? "open" : ""}`}>
          <div className="tz-sidesheet-header">
            <h2 className="tz-sidesheet-title">Product Details</h2>
            <button className="tz-sidesheet-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="tz-sidesheet-body">
            <div className="tz-sidesheet-section">
              <h3 className="tz-sidesheet-section-title">General Information</h3>
              <p><strong>Name:</strong> Premium Product</p>
              <p><strong>SKU:</strong> PRD-001</p>
              <p><strong>Category:</strong> Electronics</p>
            </div>
            <div className="tz-sidesheet-section">
              <h3 className="tz-sidesheet-section-title">Pricing</h3>
              <p><strong>Price:</strong> $299.99</p>
              <p><strong>Discount:</strong> 10%</p>
              <p><strong>Final Price:</strong> $269.99</p>
            </div>
            <div className="tz-sidesheet-section">
              <h3 className="tz-sidesheet-section-title">Inventory</h3>
              <p><strong>In Stock:</strong> 45 units</p>
              <p><strong>Reserved:</strong> 5 units</p>
              <p><strong>Available:</strong> 40 units</p>
            </div>
          </div>
          <div className="tz-sidesheet-footer">
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Close
            </button>
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  },
  "Narrow Side Sheet": () => {
    const [isOpen, setIsOpen] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="tz-button rounded" onClick={() => setIsOpen(true)}>
          Open Narrow Sheet
        </button>

        <div className={`tz-sidesheet-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />
        <div className={`tz-sidesheet narrow ${isOpen ? "open" : ""}`}>
          <div className="tz-sidesheet-header">
            <h2 className="tz-sidesheet-title">Quick Info</h2>
            <button className="tz-sidesheet-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="tz-sidesheet-body">
            <p>This is a narrower side sheet, perfect for quick information or settings.</p>
          </div>
          <div className="tz-sidesheet-footer">
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  },
  "Left Side Sheet": () => {
    const [isOpen, setIsOpen] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="tz-button rounded" onClick={() => setIsOpen(true)}>
          Open from Left
        </button>

        <div className={`tz-sidesheet-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)} />
        <div className={`tz-sidesheet left ${isOpen ? "open" : ""}`}>
          <div className="tz-sidesheet-header">
            <h2 className="tz-sidesheet-title">Left Side Sheet</h2>
            <button className="tz-sidesheet-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="tz-sidesheet-body">
            <p>This side sheet slides in from the left side instead of the right.</p>
          </div>
          <div className="tz-sidesheet-footer">
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  },
};
