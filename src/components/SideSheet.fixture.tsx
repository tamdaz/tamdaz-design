import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>Side Sheet</h1>
        <p>Le composant Side Sheet affiche un panneau latéral qui glisse depuis le côté de l'écran, idéal pour les formulaires et informations additionnelles.</p>

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
              <td><code className="tz-code">.tz-sidesheet-overlay</code></td>
              <td>Overlay sombre en arrière-plan</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-sidesheet</code></td>
              <td>Conteneur du panneau latéral</td>
            </tr>
            <tr>
              <td><code className="tz-code">.open</code></td>
              <td>État ouvert (à ajouter avec JavaScript)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-sidesheet-header</code></td>
              <td>En-tête du panneau</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-sidesheet-title</code></td>
              <td>Titre du panneau</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-sidesheet-close</code></td>
              <td>Bouton de fermeture</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-sidesheet-body</code></td>
              <td>Corps du panneau (contenu)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-sidesheet-footer</code></td>
              <td>Pied de page du panneau (actions)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.left</code></td>
              <td>Panneau depuis la gauche</td>
            </tr>
            <tr>
              <td><code className="tz-code">.right</code></td>
              <td>Panneau depuis la droite (par défaut)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-sidesheet-container</code></td>
              <td>Conteneur pour le mode inline (pousse le contenu)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-sidesheet-main</code></td>
              <td>Zone de contenu principal (mode inline)</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>
        <pre className="tz-code-block">{`<!-- Mode Overlay (par défaut) -->
<div class="tz-sidesheet-overlay open" onclick="closeSideSheet()"></div>

<div class="tz-sidesheet open">
  <div class="tz-sidesheet-header">
    <h2 class="tz-sidesheet-title">Side Sheet</h2>
    <button class="tz-sidesheet-close" onclick="closeSideSheet()">×</button>
  </div>
  <div class="tz-sidesheet-body">
    <p>Contenu du panneau...</p>
  </div>
  <div class="tz-sidesheet-footer">
    <button class="tz-button">Annuler</button>
    <button class="tz-button">Confirmer</button>
  </div>
</div>

<!-- Mode Inline (pousse le contenu) -->
<div class="tz-sidesheet-container">
  <div class="tz-sidesheet-main">
    <!-- Contenu principal -->
  </div>
  <div class="tz-sidesheet open">
    <!-- Structure identique au mode overlay -->
  </div>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Ajoutez la classe <code className="tz-code">.open</code> pour afficher le panneau</li>
          <li>Cliquer sur l'overlay ferme automatiquement le panneau (mode overlay uniquement)</li>
          <li>Utilisez <code className="tz-code">.left</code> pour un panneau depuis la gauche</li>
          <li>Le panneau est animé avec une transition fluide</li>
          <li>Le footer est optionnel pour les actions</li>
          <li>Mode inline : utilisez <code className="tz-code">.tz-sidesheet-container</code> pour pousser le contenu au lieu de le superposer</li>
        </ul>
      </div>
    );
  },
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
  "Inline Side Sheet (Push Content)": () => {
    const [isOpen, setIsOpen] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div className="tz-sidesheet-container">
        <div className="tz-sidesheet-main">
          <div
            style={{
              padding: "32px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h1>Main Content Area</h1>
            <p>
              Ce side sheet est "inline" - il pousse le contenu principal au lieu de le superposer.
              Cliquez sur le bouton ci-dessous pour voir l'effet.
            </p>
            <button className="tz-button rounded" onClick={() => setIsOpen(true)}>
              Open Inline Sheet
            </button>
            <div>
              <h2>Section 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h2>Section 2</h2>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <h2>Section 3</h2>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
          </div>
        </div>
        <div className={`tz-sidesheet ${isOpen ? "open" : ""}`}>
          <div className="tz-sidesheet-header">
            <h2 className="tz-sidesheet-title">Inline Side Sheet</h2>
            <button className="tz-sidesheet-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="tz-sidesheet-body">
            <p>
              Ce panneau latéral ne superpose pas le contenu principal, mais pousse
              le contenu sur le côté, permettant de voir les deux simultanément.
            </p>
            <div className="tz-sidesheet-section">
              <h3 className="tz-sidesheet-section-title">Avantages</h3>
              <ul>
                <li>Permet de voir le contenu principal et le panneau en même temps</li>
                <li>Idéal pour les formulaires de modification</li>
                <li>Meilleure visibilité sur grands écrans</li>
              </ul>
            </div>
            <div className="tz-sidesheet-section">
              <h3 className="tz-sidesheet-section-title">Utilisation</h3>
              <p>
                Utilisez la classe <code className="tz-code">.tz-sidesheet-container</code> sur le conteneur parent
                pour activer ce mode.
              </p>
            </div>
          </div>
          <div className="tz-sidesheet-footer">
            <button className="tz-button" onClick={() => setIsOpen(false)}>
              Close
            </button>
            <button className="tz-button">
              Save
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
