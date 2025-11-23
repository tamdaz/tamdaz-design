import { useEffect, useState } from "react";
import { useFixtureInput } from "react-cosmos/client";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Input": () => {
    const [value, setValue] = useState("");
    const [placeholder] = useFixtureInput("Placeholder", "Enter text...");
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
        }}>
        <div style={{ width: "400px" }}>
          <input
            type="text"
            className="tz-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  },
  "Input with Label": () => {
    const [value, setValue] = useState("");
    const [label] = useFixtureInput("Label", "Username");
    const [placeholder] = useFixtureInput("Placeholder", "Enter your username");
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
        <div style={{ width: "400px" }}>
          <div className="tz-input-group">
            <label className="tz-input-label">{label}</label>
            <input
              type="text"
              className="tz-input"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span className="tz-input-helper">This is a helper text</span>
          </div>
        </div>
      </div>
    );
  },
  "Input with Helper on Top": () => {
    const [value, setValue] = useState("");
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
        <div style={{ width: "400px" }}>
          <div className="tz-input-group">
            <label className="tz-input-label">Email</label>
            <span className="tz-input-helper top">We'll never share your email with anyone else.</span>
            <input
              type="email"
              className="tz-input"
              placeholder="Enter your email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  },
  "Input with Error": () => {
    const [value, setValue] = useState("");
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
        <div style={{ width: "400px" }}>
          <div className="tz-input-group">
            <label className="tz-input-label">Email</label>
            <input
              type="email"
              className="tz-input error"
              placeholder="Enter your email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span className="tz-input-helper error">Please enter a valid email address</span>
          </div>
        </div>
      </div>
    );
  },
  "Rounded Input": () => {
    const [value, setValue] = useState("");
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
        <div style={{ width: "400px" }}>
          <input
            type="text"
            className="tz-input rounded"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  },
};
