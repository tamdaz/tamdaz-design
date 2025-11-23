import { useEffect, useState } from "react";
import { useFixtureInput } from "react-cosmos/client";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Slider": () => {
    const [value, setValue] = useState(50);
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
        <div style={{ width: "500px" }}>
          <input
            type="range"
            className="tz-slider"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
      </div>
    );
  },
  "Slider with Label": () => {
    const [value, setValue] = useState(75);
    const [label] = useFixtureInput("Label", "Volume");
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
        <div style={{ width: "500px" }}>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>{label}</span>
              <span className="tz-slider-value">{value}%</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    );
  },
  "Custom Range Slider": () => {
    const [value, setValue] = useState(25);
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
        <div style={{ width: "500px" }}>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>Temperature</span>
              <span className="tz-slider-value">{value}°C</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="-20"
              max="50"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    );
  },
  "Multiple Sliders": () => {
    const [red, setRed] = useState(100);
    const [green, setGreen] = useState(150);
    const [blue, setBlue] = useState(200);
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
        <div style={{ width: "500px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>Red</span>
              <span className="tz-slider-value">{red}</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="0"
              max="255"
              value={red}
              onChange={(e) => setRed(Number(e.target.value))}
            />
          </div>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>Green</span>
              <span className="tz-slider-value">{green}</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="0"
              max="255"
              value={green}
              onChange={(e) => setGreen(Number(e.target.value))}
            />
          </div>
          <div className="tz-slider-group">
            <div className="tz-slider-label">
              <span>Blue</span>
              <span className="tz-slider-value">{blue}</span>
            </div>
            <input
              type="range"
              className="tz-slider"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => setBlue(Number(e.target.value))}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "80px",
              backgroundColor: `rgb(${red}, ${green}, ${blue})`,
              border: "2px solid var(--first-color)",
            }}
          />
        </div>
      </div>
    );
  },
};
