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
        <h1>Table des matières (Sommaire)</h1>
        <p>
          Le composant table des matières permet de naviguer facilement dans un article ou une page de blog avec plusieurs sections.
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
              <td><code className="tz-code">.tz-toc</code></td>
              <td>Conteneur principal de la table des matières</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-toc-title</code></td>
              <td>Titre du sommaire</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-toc-list</code></td>
              <td>Liste des liens</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-toc-item</code></td>
              <td>Élément de liste</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-toc-link</code></td>
              <td>Lien de navigation</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-toc-link.active</code></td>
              <td>Lien actif</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemple de code HTML</h2>
        <pre className="tz-code-block">{`<nav class="tz-toc">
  <h2 class="tz-toc-title">Sommaire</h2>
  <ul class="tz-toc-list">
    <li class="tz-toc-item">
      <a href="#contexte" class="tz-toc-link">Contexte</a>
    </li>
    <li class="tz-toc-item">
      <a href="#presentation" class="tz-toc-link active">Présentation</a>
    </li>
    <li class="tz-toc-item">
      <a href="#fonctionnement" class="tz-toc-link">Comment cela fonctionne ?</a>
    </li>
    <li class="tz-toc-item">
      <a href="#avantages" class="tz-toc-link">Avantages & inconvénients</a>
    </li>
    <li class="tz-toc-item">
      <a href="#utilisation" class="tz-toc-link">Cas d'utilisation</a>
    </li>
    <li class="tz-toc-item">
      <a href="#sources" class="tz-toc-link">Sources</a>
    </li>
  </ul>
</nav>`}</pre>

        <h2>États interactifs</h2>
        <ul>
          <li><strong>Hover</strong> : Changement de la couleur de fond au survol</li>
          <li><strong>Active</strong> : Style distinct pour la section courante</li>
        </ul>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Idéal pour les articles de blog avec plusieurs sections</li>
          <li>Les liens doivent pointer vers des ancres (#id) dans la page</li>
          <li>Ajoutez la classe <code className="tz-code">active</code> au lien correspondant à la section visible</li>
          <li>Le composant s'adapte automatiquement à la palette de couleurs active</li>
        </ul>
      </div>
    );
  },
  "Table des matières": () => {
    const colorType = useColorSelect();
    const [activeLink, setActiveLink] = useState("presentation");

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const sections = [
      { id: "contexte", label: "Contexte" },
      { id: "presentation", label: "Présentation" },
      { id: "fonctionnement", label: "Comment cela fonctionne ?" },
      { id: "avantages", label: "Avantages & inconvénients" },
      { id: "utilisation", label: "Cas d'utilisation" },
      { id: "sources", label: "Sources" }
    ];

    return (
      <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
        <nav className="tz-toc">
          <h2 className="tz-toc-title">Sommaire</h2>
          <ul className="tz-toc-list">
            {sections.map((section) => (
              <li key={section.id} className="tz-toc-item">
                <a
                  href={`#${section.id}`}
                  className={`tz-toc-link ${activeLink === section.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(section.id);
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  },
  "Table des matières sans fond": () => {
    const colorType = useColorSelect();
    const [activeLink, setActiveLink] = useState("presentation");

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const sections = [
      { id: "contexte", label: "Contexte" },
      { id: "presentation", label: "Présentation" },
      { id: "fonctionnement", label: "Comment cela fonctionne ?" },
      { id: "avantages", label: "Avantages & inconvénients" },
      { id: "utilisation", label: "Cas d'utilisation" },
      { id: "sources", label: "Sources" }
    ];

    return (
      <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
        <nav className="tz-toc no-background">
          <h2 className="tz-toc-title">Sommaire</h2>
          <ul className="tz-toc-list">
            {sections.map((section) => (
              <li key={section.id} className="tz-toc-item">
                <a
                  href={`#${section.id}`}
                  className={`tz-toc-link ${activeLink === section.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(section.id);
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
};
