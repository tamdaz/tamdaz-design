import { useEffect } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div className="tz-doc">
        <h1>Les fils d'Ariane <i>(Breadcrumb)</i></h1>
        <p>
          Les fils d'Ariane affichent le chemin de navigation actuel de l'utilisateur 
          et permettent de revenir facilement aux pages précédentes.
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
              <td><code className="tz-code">.tz-breadcrumb</code></td>
              <td>Conteneur principal du breadcrumb</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-breadcrumb-item</code></td>
              <td>Élément individuel du breadcrumb</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-breadcrumb-separator</code></td>
              <td>Séparateur entre les éléments</td>
            </tr>
            <tr>
              <td><code className="tz-code">.current</code></td>
              <td>Page actuelle (non cliquable)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.with-background</code></td>
              <td>Breadcrumb avec fond et bordure</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>

        <h3>Breadcrumb basique</h3>
        <pre className="tz-code-block">{`<nav class="tz-breadcrumb">
  <a href="/" class="tz-breadcrumb-item">Home</a>
  <span class="tz-breadcrumb-separator">/</span>
  <a href="/category" class="tz-breadcrumb-item">Category</a>
  <span class="tz-breadcrumb-separator">/</span>
  <span class="tz-breadcrumb-item current">Current Page</span>
</nav>`}</pre>

        <h3>Breadcrumb avec fond</h3>
        <pre className="tz-code-block">{`<nav class="tz-breadcrumb with-background">
  <a href="/" class="tz-breadcrumb-item">Home</a>
  <span class="tz-breadcrumb-separator">/</span>
  <a href="/category" class="tz-breadcrumb-item">Category</a>
  <span class="tz-breadcrumb-separator">/</span>
  <span class="tz-breadcrumb-item current">Current Page</span>
</nav>`}</pre>

        <h3>Breadcrumb avec icônes</h3>
        <pre className="tz-code-block">{`<nav class="tz-breadcrumb">
  <a href="/" class="tz-breadcrumb-item">
    <span class="material-symbols-outlined">home</span>
    Home
  </a>
  <span class="tz-breadcrumb-separator">/</span>
  <a href="/docs" class="tz-breadcrumb-item">
    <span class="material-symbols-outlined">description</span>
    Docs
  </a>
  <span class="tz-breadcrumb-separator">/</span>
  <span class="tz-breadcrumb-item current">Guide</span>
</nav>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Utilisez <code className="tz-code">&lt;nav&gt;</code> comme conteneur pour l'accessibilité</li>
          <li>La classe <code className="tz-code">.current</code> désactive le pointeur sur la page actuelle</li>
          <li>Les séparateurs peuvent être personnalisés (/, ›, →, etc.)</li>
          <li>Le breadcrumb est responsive et s'adapte automatiquement</li>
          <li>Chaque élément a un effet hover pour améliorer l'UX</li>
        </ul>
      </div>
    );
  },

  "Basic Breadcrumb": () => {
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
        <nav className="tz-breadcrumb">
          <a href="#" className="tz-breadcrumb-item">Home</a>
          <span className="tz-breadcrumb-separator">/</span>
          <a href="#" className="tz-breadcrumb-item">Category</a>
          <span className="tz-breadcrumb-separator">/</span>
          <span className="tz-breadcrumb-item current">Current Page</span>
        </nav>
      </div>
    );
  },
  "Breadcrumb with Background": () => {
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
        <nav className="tz-breadcrumb with-background">
          <a href="#" className="tz-breadcrumb-item">Home</a>
          <span className="tz-breadcrumb-separator">/</span>
          <a href="#" className="tz-breadcrumb-item">Products</a>
          <span className="tz-breadcrumb-separator">/</span>
          <a href="#" className="tz-breadcrumb-item">Electronics</a>
          <span className="tz-breadcrumb-separator">/</span>
          <span className="tz-breadcrumb-item current">Laptop</span>
        </nav>
      </div>
    );
  },
  "Breadcrumb with Icons": () => {
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
        <nav className="tz-breadcrumb">
          <a href="#" className="tz-breadcrumb-item">
            <span className="tz-breadcrumb-icon">🏠</span>
            Home
          </a>
          <span className="tz-breadcrumb-separator">→</span>
          <a href="#" className="tz-breadcrumb-item">
            <span className="tz-breadcrumb-icon">📁</span>
            Documents
          </a>
          <span className="tz-breadcrumb-separator">→</span>
          <span className="tz-breadcrumb-item current">
            <span className="tz-breadcrumb-icon">📄</span>
            Report.pdf
          </span>
        </nav>
      </div>
    );
  },
  "Compact Breadcrumb": () => {
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
          alignItems: "center"
        }}>
        <nav className="tz-breadcrumb compact">
          <a href="#" className="tz-breadcrumb-item">Home</a>
          <span className="tz-breadcrumb-separator">&gt;</span>
          <a href="#" className="tz-breadcrumb-item">Level 1</a>
          <span className="tz-breadcrumb-separator">&gt;</span>
          <a href="#" className="tz-breadcrumb-item">Level 2</a>
          <span className="tz-breadcrumb-separator">&gt;</span>
          <span className="tz-breadcrumb-item current">Level 3</span>
        </nav>
      </div>
    );
  },
  "Long Breadcrumb": () => {
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
          alignItems: "center"
        }}>
        <div style={{ width: "800px" }}>
          <nav className="tz-breadcrumb with-background">
            <a href="#" className="tz-breadcrumb-item">Dashboard</a>
            <span className="tz-breadcrumb-separator">/</span>
            <a href="#" className="tz-breadcrumb-item">Administration</a>
            <span className="tz-breadcrumb-separator">/</span>
            <a href="#" className="tz-breadcrumb-item">User Management</a>
            <span className="tz-breadcrumb-separator">/</span>
            <a href="#" className="tz-breadcrumb-item">Permissions</a>
            <span className="tz-breadcrumb-separator">/</span>
            <span className="tz-breadcrumb-item current">Edit Role</span>
          </nav>
        </div>
      </div>
    );
  },
};
