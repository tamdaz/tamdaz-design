import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div className="tz-doc">
        <h1>Les chips</h1>
        <p>
          Les chips sont des éléments compacts qui représentent des entrées, des attributs ou des actions. 
          Ils peuvent être supprimés, cliqués ou simplement affichés.
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
              <td><code className="tz-code">.tz-chip</code></td>
              <td>Classe de base pour le chip</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-chip-close</code></td>
              <td>Bouton de fermeture du chip</td>
            </tr>
            <tr>
              <td><code className="tz-code">.clickable</code></td>
              <td>Rend le chip cliquable</td>
            </tr>
            <tr>
              <td><code className="tz-code">.filled</code></td>
              <td>Chip avec fond rempli</td>
            </tr>
            <tr>
              <td><code className="tz-code">.outlined</code></td>
              <td>Chip avec fond transparent</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>

        <h3>Chip basique</h3>
        <pre className="tz-code-block">{`<span class="tz-chip">Default Chip</span>`}</pre>

        <h3>Chip supprimable</h3>
        <pre className="tz-code-block">{`<span class="tz-chip">
  React
  <button class="tz-chip-close">×</button>
</span>`}</pre>

        <h3>Chip cliquable</h3>
        <pre className="tz-code-block">{`<button class="tz-chip clickable">Click me</button>`}</pre>

        <h3>Chip avec icône</h3>
        <pre className="tz-code-block">{`<span class="tz-chip">
  <span class="material-symbols-outlined">person</span>
  John Doe
</span>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Utilisez des chips pour les tags, filtres ou sélections multiples</li>
          <li>Gardez le texte court (1-3 mots)</li>
          <li>La classe <code className="tz-code">.clickable</code> ajoute un curseur pointer et un effet active</li>
          <li>Les chips s'adaptent automatiquement à la palette de couleurs</li>
        </ul>
      </div>
    );
  },

  "Basic Chips": () => {
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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <span className="tz-chip">Default Chip</span>
          <span className="tz-chip">Another Chip</span>
          <span className="tz-chip">Tag</span>
        </div>
      </div>
    );
  },
  "Deletable Chips": () => {
    const [chips, setChips] = useState([
      { id: 1, label: "React" },
      { id: 2, label: "TypeScript" },
      { id: 3, label: "CSS" },
      { id: 4, label: "Vite" },
    ]);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleDelete = (id: number) => {
      setChips(chips.filter((chip) => chip.id !== id));
    };

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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {chips.map((chip) => (
            <span key={chip.id} className="tz-chip">
              {chip.label}
              <button
                className="tz-chip-close"
                onClick={() => handleDelete(chip.id)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    );
  },
  "Clickable Chips": () => {
    const [selected, setSelected] = useState<string | null>(null);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const tags = ["Technology", "Design", "Development", "Art", "Music"];

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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={`tz-chip clickable ${selected === tag ? "filled" : ""}`}
              onClick={() => setSelected(selected === tag ? null : tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  },
  "Chips with Avatar": () => {
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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <span className="tz-chip">
            <span className="tz-chip-avatar">A</span>
            Alice
          </span>
          <span className="tz-chip">
            <span className="tz-chip-avatar">B</span>
            Bob
          </span>
          <span className="tz-chip">
            <span className="tz-chip-avatar">C</span>
            Charlie
          </span>
        </div>
      </div>
    );
  },
  "Filled Chips": () => {
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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <span className="tz-chip filled">Primary</span>
          <span className="tz-chip filled">Active</span>
          <span className="tz-chip filled">Selected</span>
        </div>
      </div>
    );
  },
};
