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
        <h1>Menu</h1>
        <p>
          Le composant menu permet de créer une navigation horizontale pour un site vitrine.
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
              <td><code className="tz-code">.tz-menu</code></td>
              <td>Conteneur principal du menu</td>
            </tr>

            <tr>
              <td><code className="tz-code">.tz-menu-item</code></td>
              <td>Élément de liste du menu</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-menu-link</code></td>
              <td>Lien de navigation</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-menu-link.active</code></td>
              <td>Lien actif (page courante)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-menu-link.disabled</code></td>
              <td>Lien désactivé (bientôt disponible)</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemple de code HTML</h2>
        <pre className="tz-code-block">{`<nav>
  <ul class="tz-menu">
    <li class="tz-menu-item">
      <a href="/" class="tz-menu-link">Accueil</a>
    </li>
    <li class="tz-menu-item">
      <a href="/bts-sio" class="tz-menu-link">BTS SIO</a>
    </li>
    <li class="tz-menu-item">
      <a href="/lp-miaw" class="tz-menu-link disabled">LP MIAW (bientôt)</a>
    </li>
    <li class="tz-menu-item">
      <a href="/projets" class="tz-menu-link active">Mes projets</a>
    </li>
    <li class="tz-menu-item">
      <a href="/blog" class="tz-menu-link">Blogs</a>
    </li>
  </ul>
</nav>`}</pre>

        <h2>États interactifs</h2>
        <ul>
          <li><strong>Hover</strong> : Changement de la couleur de fond au survol</li>
          <li><strong>Active</strong> : Fond blanc pour la page courante</li>
          <li><strong>Disabled</strong> : Style grisé pour les liens non disponibles</li>
        </ul>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Parfait pour la navigation principale d'un site vitrine</li>
          <li>Design arrondi moderne et élégant</li>
          <li>Ajoutez la classe <code className="tz-code">active</code> au lien de la page courante</li>
          <li>Utilisez <code className="tz-code">disabled</code> pour les sections en développement</li>
          <li>S'adapte automatiquement à la palette de couleurs active</li>
        </ul>
      </div>
    );
  },
  "Menu horizontal": () => {
    const colorType = useColorSelect();
    const [activeLink, setActiveLink] = useState("mes-projets");

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const menuItems = [
      { id: "accueil", label: "Accueil", disabled: false },
      { id: "bts-sio", label: "BTS SIO", disabled: false },
      { id: "lp-miaw", label: "LP MIAW (bientôt)", disabled: true },
      { id: "mes-projets", label: "Mes projets", disabled: false },
      { id: "blogs", label: "Blogs", disabled: false }
    ];

    return (
      <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
        <nav>
          <ul className="tz-menu">
            {menuItems.map((item) => (
              <li key={item.id} className="tz-menu-item">
                <a
                  href={`#${item.id}`}
                  className={`tz-menu-link ${activeLink === item.id ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
                  onClick={(e) => {
                    if (!item.disabled) {
                      e.preventDefault();
                      setActiveLink(item.id);
                    } else {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
};
