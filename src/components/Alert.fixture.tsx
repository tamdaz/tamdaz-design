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
        <h1>Les alertes</h1>
        <p>
          Les alertes permettent d'afficher des messages importants à l'utilisateur. Elles peuvent être soient sous forme
          d'informations, d'avertissements, d'erreurs ou de succès.
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
              <td><code className="tz-code">.tz-alert</code></td>
              <td>Classe de base pour l'alerte</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-alert-icon</code></td>
              <td>Conteneur pour l'icône</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-alert-content</code></td>
              <td>Conteneur pour le contenu (titre + message)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-alert-title</code></td>
              <td>Titre de l'alerte (optionnel)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-alert-message</code></td>
              <td>Message de l'alerte</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-alert-close</code></td>
              <td>Bouton de fermeture (optionnel)</td>
            </tr>
          </tbody>
        </table>

        <h2>Les variantes</h2>
        <table className="tz-doc-table">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="tz-code">.filled</code></td>
              <td>Alerte avec fond rempli de couleur</td>
            </tr>
            <tr>
              <td><code className="tz-code">.outlined</code></td>
              <td>Alerte avec fond transparent et bordure</td>
            </tr>
            <tr>
              <td><code className="tz-code">.bordered</code></td>
              <td>Alerte avec bordure gauche accentuée</td>
            </tr>
            <tr>
              <td><code className="tz-code">.success</code></td>
              <td>Alerte de succès (verte)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.warning</code></td>
              <td>Alerte d'avertissement (jaune)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.error</code></td>
              <td>Alerte d'erreur (rouge)</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>

        <h3>Alerte simple</h3>
        <pre className="tz-code-block">{`<div class="tz-alert">
  <span class="tz-alert-icon material-symbols-outlined">info</span>
  <div class="tz-alert-content">
    <p class="tz-alert-message">This is an informational alert.</p>
  </div>
</div>`}</pre>

        <h3>Alerte avec titre</h3>
        <pre className="tz-code-block">{`<div class="tz-alert">
  <span class="tz-alert-icon material-symbols-outlined">info</span>
  <div class="tz-alert-content">
    <h3 class="tz-alert-title">Information</h3>
    <p class="tz-alert-message">
      This alert has a title and a longer message.
    </p>
  </div>
</div>`}</pre>

        <h3>Alerte avec liste</h3>
        <pre className="tz-code-block">{`<div class="tz-alert">
  <span class="tz-alert-icon material-symbols-outlined">check_circle</span>
  <div class="tz-alert-content">
    <h3 class="tz-alert-title">Success</h3>
    <p class="tz-alert-message">Your action was completed:</p>
    <ul>
      <li>Item 1 was updated</li>
      <li>Item 2 was created</li>
      <li>Notification sent</li>
    </ul>
  </div>
</div>`}</pre>

        <h3>Alerte avec bouton de fermeture</h3>
        <pre className="tz-code-block">{`<div class="tz-alert">
  <span class="tz-alert-icon material-symbols-outlined">warning</span>
  <div class="tz-alert-content">
    <h3 class="tz-alert-title">Warning</h3>
    <p class="tz-alert-message">Please review this information.</p>
  </div>
  <button class="tz-alert-close">×</button>
</div>`}</pre>

        <h3>Alerte de succès remplie</h3>
        <pre className="tz-code-block">{`<div class="tz-alert success filled">
  <span class="tz-alert-icon material-symbols-outlined">check_circle</span>
  <div class="tz-alert-content">
    <h3 class="tz-alert-title">Success</h3>
    <p class="tz-alert-message">Your profile has been updated.</p>
  </div>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>L'icône utilise Material Symbols Outlined - assurez-vous d'inclure la police</li>
          <li>Les alertes sont responsives et s'adaptent à la largeur du conteneur</li>
          <li>Vous pouvez combiner plusieurs classes de variantes (ex: <code className="tz-code">success filled</code>)</li>
          <li>Le bouton de fermeture nécessite du JavaScript pour gérer l'événement de clic</li>
          <li>Les listes (<code className="tz-code">&lt;ul&gt;</code>) dans le contenu sont automatiquement stylisées</li>
        </ul>
      </div>
    );
  },
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
