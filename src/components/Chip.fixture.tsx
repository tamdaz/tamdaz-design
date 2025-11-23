import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Chips": () => {
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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <span className="tz-chip">Default Chip</span>
          <span className="tz-chip">Another Chip</span>
          <span className="tz-chip">Tag</span>
        </div>
      </div>
    );
  },
  "Deletable Chips": () => {
    const [chips, setChips] = useState([
      { id: 1, label: "React" },
      { id: 2, label: "TypeScript" },
      { id: 3, label: "CSS" },
      { id: 4, label: "Vite" },
    ]);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleDelete = (id: number) => {
      setChips(chips.filter((chip) => chip.id !== id));
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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {chips.map((chip) => (
            <span key={chip.id} className="tz-chip">
              {chip.label}
              <button
                className="tz-chip-close"
                onClick={() => handleDelete(chip.id)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    );
  },
  "Clickable Chips": () => {
    const [selected, setSelected] = useState<string | null>(null);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const tags = ["Technology", "Design", "Development", "Art", "Music"];

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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={`tz-chip clickable ${selected === tag ? "filled" : ""}`}
              onClick={() => setSelected(selected === tag ? null : tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  },
  "Chips with Avatar": () => {
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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <span className="tz-chip">
            <span className="tz-chip-avatar">A</span>
            Alice
          </span>
          <span className="tz-chip">
            <span className="tz-chip-avatar">B</span>
            Bob
          </span>
          <span className="tz-chip">
            <span className="tz-chip-avatar">C</span>
            Charlie
          </span>
        </div>
      </div>
    );
  },
  "Filled Chips": () => {
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
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <span className="tz-chip filled">Primary</span>
          <span className="tz-chip filled">Active</span>
          <span className="tz-chip filled">Selected</span>
        </div>
      </div>
    );
  },
};
