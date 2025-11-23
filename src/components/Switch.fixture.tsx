import { useEffect, useState } from "react";
import { useFixtureInput } from "react-cosmos/client";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div className="tz-doc">
        <h1>Switch Component</h1>
        <p>
          Les switches permettent d'activer ou de désactiver une option unique. 
          Ils fournissent un retour visuel immédiat sur l'état actuel.
        </p>

        <h2>Classes CSS</h2>
        <table className="tz-doc-table">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="tz-code">.tz-switch</code></td>
              <td>Conteneur du switch</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-switch-input</code></td>
              <td>Input checkbox caché</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-switch-slider</code></td>
              <td>Élément visuel du switch</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemples de code HTML</h2>

        <h3>Switch basique</h3>
        <pre className="tz-code-block">{`<label class="tz-switch">
  <input type="checkbox" class="tz-switch-input">
  <span class="tz-switch-slider"></span>
</label>`}</pre>

        <h3>Switch avec label</h3>
        <pre className="tz-code-block">{`<div style="display: flex; align-items: center; gap: 12px;">
  <label class="tz-switch">
    <input type="checkbox" class="tz-switch-input" checked>
    <span class="tz-switch-slider"></span>
  </label>
  <span>Enable notifications</span>
</div>`}</pre>

        <h3>Switch désactivé</h3>
        <pre className="tz-code-block">{`<label class="tz-switch">
  <input type="checkbox" class="tz-switch-input" disabled>
  <span class="tz-switch-slider"></span>
</label>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Utilisez pour des options on/off binaires</li>
          <li>Le changement d'état doit prendre effet immédiatement</li>
          <li>Ajoutez toujours un label pour clarifier l'action</li>
          <li>L'état checked est géré via l'attribut HTML standard</li>
          <li>Le switch a un effet focus pour l'accessibilité au clavier</li>
        </ul>
      </div>
    );
  },

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
