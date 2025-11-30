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
        <h1>Les listes déroulantes <i>(Dropdowns)</i></h1>
        <p>
          Les dropdowns affichent une liste d'options lorsqu'ils sont activés. 
          Ils sont utiles pour les sélections dans un espace limité.
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
              <td><code className="tz-code">.tz-dropdown</code></td>
              <td>Conteneur du dropdown</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropdown-toggle</code></td>
              <td>Bouton déclencheur</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropdown-menu</code></td>
              <td>Menu déroulant</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropdown-item</code></td>
              <td>Élément du menu</td>
            </tr>
            <tr>
              <td><code className="tz-code">.open</code></td>
              <td>État ouvert du dropdown</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>

        <h3>Dropdown basique</h3>
        <pre className="tz-code-block">{`<div class="tz-dropdown open">
  <button class="tz-dropdown-toggle">Select option</button>
  <div class="tz-dropdown-menu">
    <button class="tz-dropdown-item">Option 1</button>
    <button class="tz-dropdown-item">Option 2</button>
    <button class="tz-dropdown-item">Option 3</button>
  </div>
</div>`}</pre>

        <h3>Dropdown avec séparateur</h3>
        <pre className="tz-code-block">{`<div class="tz-dropdown open">
  <button class="tz-dropdown-toggle">Actions</button>
  <div class="tz-dropdown-menu">
    <button class="tz-dropdown-item">Edit</button>
    <button class="tz-dropdown-item">Duplicate</button>
    <hr>
    <button class="tz-dropdown-item">Delete</button>
  </div>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Ajoutez la classe <code className="tz-code">.open</code> pour afficher le menu</li>
          <li>Le menu se positionne automatiquement sous le bouton</li>
          <li>Fermez le dropdown en cliquant à l'extérieur (géré par JavaScript)</li>
          <li>Maximum 8-10 options recommandé</li>
        </ul>
      </div>
    );
  },

  "Basic Dropdown": () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Select an option");
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleSelect = (item: string) => {
      setSelectedItem(item);
      setIsOpen(false);
    };

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
        <div className={`tz-dropdown ${isOpen ? "open" : ""}`}>
          <button
            className="tz-dropdown-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedItem}
          </button>
          <div className="tz-dropdown-menu">
            <button
              className="tz-dropdown-item"
              onClick={() => handleSelect("Option 1")}
            >
              Option 1
            </button>
            <button
              className="tz-dropdown-item"
              onClick={() => handleSelect("Option 2")}
            >
              Option 2
            </button>
            <button
              className="tz-dropdown-item"
              onClick={() => handleSelect("Option 3")}
            >
              Option 3
            </button>
            <div className="tz-dropdown-divider"></div>
            <button
              className="tz-dropdown-item"
              onClick={() => handleSelect("Other option")}
            >
              Other option
            </button>
          </div>
        </div>
      </div>
    );
  },
};
