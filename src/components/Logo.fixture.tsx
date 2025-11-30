import { useEffect } from 'react';
import { useFixtureInput, useFixtureSelect } from 'react-cosmos/client';
import useColorSelect from '../hooks/useColors';

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>Les logos</h1>
        <p>Les logos carées du texte personnalisable et un curseur clignotant.</p>

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
              <td><code className="tz-code">.tz-square-logo</code></td>
              <td>Conteneur du logo carré</td>
            </tr>
            <tr>
              <td><code className="tz-code">.stripes</code></td>
              <td>Version avec rayures (développement)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.cursor-blinking</code></td>
              <td>Curseur clignotant</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>
        <pre className="tz-code-block">{`<div class="tz-square-logo" style="aspect-ratio: 1 / 1">
  <pre>
    &nbsp;design
    <br />
    .tamdaz
    <br />
    .fr<span class="cursor-blinking">_</span>
  </pre>
</div>

<!-- Version développement avec rayures -->
<div class="tz-square-logo stripes" style="aspect-ratio: 1 / 1">
  <pre>
    &nbsp;dev
    <br />
    .tamdaz
    <br />
    .fr<span class="cursor-blinking">_</span>
  </pre>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Utilisez <code className="tz-code">aspect-ratio: 1 / 1</code> pour maintenir le format carré</li>
          <li>La classe <code className="tz-code">.stripes</code> ajoute des rayures diagonales pour l'environnement de développement</li>
          <li>Le curseur clignotant simule un terminal</li>
          <li>Personnalisez le contenu avec vos propres sous-domaine, domaine et TLD</li>
        </ul>
      </div>
    );
  },

  /**
   * Component that represents the square logo.
   */
  "Square Logo": () => {
    const [subdomain] = useFixtureInput("Subdomain", "subdomain");
    const [domain] = useFixtureInput("Domain", "domain");
    const [tld] = useFixtureInput("TLD", "tld");

    const [logoType] = useFixtureSelect('Logo Type', {
      options: ["development", "production"]
    })

    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType])

    let cssClasses = "tz-square-logo";

    if (logoType === "development") {
      cssClasses += " " + "stripes";
    }

    return <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div className={cssClasses} style={{ aspectRatio: "1 / 1" }}>
        <pre>
          &nbsp;{subdomain}
          <br />
          .{domain}
          <br />
          .{tld}<span className="cursor-blinking">_</span>
        </pre>
      </div>
    </div>
  }
};