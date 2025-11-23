import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Alerts": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="tz-alert">
            <span className="tz-alert-icon material-symbols-outlined">info</span>
            <div className="tz-alert-content">
              <p className="tz-alert-message">This is an informational alert.</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
  "Alert with Title": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="tz-alert">
          <span className="tz-alert-icon material-symbols-outlined">info</span>
          <div className="tz-alert-content">
            <h3 className="tz-alert-title">Information</h3>
            <p className="tz-alert-message">
              This alert has a title and a longer message to provide more context.
            </p>
          </div>
        </div>
      </div>
    </div>
  },
  "Dismissible Alert": () => {
    const [visible, setVisible] = useState(true);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleDismiss = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 2000);
    };

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div style={{ width: "600px" }}>
        {visible && (
          <div className="tz-alert">
            <span className="tz-alert-icon material-symbols-outlined">check_circle</span>
            <div className="tz-alert-content">
              <h3 className="tz-alert-title">Success!</h3>
              <p className="tz-alert-message">
                Your changes have been saved successfully.
              </p>
            </div>
            <button className="tz-alert-close" onClick={handleDismiss}>
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  },
  "Alert Variants": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="tz-alert">
          <span className="tz-alert-icon material-symbols-outlined">info</span>
          <div className="tz-alert-content">
            <p className="tz-alert-message">Default alert variant</p>
          </div>
        </div>
        <div className="tz-alert filled">
          <span className="tz-alert-icon material-symbols-outlined">info</span>
          <div className="tz-alert-content">
            <p className="tz-alert-message">Filled alert variant</p>
          </div>
        </div>
        <div className="tz-alert outlined">
          <span className="tz-alert-icon material-symbols-outlined">info</span>
          <div className="tz-alert-content">
            <p className="tz-alert-message">Outlined alert variant</p>
          </div>
        </div>
        <div className="tz-alert bordered">
          <span className="tz-alert-icon material-symbols-outlined">info</span>
          <div className="tz-alert-content">
            <p className="tz-alert-message">Bordered alert variant</p>
          </div>
        </div>
      </div>
    </div>
  },
  "Alert Types": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="tz-alert success bordered">
          <span className="tz-alert-icon material-symbols-outlined">check_circle</span>
          <div className="tz-alert-content">
            <h3 className="tz-alert-title">Success</h3>
            <p className="tz-alert-message">Operation completed successfully.</p>
          </div>
        </div>
        <div className="tz-alert warning bordered">
          <span className="tz-alert-icon material-symbols-outlined">warning</span>
          <div className="tz-alert-content">
            <h3 className="tz-alert-title">Warning</h3>
            <p className="tz-alert-message">Please review your input.</p>
          </div>
        </div>
        <div className="tz-alert error bordered">
          <span className="tz-alert-icon material-symbols-outlined">error</span>
          <div className="tz-alert-content">
            <h3 className="tz-alert-title">Error</h3>
            <p className="tz-alert-message">Something went wrong.</p>
          </div>
        </div>
      </div>
    </div>
  },
  "Filled Alert Types": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="tz-alert success filled">
          <span className="tz-alert-icon material-symbols-outlined">check_circle</span>
          <div className="tz-alert-content">
            <h3 className="tz-alert-title">Success</h3>
            <p className="tz-alert-message">Your profile has been updated.</p>
          </div>
        </div>
        <div className="tz-alert warning filled">
          <span className="tz-alert-icon material-symbols-outlined">warning</span>
          <div className="tz-alert-content">
            <h3 className="tz-alert-title">Warning</h3>
            <p className="tz-alert-message">Your session will expire soon.</p>
          </div>
        </div>
        <div className="tz-alert error filled">
          <span className="tz-alert-icon material-symbols-outlined">error</span>
          <div className="tz-alert-content">
            <h3 className="tz-alert-title">Error</h3>
            <p className="tz-alert-message">Failed to save changes.</p>
          </div>
        </div>
      </div>
    </div>
  },
};
