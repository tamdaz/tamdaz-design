import { useEffect, useState } from "react";
import { useFixtureInput } from "react-cosmos/client";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Textarea": () => {
    const [value, setValue] = useState("");
    const [placeholder] = useFixtureInput("Placeholder", "Enter your message...");
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
          <textarea
            className="tz-textarea"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  },
  "Textarea with Label": () => {
    const [value, setValue] = useState("");
    const [label] = useFixtureInput("Label", "Description");
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
          <div className="tz-input-group">
            <label className="tz-input-label">{label}</label>
            <textarea
              className="tz-textarea"
              placeholder="Write a detailed description..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span className="tz-input-helper">
              {value.length} / 500 characters
            </span>
          </div>
        </div>
      </div>
    );
  },
  "No Resize Textarea": () => {
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
        <div style={{ width: "500px" }}>
          <textarea
            className="tz-textarea no-resize"
            placeholder="This textarea cannot be resized..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    );
  },
};
