import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Radio Buttons": () => {
    const [selected, setSelected] = useState("option1");
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
        <div className="tz-radio-group">
          <label className="tz-radio">
            <input
              type="radio"
              className="tz-radio-input"
              name="basic"
              value="option1"
              checked={selected === "option1"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="tz-radio-circle"></span>
            <span className="tz-radio-label">Option 1</span>
          </label>
          <label className="tz-radio">
            <input
              type="radio"
              className="tz-radio-input"
              name="basic"
              value="option2"
              checked={selected === "option2"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="tz-radio-circle"></span>
            <span className="tz-radio-label">Option 2</span>
          </label>
          <label className="tz-radio">
            <input
              type="radio"
              className="tz-radio-input"
              name="basic"
              value="option3"
              checked={selected === "option3"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="tz-radio-circle"></span>
            <span className="tz-radio-label">Option 3</span>
          </label>
        </div>
      </div>
    );
  },
  "Radio Group with Label": () => {
    const [selected, setSelected] = useState("monthly");
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
          <div className="tz-radio-group-label">Select billing cycle</div>
          <div className="tz-radio-group">
            <label className="tz-radio">
              <input
                type="radio"
                className="tz-radio-input"
                name="billing"
                value="monthly"
                checked={selected === "monthly"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="tz-radio-circle"></span>
              <span className="tz-radio-label">Monthly ($10/month)</span>
            </label>
            <label className="tz-radio">
              <input
                type="radio"
                className="tz-radio-input"
                name="billing"
                value="yearly"
                checked={selected === "yearly"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="tz-radio-circle"></span>
              <span className="tz-radio-label">Yearly ($100/year)</span>
            </label>
          </div>
          <div className="tz-radio-group-helper">
            Save 20% with yearly billing
          </div>
        </div>
      </div>
    );
  },
  "Horizontal Radio Group": () => {
    const [selected, setSelected] = useState("small");
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
        <div>
          <div className="tz-radio-group-label">Select size</div>
          <div className="tz-radio-group horizontal">
            <label className="tz-radio">
              <input
                type="radio"
                className="tz-radio-input"
                name="size"
                value="small"
                checked={selected === "small"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="tz-radio-circle"></span>
              <span className="tz-radio-label">Small</span>
            </label>
            <label className="tz-radio">
              <input
                type="radio"
                className="tz-radio-input"
                name="size"
                value="medium"
                checked={selected === "medium"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="tz-radio-circle"></span>
              <span className="tz-radio-label">Medium</span>
            </label>
            <label className="tz-radio">
              <input
                type="radio"
                className="tz-radio-input"
                name="size"
                value="large"
                checked={selected === "large"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="tz-radio-circle"></span>
              <span className="tz-radio-label">Large</span>
            </label>
          </div>
        </div>
      </div>
    );
  },
  "Radio with Descriptions": () => {
    const [selected, setSelected] = useState("basic");
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
          <div className="tz-radio-group-label">Choose your plan</div>
          <div className="tz-radio-group">
            <label className="tz-radio with-description">
              <input
                type="radio"
                className="tz-radio-input"
                name="plan"
                value="basic"
                checked={selected === "basic"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="tz-radio-circle"></span>
              <div className="tz-radio-content">
                <span className="tz-radio-label">Basic Plan</span>
                <span className="tz-radio-description">
                  Perfect for individuals. Includes 10 GB storage and basic features.
                </span>
              </div>
            </label>
            <label className="tz-radio with-description">
              <input
                type="radio"
                className="tz-radio-input"
                name="plan"
                value="pro"
                checked={selected === "pro"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="tz-radio-circle"></span>
              <div className="tz-radio-content">
                <span className="tz-radio-label">Pro Plan</span>
                <span className="tz-radio-description">
                  Great for teams. Includes 100 GB storage and advanced features.
                </span>
              </div>
            </label>
            <label className="tz-radio with-description">
              <input
                type="radio"
                className="tz-radio-input"
                name="plan"
                value="enterprise"
                checked={selected === "enterprise"}
                onChange={(e) => setSelected(e.target.value)}
              />
              <span className="tz-radio-circle"></span>
              <div className="tz-radio-content">
                <span className="tz-radio-label">Enterprise Plan</span>
                <span className="tz-radio-description">
                  For large organizations. Unlimited storage and premium support.
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  },
  "Disabled Radio": () => {
    const [selected, setSelected] = useState("option1");
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
        <div className="tz-radio-group">
          <label className="tz-radio">
            <input
              type="radio"
              className="tz-radio-input"
              name="disabled"
              value="option1"
              checked={selected === "option1"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="tz-radio-circle"></span>
            <span className="tz-radio-label">Available option</span>
          </label>
          <label className="tz-radio">
            <input
              type="radio"
              className="tz-radio-input"
              name="disabled"
              value="option2"
              disabled
            />
            <span className="tz-radio-circle"></span>
            <span className="tz-radio-label">Disabled option</span>
          </label>
          <label className="tz-radio">
            <input
              type="radio"
              className="tz-radio-input"
              name="disabled"
              value="option3"
              checked={selected === "option3"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="tz-radio-circle"></span>
            <span className="tz-radio-label">Another option</span>
          </label>
        </div>
      </div>
    );
  },
};
