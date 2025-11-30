import { useEffect } from 'react';
import useColorSelect from '../hooks/useColors';

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>La barre de navigation <i>(Navbars)</i></h1>
        <p>La barre de navigation affiche des éléments de menu de manière verticale.</p>

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
              <td><code className="tz-code">.tz-navbar</code></td>
              <td>Conteneur de la barre de navigation</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-navbar-item</code></td>
              <td>Élément de menu dans la navbar</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-application</code></td>
              <td>Conteneur de l'application avec navbar</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>
        <pre className="tz-code-block">{`<div class="tz-application">
  <nav class="tz-navbar">
    <div style="padding: 16px; padding-bottom: 32px;">
      <!-- Logo ou titre -->
      <div class="tz-square-logo" style="aspect-ratio: 1 / 1;">
        <pre>
          &nbsp;design
          <br />
          .tamdaz
          <br />
          .fr<span class="cursor-blinking">_</span>
        </pre>
      </div>
    </div>
    <button class="tz-navbar-item">Home</button>
    <button class="tz-navbar-item">Files</button>
    <button class="tz-navbar-item">Settings</button>
  </nav>
  <main style="grid-column: 2 / 6;">
    <!-- Contenu principal -->
  </main>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>La navbar utilise un layout grid pour organiser la page</li>
          <li>Le contenu principal doit utiliser <code className="tz-code">grid-column: 2 / 6</code></li>
          <li>La navbar est fixée à gauche avec une largeur définie</li>
          <li>Les éléments de menu sont cliquables avec effet de survol</li>
        </ul>
      </div>
    );
  },

  /**
   * Component that represents the square logo.
   */
  "Navbar with Logo": () => {
  const colorType = useColorSelect();

  useEffect(() => {
    document.body.className = `tz-${colorType}-color`;
  }, [colorType])

  return <div className="tz-application">
    <nav className="tz-navbar">
      <div style={{ padding: 16, paddingBottom: "32px" }}>
        <div className="tz-square-logo" style={{ aspectRatio: "1 / 1" }}>
          <pre>
            &nbsp;design
            <br />
            .tamdaz
            <br />
            .fr<span className="cursor-blinking">_</span>
          </pre>
        </div>
      </div>
      <button className="tz-navbar-item">Home</button>
      <button className="tz-navbar-item">Files</button>
      <button className="tz-navbar-item">Shared</button>
      <button className="tz-navbar-item">Settings</button>
      <button className="tz-navbar-item">Logout</button>
    </nav>
    <aside style={{ margin: 16, marginLeft: 32, gridColumn: "2 / 6" }}>
      <h1>The abstract application</h1>
    </aside>
  </div>
}
}