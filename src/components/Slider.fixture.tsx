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
        <h1>Slider Component</h1>
        <p>
          Les sliders permettent aux utilisateurs de sélectionner une valeur dans une plage en déplaçant un curseur.
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
              <td><code className="tz-code">.tz-slider</code></td>
              <td>Classe de base pour le slider</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemples de code HTML</h2>

        <h3>Slider basique</h3>
        <pre className="tz-code-block">{`<input type="range" class="tz-slider" min="0" max="100" value="50">`}</pre>

        <h3>Slider avec label</h3>
        <pre className="tz-code-block">{`<div class="tz-input-group">
  <label class="tz-input-label">Volume: 75%</label>
  <input type="range" class="tz-slider" min="0" max="100" value="75">
</div>`}</pre>

        <h3>Slider avec min/max personnalisés</h3>
        <pre className="tz-code-block">{`<input type="range" class="tz-slider" min="-10" max="10" step="0.5" value="0">`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Utilisez les attributs <code className="tz-code">min</code>, <code className="tz-code">max</code>, et <code className="tz-code">step</code> pour contrôler la plage</li>
          <li>Affichez toujours la valeur actuelle pour l'utilisateur</li>
          <li>Le slider s'adapte à la couleur primaire du thème</li>
          <li>Compatible avec tous les navigateurs modernes</li>
        </ul>
      </div>
    );
  },

  "Basic Slider": () => {
    const [value, setValue] = useState(50);
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
        <div style={{ width: "500px" }}>
          <input
            type="range"
            className="tz-slider"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
      </div>
    );
  },
  "Slider with Label": () => {
    const [value, setValue] = useState(75);
    const [label] = useFixtureInput("Label", "Volume");
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
        <div style={{ width: "500px" }}>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>{label}</span>
              <span className="tz-slider-value">{value}%</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    );
  },
  "Custom Range Slider": () => {
    const [value, setValue] = useState(25);
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
        <div style={{ width: "500px" }}>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>Temperature</span>
              <span className="tz-slider-value">{value}°C</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="-20"
              max="50"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    );
  },
  "Multiple Sliders": () => {
    const [red, setRed] = useState(100);
    const [green, setGreen] = useState(150);
    const [blue, setBlue] = useState(200);
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
        <div style={{ width: "500px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>Red</span>
              <span className="tz-slider-value">{red}</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="0"
              max="255"
              value={red}
              onChange={(e) => setRed(Number(e.target.value))}
            />
          </div>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>Green</span>
              <span className="tz-slider-value">{green}</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="0"
              max="255"
              value={green}
              onChange={(e) => setGreen(Number(e.target.value))}
            />
          </div>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>Blue</span>
              <span className="tz-slider-value">{blue}</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => setBlue(Number(e.target.value))}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "80px",
              backgroundColor: `rgb(${red}, ${green}, ${blue})`,
              border: "2px solid var(--first-color)",
            }}
          />
        </div>
      </div>
    );
  },
};
