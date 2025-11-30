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
        <h1>Les champs de texte</h1>
        <p>
          Les champs de texte permettent aux utilisateurs d'entrer du texte et d'autres données dans un formulaire.
        </p>
        <h2>
          Classes CSS
        </h2>
        <div style={{ marginBottom: "24px" }}>
          <table className="tz-doc-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code className="tz-code">
                    .tz-input
                  </code>
                </td>
                <td>Classe de base pour l'input</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .tz-input-group
                  </code>
                </td>
                <td>Conteneur pour input avec label et helper text</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .tz-input-label
                  </code>
                </td>
                <td>Label du champ</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .tz-input-helper
                  </code>
                </td>
                <td>Texte d'aide sous le champ</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .rounded
                  </code>
                </td>
                <td>Input avec coins arrondis (pilule)</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .error
                  </code>
                </td>
                <td>État d'erreur avec bordure rouge</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>
          Exemples de code HTML
        </h2>

        <h3>
          Input simple
        </h3>
        <pre className="tz-code-block">{`<input type="text" class="tz-input" placeholder="Enter text...">`}</pre>

        <h3>
          Input avec label
        </h3>
        <pre className="tz-code-block">{`<div class="tz-input-group">
  <label class="tz-input-label">Username</label>
  <input type="text" class="tz-input" placeholder="Enter your username">
</div>`}</pre>

        <h3>
          Input avec texte d'aide
        </h3>
        <pre className="tz-code-block">{`<div class="tz-input-group">
  <label class="tz-input-label">Email</label>
  <input type="email" class="tz-input" placeholder="you@example.com">
  <span class="tz-input-helper">We'll never share your email.</span>
</div>`}</pre>

        <h3>
          Input avec erreur
        </h3>
        <pre className="tz-code-block">{`<div class="tz-input-group">
  <label class="tz-input-label">Password</label>
  <input type="password" class="tz-input error" placeholder="Enter password">
  <span class="tz-input-helper error">Password must be at least 8 characters.</span>
</div>`}</pre>

        <h3>
          Input arrondi
        </h3>
        <pre className="tz-code-block">{`<input type="text" class="tz-input rounded" placeholder="Rounded input">`}</pre>

        <h3>
          Input désactivé
        </h3>
        <pre className="tz-code-block">{`<input type="text" class="tz-input" placeholder="Disabled" disabled>`}</pre>

        <h2>
          États interactifs
        </h2>
        <ul>
          <li><strong>Hover</strong> : Changement de couleur de fond au survol</li>
          <li><strong>Focus</strong> : Bordure épaissie (4px) lors de la saisie</li>
          <li><strong>Error</strong> : Bordure rouge pour indiquer une validation échouée</li>
          <li><strong>Disabled</strong> : Opacité réduite et curseur not-allowed</li>
        </ul>

        <h2>
          Types d'input supportés
        </h2>
        <ul>
          <li><code className="tz-code">type="text"</code> - Texte simple</li>
          <li><code className="tz-code">type="email"</code> - Adresse email</li>
          <li><code className="tz-code">type="password"</code> - Mot de passe</li>
          <li><code className="tz-code">type="number"</code> - Nombre</li>
          <li><code className="tz-code">type="tel"</code> - Numéro de téléphone</li>
          <li><code className="tz-code">type="url"</code> - URL</li>
          <li><code className="tz-code">type="date"</code> - Date</li>
        </ul>

        <h2>
          Notes d'utilisation
        </h2>
        <ul>
          <li>Utilisez toujours un <code className="tz-code">label</code> pour l'accessibilité</li>
          <li>Les inputs ont une largeur de 100% et s'adaptent à leur conteneur</li>
          <li>Le placeholder utilise 50% d'opacité de la couleur du texte</li>
          <li>La bordure s'épaissit au focus pour une meilleure visibilité</li>
          <li>Utilisez <code className="tz-code">box-sizing: border-box</code> pour un dimensionnement cohérent</li>
        </ul>
      </div>
    );
  },
  "Basic Input": () => {
    const [value, setValue] = useState("");
    const [placeholder] = useFixtureInput("Placeholder", "Enter text...");
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
        }}>
        <div style={{ width: "400px" }}>
          <input
            type="text"
            className="tz-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  },
  "Input with Label": () => {
    const [value, setValue] = useState("");
    const [label] = useFixtureInput("Label", "Username");
    const [placeholder] = useFixtureInput("Placeholder", "Enter your username");
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
        <div style={{ width: "400px" }}>
          <div className="tz-input-group">
            <label className="tz-input-label">{label}</label>
            <input
              type="text"
              className="tz-input"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span className="tz-input-helper">This is a helper text</span>
          </div>
        </div>
      </div>
    );
  },
  "Input with Helper on Top": () => {
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
        <div style={{ width: "400px" }}>
          <div className="tz-input-group">
            <label className="tz-input-label">Email</label>
            <span className="tz-input-helper top">We'll never share your email with anyone else.</span>
            <input
              type="email"
              className="tz-input"
              placeholder="Enter your email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  },
  "Input with Error": () => {
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
        <div style={{ width: "400px" }}>
          <div className="tz-input-group">
            <label className="tz-input-label">Email</label>
            <input
              type="email"
              className="tz-input error"
              placeholder="Enter your email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span className="tz-input-helper error">Please enter a valid email address</span>
          </div>
        </div>
      </div>
    );
  },
  "Rounded Input": () => {
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
        <div style={{ width: "400px" }}>
          <input
            type="text"
            className="tz-input rounded"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  },
};
