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
        <h1>Tooltip Component</h1>
        <p>
          Les tooltips affichent des informations complémentaires au survol d'un élément. 
          Ils sont utiles pour fournir du contexte sans encombrer l'interface.
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
              <td><code className="tz-code">.tz-tooltip</code></td>
              <td>Conteneur du tooltip</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-tooltip-content</code></td>
              <td>Contenu du tooltip</td>
            </tr>
          </tbody>
        </table>

        <h2>Positions</h2>
        <table className="tz-doc-table">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="tz-code">.top</code></td>
              <td>Au-dessus de l'élément</td>
            </tr>
            <tr>
              <td><code className="tz-code">.bottom</code></td>
              <td>En dessous de l'élément</td>
            </tr>
            <tr>
              <td><code className="tz-code">.left</code></td>
              <td>À gauche de l'élément</td>
            </tr>
            <tr>
              <td><code className="tz-code">.right</code></td>
              <td>À droite de l'élément</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemples de code HTML</h2>

        <h3>Tooltip en haut</h3>
        <pre className="tz-code-block">{`<div class="tz-tooltip">
  <button class="tz-button">Hover me</button>
  <span class="tz-tooltip-content top">Tooltip on top</span>
</div>`}</pre>

        <h3>Tooltip en bas</h3>
        <pre className="tz-code-block">{`<div class="tz-tooltip">
  <button class="tz-button">Hover me</button>
  <span class="tz-tooltip-content bottom">Tooltip on bottom</span>
</div>`}</pre>

        <h3>Tooltip sur une icône</h3>
        <pre className="tz-code-block">{`<div class="tz-tooltip">
  <span class="material-symbols-outlined">info</span>
  <span class="tz-tooltip-content top">More information</span>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Le tooltip apparaît au survol via <code className="tz-code">:hover</code></li>
          <li>Gardez le texte court (maximum 1-2 lignes)</li>
          <li>Évitez d'utiliser des tooltips sur mobile</li>
          <li>Ne mettez pas d'informations critiques dans un tooltip</li>
          <li>Le tooltip a un léger délai d'apparition pour une meilleure UX</li>
        </ul>
      </div>
    );
  },

  "Tooltip Top": () => {
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
        <div className="tz-tooltip">
          <button className="tz-button">Hover me</button>
          <span className="tz-tooltip-content top">Tooltip on top</span>
        </div>
      </div>
    );
  },
  "Tooltip Bottom": () => {
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
        <div className="tz-tooltip">
          <button className="tz-button">Hover me</button>
          <span className="tz-tooltip-content bottom">Tooltip on bottom</span>
        </div>
      </div>
    );
  },
  "Tooltip Left": () => {
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
        <div className="tz-tooltip">
          <button className="tz-button">Hover me</button>
          <span className="tz-tooltip-content left">Tooltip on left</span>
        </div>
      </div>
    );
  },
  "Tooltip Right": () => {
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
        <div className="tz-tooltip">
          <button className="tz-button">Hover me</button>
          <span className="tz-tooltip-content right">Tooltip on right</span>
        </div>
      </div>
    );
  },
  "All Positions": () => {
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
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        <div className="tz-tooltip">
          <button className="tz-button rounded">Top</button>
          <span className="tz-tooltip-content top">I'm on top!</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button rounded">Bottom</button>
          <span className="tz-tooltip-content bottom">I'm on bottom!</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button rounded">Left</button>
          <span className="tz-tooltip-content left">I'm on left!</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button rounded">Right</button>
          <span className="tz-tooltip-content right">I'm on right!</span>
        </div>
      </div>
    );
  },
  "Dark Tooltips": () => {
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
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <div className="tz-tooltip">
          <button className="tz-button rounded">Dark Top</button>
          <span className="tz-tooltip-content top dark">Dark tooltip</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button rounded">Dark Bottom</button>
          <span className="tz-tooltip-content bottom dark">Dark tooltip</span>
        </div>
      </div>
    );
  },
  "Tooltips on Icons": () => {
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
          gap: "24px",
        }}
      >
        <div className="tz-tooltip">
          <button className="tz-button circle">♥</button>
          <span className="tz-tooltip-content top">Like</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button circle">★</button>
          <span className="tz-tooltip-content top">Favorite</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button circle">✓</button>
          <span className="tz-tooltip-content top">Done</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button circle">✕</button>
          <span className="tz-tooltip-content top">Delete</span>
        </div>
      </div>
    );
  },
};
