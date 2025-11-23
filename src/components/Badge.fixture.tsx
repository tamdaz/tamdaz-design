import { useEffect } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Badges": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
      }}>
      <span className="tz-badge">Default</span>
      <span className="tz-badge filled">Filled</span>
      <span className="tz-badge outlined">Outlined</span>
    </div>
  },
  "Badge Sizes": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
      }}>
      <span className="tz-badge small filled">Small</span>
      <span className="tz-badge filled">Medium</span>
      <span className="tz-badge large filled">Large</span>
    </div>
  },
  "Status Badges": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        flexWrap: "wrap",
      }}>
      <span className="tz-badge filled">New</span>
      <span className="tz-badge filled">Beta</span>
      <span className="tz-badge filled">Popular</span>
      <span className="tz-badge filled">Sale</span>
      <span className="tz-badge">Draft</span>
    </div>
  },
  "Badges on Buttons": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}>
      <div className="tz-badge-container">
        <button className="tz-button rounded">Messages</button>
        <span className="tz-badge-dot top-right">5</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button rounded">Notifications</button>
        <span className="tz-badge-dot top-right">12</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button circle">♥</button>
        <span className="tz-badge-dot top-right">3</span>
      </div>
    </div>
  },
  "Badge Positions": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return <div className="tz-center-element"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "48px",
        flexWrap: "wrap",
      }}>
      <div className="tz-badge-container">
        <button className="tz-button">Top Right</button>
        <span className="tz-badge-dot top-right">9</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button">Top Left</button>
        <span className="tz-badge-dot top-left">9</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button">Bottom Right</button>
        <span className="tz-badge-dot bottom-right">9</span>
      </div>
      <div className="tz-badge-container">
        <button className="tz-button">Bottom Left</button>
        <span className="tz-badge-dot bottom-left">9</span>
      </div>
    </div>
  },
};
