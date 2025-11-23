import { useEffect } from 'react';
import { useFixtureInput } from 'react-cosmos/client';
import useColorSelect from '../hooks/useColors';

export default {
  "📖 Documentation": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div className="tz-doc">
        <h1>Card Component</h1>
        <p>
          Les cartes regroupent du contenu et des actions sur un seul sujet. 
          Elles sont idéales pour afficher des aperçus ou des éléments dans une grille.
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
              <td><code className="tz-code">.tz-card</code></td>
              <td>Conteneur principal de la carte</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-label</code></td>
              <td>Label optionnel en haut de la carte</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemples de code HTML</h2>

        <h3>Carte avec image</h3>
        <pre className="tz-code-block">{`<div class="tz-card">
  <span class="tz-label">New</span>
  <div style="aspect-ratio: 16/9;">
    <img src="image.jpg" width="100%" alt="Card image">
  </div>
  <div>
    <h3>Card Title</h3>
    <p>Card description text goes here.</p>
  </div>
</div>`}</pre>

        <h3>Carte simple</h3>
        <pre className="tz-code-block">{`<div class="tz-card">
  <div>
    <h3>Simple Card</h3>
    <p>This is a simple card without an image.</p>
  </div>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Les cartes ont une largeur fixe de 600px par défaut</li>
          <li>Effet hover avec ombre portée</li>
          <li>Effet active qui change le fond</li>
          <li>Le label est positionné en absolu en haut à droite</li>
          <li>Les cartes sont cliquables avec <code className="tz-code">cursor: pointer</code></li>
        </ul>
      </div>
    );
  },

  "Basic Card": () => {
  const [title] = useFixtureInput("Title", "This is the title");
  const [description] = useFixtureInput("Description", "Lorem ipsum dolor sit amet consectur.");

  const colorType = useColorSelect();

  useEffect(() => {
    document.body.className = `tz-${colorType}-color`;
  }, [colorType])

  return <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
    <div className="tz-card">
      <span className="tz-label">Label</span>
      <div style={{ aspectRatio: "16 / 9", position: "relative", userSelect: "none" }}>
        <img src="https://placehold.co/600x400/png" width="100%" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
}
}