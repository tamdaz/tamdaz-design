import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Modal": () => {
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
          Open Modal
        </button>

        <div className={`tz-modal-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
          <div className="tz-modal" onClick={(e) => e.stopPropagation()}>
            <div className="tz-modal-header">
              <h2 className="tz-modal-title">Modal Title</h2>
              <button className="tz-modal-close" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>
            <div className="tz-modal-body">
              <p>
                This is a basic modal component. You can put any content here.
                Click outside or press the close button to dismiss.
              </p>
            </div>
            <div className="tz-modal-footer">
              <button className="tz-button" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button className="tz-button" onClick={() => setIsOpen(false)}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  "Small Modal": () => {
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
          Open Small Modal
        </button>

        <div className={`tz-modal-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
          <div className="tz-modal small" onClick={(e) => e.stopPropagation()}>
            <div className="tz-modal-header">
              <h2 className="tz-modal-title">Confirm</h2>
              <button className="tz-modal-close" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>
            <div className="tz-modal-body">
              <p>Are you sure you want to proceed?</p>
            </div>
            <div className="tz-modal-footer">
              <button className="tz-button" onClick={() => setIsOpen(false)}>
                No
              </button>
              <button className="tz-button" onClick={() => setIsOpen(false)}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  "Modal with Form": () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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
          Open Form Modal
        </button>

        <div className={`tz-modal-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
          <div className="tz-modal" onClick={(e) => e.stopPropagation()}>
            <div className="tz-modal-header">
              <h2 className="tz-modal-title">Contact Form</h2>
              <button className="tz-modal-close" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>
            <div className="tz-modal-body">
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="tz-input-group">
                  <label className="tz-input-label">Name</label>
                  <input
                    type="text"
                    className="tz-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="tz-input-group">
                  <label className="tz-input-label">Email</label>
                  <input
                    type="email"
                    className="tz-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="tz-modal-footer">
              <button className="tz-button" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button className="tz-button" onClick={() => setIsOpen(false)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  "Large Modal": () => {
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
          Open Large Modal
        </button>

        <div className={`tz-modal-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
          <div className="tz-modal large" onClick={(e) => e.stopPropagation()}>
            <div className="tz-modal-header">
              <h2 className="tz-modal-title">Large Content</h2>
              <button className="tz-modal-close" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>
            <div className="tz-modal-body">
              <p>
                This is a large modal that can contain a lot of content. It will
                automatically become scrollable if the content exceeds the maximum
                height.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
            </div>
            <div className="tz-modal-footer">
              <button className="tz-button" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
