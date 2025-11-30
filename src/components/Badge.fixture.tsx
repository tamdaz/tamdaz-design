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
        <h1>Les badges</h1>
        <p>
          Les badges affichent des informations courtes comme des statuts, des compteurs ou des labels. 
          Ils peuvent être utilisés seuls ou positionnés sur d'autres éléments.
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
                    .tz-badge
                  </code>
                </td>
                <td>Classe de base pour le badge</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .filled
                  </code>
                </td>
                <td>Badge avec fond rempli de couleur</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .outlined
                  </code>
                </td>
                <td>Badge avec fond transparent</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .small
                  </code>
                </td>
                <td>Petit badge</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .large
                  </code>
                </td>
                <td>Grand badge</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .tz-badge-container
                  </code>
                </td>
                <td>Conteneur pour positionner un badge-dot</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .tz-badge-dot
                  </code>
                </td>
                <td>Badge circulaire pour notification</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>
          Positions des badges-dot
        </h2>
        <div style={{ marginBottom: "24px" }}>
          <table className="tz-doc-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code className="tz-code">
                    .top-right
                  </code>
                </td>
                <td>En haut à droite</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .top-left
                  </code>
                </td>
                <td>En haut à gauche</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .bottom-right
                  </code>
                </td>
                <td>En bas à droite</td>
              </tr>
              <tr>
                <td>
                  <code className="tz-code">
                    .bottom-left
                  </code>
                </td>
                <td>En bas à gauche</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>
          Exemples de code HTML
        </h2>

        <h3>
          Badge simple
        </h3>
        <pre className="tz-code-block">{`<span class="tz-badge">New</span>
<span class="tz-badge filled">Active</span>
<span class="tz-badge outlined">Draft</span>`}</pre>

        <h3>
          Badge avec tailles
        </h3>
        <pre className="tz-code-block">{`<span class="tz-badge small filled">Small</span>
<span class="tz-badge filled">Medium</span>
<span class="tz-badge large filled">Large</span>`}</pre>

        <h3>
          Badge-dot sur un élément
        </h3>
        <pre className="tz-code-block">{`<div class="tz-badge-container">
  <button class="tz-button">Messages</button>
  <span class="tz-badge-dot top-right">5</span>
</div>`}</pre>

        <h3>
          Badge-dot sans nombre
        </h3>
        <pre className="tz-code-block">{`<div class="tz-badge-container">
  <span class="material-symbols-outlined">notifications</span>
  <span class="tz-badge-dot top-right"></span>
</div>`}</pre>

        <h2>
          Notes d'utilisation
        </h2>
        <ul>
          <li>Utilisez <code className="tz-code">.filled</code> pour les statuts importants</li>
          <li>Les badges s'adaptent automatiquement à la palette de couleurs active</li>
          <li>Le badge-dot nécessite un conteneur avec <code className="tz-code">position: relative</code></li>
          <li>Les badges sont inline par défaut et peuvent être utilisés dans du texte</li>
          <li>Gardez le texte court (1-2 mots maximum) pour une meilleure lisibilité</li>
        </ul>
      </div>
    );
  },
  "Basic Badges": () => {
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
        gap: "16px",
        flexWrap: "wrap",
      }}>
      <span className="tz-badge">Default</span>
      <span className="tz-badge filled">Filled</span>
      <span className="tz-badge outlined">Outlined</span>
    </div>
  },
  "Badge Sizes": () => {
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
        gap: "16px",
        flexWrap: "wrap",
      }}>
      <span className="tz-badge small filled">Small</span>
      <span className="tz-badge filled">Medium</span>
      <span className="tz-badge large filled">Large</span>
    </div>
  },
  "Status Badges": () => {
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
        gap: "16px",
        flexWrap: "wrap",
      }}>
      <span className="tz-badge filled">New</span>
      <span className="tz-badge filled">Beta</span>
      <span className="tz-badge filled">Popular</span>
      <span className="tz-badge filled">Sale</span>
      <span className="tz-badge">Draft</span>
    </div>
  },
  "Badges on Buttons": () => {
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
        gap: "24px",
        flexWrap: "wrap",
      }}>
      <div className="tz-badge-container">
        <button className="tz-button rounded">Messages</button>
        <span className="tz-badge-dot top-right">5</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button rounded">Notifications</button>
        <span className="tz-badge-dot top-right">12</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button circle">♥</button>
        <span className="tz-badge-dot top-right">3</span>
      </div>
    </div>
  },
  "Badge Positions": () => {
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
        gap: "48px",
        flexWrap: "wrap",
      }}>
      <div className="tz-badge-container">
        <button className="tz-button">Top Right</button>
        <span className="tz-badge-dot top-right">9</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button">Top Left</button>
        <span className="tz-badge-dot top-left">9</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button">Bottom Right</button>
        <span className="tz-badge-dot bottom-right">9</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button">Bottom Left</button>
        <span className="tz-badge-dot bottom-left">9</span>
      </div>
    </div>
  },
};
