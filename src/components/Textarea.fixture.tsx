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
        <h1>Textarea Component</h1>
        <p>
          Les champs de texte à ligne multiples permettent aux utilisateurs d'entrer du texte sur plusieurs lignes, 
          idéal pour les commentaires, descriptions ou messages longs.
        </p>

        <h2>Les classes CSS</h2>
        <table className="tz-doc-table">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="tz-code">.tz-textarea</code></td>
              <td>Classe de base pour le textarea</td>
            </tr>
            <tr>
              <td><code className="tz-code">.error</code></td>
              <td>État d'erreur avec bordure rouge</td>
            </tr>
            <tr>
              <td><code className="tz-code">.no-resize</code></td>
              <td>Désactive le redimensionnement</td>
            </tr>
            <tr>
              <td><code className="tz-code">.auto-resize</code></td>
              <td>Ajustement automatique de la hauteur</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>

        <h3>Textarea basique</h3>
        <pre className="tz-code-block">{`<textarea class="tz-textarea" placeholder="Enter your message..."></textarea>`}</pre>

        <h3>Textarea avec label</h3>
        <pre className="tz-code-block">{`<div class="tz-input-group">
  <label class="tz-input-label">Description</label>
  <textarea class="tz-textarea" placeholder="Describe your project..."></textarea>
</div>`}</pre>

        <h3>Textarea avec erreur</h3>
        <pre className="tz-code-block">{`<div class="tz-input-group">
  <label class="tz-input-label">Message</label>
  <textarea class="tz-textarea error" placeholder="Enter message..."></textarea>
  <span class="tz-input-helper error">Message is required.</span>
</div>`}</pre>

        <h3>Textarea non redimensionnable</h3>
        <pre className="tz-code-block">{`<textarea class="tz-textarea no-resize" placeholder="Fixed size..."></textarea>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Hauteur minimale par défaut : 120px</li>
          <li>Redimensionnable verticalement par défaut</li>
          <li>Utilisez <code className="tz-code">.no-resize</code> pour une taille fixe</li>
          <li>Le focus épaissit la bordure comme pour les inputs</li>
          <li>Compatible avec les classes <code className="tz-code">.tz-input-group</code> et <code className="tz-code">.tz-input-helper</code></li>
        </ul>
      </div>
    );
  },

  "Basic Textarea": () => {
    const [value, setValue] = useState("");
    const [placeholder] = useFixtureInput("Placeholder", "Enter your message...");
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
          <textarea
            className="tz-textarea"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  },
  "Textarea with Label": () => {
    const [value, setValue] = useState("");
    const [label] = useFixtureInput("Label", "Description");
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
          <div className="tz-input-group">
            <label className="tz-input-label">{label}</label>
            <textarea
              className="tz-textarea"
              placeholder="Write a detailed description..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span className="tz-input-helper">
              {value.length} / 500 characters
            </span>
          </div>
        </div>
      </div>
    );
  },
  "No Resize Textarea": () => {
    const [value, setValue] = useState("");
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
          <textarea
            className="tz-textarea no-resize"
            placeholder="This textarea cannot be resized..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  },
};
