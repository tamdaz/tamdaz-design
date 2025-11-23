import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
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
