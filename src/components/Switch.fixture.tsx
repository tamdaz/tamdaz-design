import { useEffect, useState } from "react";
import { useFixtureInput } from "react-cosmos/client";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Switch": () => {
    const [checked, setChecked] = useState(false);
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
        <label className="tz-switch">
          <input
            type="checkbox"
            className="tz-switch-input"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="tz-switch-slider"></span>
        </label>
      </div>
    );
  },
  "Switch with Label": () => {
    const [checked, setChecked] = useState(true);
    const [label] = useFixtureInput("Label", "Enable notifications");
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
        <label className="tz-switch-label">
          <div className="tz-switch">
            <input
              type="checkbox"
              className="tz-switch-input"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span className="tz-switch-slider"></span>
          </div>
          <span>{label}</span>
        </label>
      </div>
    );
  },
  "Switch with ON/OFF Text": () => {
    const [checked, setChecked] = useState(false);
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
        <label className="tz-switch with-text">
          <input
            type="checkbox"
            className="tz-switch-input"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className="tz-switch-slider"></span>
        </label>
      </div>
    );
  },
  "Multiple Switches": () => {
    const [wifi, setWifi] = useState(true);
    const [bluetooth, setBluetooth] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(true);
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
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <label className="tz-switch-label">
            <div className="tz-switch">
              <input
                type="checkbox"
                className="tz-switch-input"
                checked={wifi}
                onChange={(e) => setWifi(e.target.checked)}
              />
              <span className="tz-switch-slider"></span>
            </div>
            <span>Wi-Fi</span>
          </label>
          <label className="tz-switch-label">
            <div className="tz-switch">
              <input
                type="checkbox"
                className="tz-switch-input"
                checked={bluetooth}
                onChange={(e) => setBluetooth(e.target.checked)}
              />
              <span className="tz-switch-slider"></span>
            </div>
            <span>Bluetooth</span>
          </label>
          <label className="tz-switch-label">
            <div className="tz-switch">
              <input
                type="checkbox"
                className="tz-switch-input"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
              <span className="tz-switch-slider"></span>
            </div>
            <span>Dark Mode</span>
          </label>
          <label className="tz-switch-label">
            <div className="tz-switch">
              <input
                type="checkbox"
                className="tz-switch-input"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              <span className="tz-switch-slider"></span>
            </div>
            <span>Notifications</span>
          </label>
        </div>
      </div>
    );
  },
  "Disabled Switch": () => {
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
        <label className="tz-switch-label">
          <div className="tz-switch">
            <input
              type="checkbox"
              className="tz-switch-input"
              disabled
            />
            <span className="tz-switch-slider"></span>
          </div>
          <span>Disabled option</span>
        </label>
      </div>
    );
  },
};
