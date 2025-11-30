import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>Les barres de recherche</h1>
        <p>Les barres de recherche permettent <i>(comme son nom l'indique)</i> de rechercher des informations plus facilement.</p>

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
              <td><code className="tz-code">.tz-searchbar</code></td>
              <td>Conteneur de la barre de recherche</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-searchbar-icon</code></td>
              <td>Icône de recherche (🔍)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-searchbar-input</code></td>
              <td>Champ de saisie</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-searchbar-clear</code></td>
              <td>Bouton d'effacement</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>
        <pre className="tz-code-block">{`<div class="tz-searchbar">
  <span class="tz-searchbar-icon">🔍</span>
  <input 
    type="text" 
    class="tz-searchbar-input" 
    placeholder="Search..."
  />
  <button class="tz-searchbar-clear">×</button>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Le champ de recherche est automatiquement focalisable</li>
          <li>Le bouton d'effacement est toujours visible</li>
          <li>Gérez la logique de recherche avec JavaScript/React</li>
          <li>Vous pouvez utiliser des icônes Material Symbols au lieu d'emoji</li>
        </ul>
      </div>
    );
  },
  "Basic Search Bar": () => {
    const [value, setValue] = useState("");
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleClear = () => {
      setValue("");
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
        <div className="tz-searchbar">
          <span className="tz-searchbar-icon">🔍</span>
          <input
            type="text"
            className="tz-searchbar-input"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="tz-searchbar-clear" onClick={handleClear}>
            ×
          </button>
        </div>
      </div>
    );
  },
  "Search Bar with Results": () => {
    const [value, setValue] = useState("");
    const [showResults, setShowResults] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const results = [
      { icon: "📄", title: "Document 1" },
      { icon: "📄", title: "Document 2" },
      { icon: "📁", title: "Folder 1" },
      { icon: "👤", title: "User Profile" },
      { icon: "⚙", title: "Settings" },
    ];

    const filteredResults = results.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    const handleClear = () => {
      setValue("");
      setShowResults(false);
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
        <div className="tz-searchbar" style={{ position: "relative" }}>
          <span className="tz-searchbar-icon">🔍</span>
          <input
            type="text"
            className="tz-searchbar-input"
            placeholder="Search..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setShowResults(e.target.value.length > 0);
            }}
            onFocus={() => value.length > 0 && setShowResults(true)}
          />
          <button className="tz-searchbar-clear" onClick={handleClear}>
            ×
          </button>

          <div className={`tz-searchbar-results ${showResults ? "open" : ""}`}>
            {filteredResults.length > 0 ? (
              filteredResults.map((result, index) => (
                <div
                  key={index}
                  className="tz-searchbar-result-item"
                  onClick={() => {
                    setValue(result.title);
                    setShowResults(false);
                  }}
                >
                  <span className="tz-searchbar-result-icon">{result.icon}</span>
                  <span>{result.title}</span>
                </div>
              ))
            ) : (
              <div className="tz-searchbar-no-results">No results found</div>
            )}
          </div>
        </div>
      </div>
    );
  },
  "Compact Search Bar": () => {
    const [value, setValue] = useState("");
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleClear = () => {
      setValue("");
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
        <div className="tz-searchbar compact" style={{ maxWidth: "400px" }}>
          <span className="tz-searchbar-icon">🔍</span>
          <input
            type="text"
            className="tz-searchbar-input"
            placeholder="Quick search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="tz-searchbar-clear" onClick={handleClear}>
            ×
          </button>
        </div>
      </div>
    );
  },
  "Search Bar with Border": () => {
    const [value, setValue] = useState("");
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleClear = () => {
      setValue("");
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
        <div className="tz-searchbar bordered">
          <span className="tz-searchbar-icon">🔍</span>
          <input
            type="text"
            className="tz-searchbar-input"
            placeholder="Search with border..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="tz-searchbar-clear" onClick={handleClear}>
            ×
          </button>
        </div>
      </div>
    );
  },
};
