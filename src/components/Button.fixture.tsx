import { useEffect } from "react";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client"
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div className="tz-doc">
        <h1>Button Component</h1>
        <p>
          Les boutons permettent aux utilisateurs d'effectuer des actions et de faire des choix en un seul clic.
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
                <td><code className="tz-code">.tz-button</code></td>
                <td>Classe de base pour le bouton</td>
              </tr>
              <tr>
                <td><code className="tz-code">.rounded</code></td>
                <td>Bouton avec coins arrondis (pilule)</td>
              </tr>
              <tr>
                <td><code className="tz-code">.circle</code></td>
                <td>Bouton circulaire (pour icônes)</td>
              </tr>
            </tbody>
          </table>

        <h2>Exemples de code HTML</h2>

        <h3>Bouton standard</h3>
        <pre className="tz-code-block">{`<button class="tz-button">Click me</button>`}</pre>

        <h3>Bouton arrondi</h3>
        <pre className="tz-code-block">{`<button class="tz-button rounded">Submit</button>`}</pre>

        <h3>Bouton circulaire avec icône</h3>
        <pre className="tz-code-block">{`<button class="tz-button circle">
  <span class="material-symbols-outlined">add</span>
</button>`}</pre>

        <h2>États interactifs</h2>
        <ul>
          <li><strong>Hover</strong> : Changement de couleur de fond au survol</li>
          <li><strong>Active</strong> : Fond rempli avec la couleur primaire lors du clic</li>
          <li><strong>Focus</strong> : Bordure visible pour l'accessibilité au clavier</li>
        </ul>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Utilisez <code className="tz-code">&lt;button&gt;</code> pour les actions et <code className="tz-code">&lt;a&gt;</code> avec la classe pour les liens</li>
          <li>Les boutons s'adaptent automatiquement à la palette de couleurs active</li>
          <li>Le bouton circulaire a une taille fixe de 64x64px</li>
          <li>Les boutons sont accessibles et respectent les standards WCAG</li>
        </ul>
      </div>
    );
  },
  "Normal Buttons": () => {
    const [text] = useFixtureInput('Text', "My Button");

    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType])

    return <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ display: "flex", gap: 16 }}>
        <button className="tz-button">{text}</button>
      </div>
    </div>
  },
  "Rounded Buttons": () => {
    const [text] = useFixtureInput('Text', "My Button");

    const [colorType] = useFixtureSelect('Color', {
      options: ["ruby", "orange", "yellow", "emerald", "sky", "blue", "purple", "slate"]
    })

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType])

    return <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ display: "flex", gap: 16 }}>
        <button className="tz-button rounded">{text}</button>
      </div>
    </div>
  },
  "Circle Buttons": () => {
    const [colorType] = useFixtureSelect('Color', {
      options: ["ruby", "orange", "yellow", "emerald", "sky", "blue", "purple", "slate"]
    })

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType])

    return <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
      <button className="tz-button circle">&copy;</button>
    </div>
  }
}