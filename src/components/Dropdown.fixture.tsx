import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
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
