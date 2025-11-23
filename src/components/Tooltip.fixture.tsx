import { useEffect } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Tooltip Top": () => {
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
        <div className="tz-tooltip">
          <button className="tz-button">Hover me</button>
          <span className="tz-tooltip-content top">Tooltip on top</span>
        </div>
      </div>
    );
  },
  "Tooltip Bottom": () => {
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
        <div className="tz-tooltip">
          <button className="tz-button">Hover me</button>
          <span className="tz-tooltip-content bottom">Tooltip on bottom</span>
        </div>
      </div>
    );
  },
  "Tooltip Left": () => {
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
        <div className="tz-tooltip">
          <button className="tz-button">Hover me</button>
          <span className="tz-tooltip-content left">Tooltip on left</span>
        </div>
      </div>
    );
  },
  "Tooltip Right": () => {
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
        <div className="tz-tooltip">
          <button className="tz-button">Hover me</button>
          <span className="tz-tooltip-content right">Tooltip on right</span>
        </div>
      </div>
    );
  },
  "All Positions": () => {
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
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        <div className="tz-tooltip">
          <button className="tz-button rounded">Top</button>
          <span className="tz-tooltip-content top">I'm on top!</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button rounded">Bottom</button>
          <span className="tz-tooltip-content bottom">I'm on bottom!</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button rounded">Left</button>
          <span className="tz-tooltip-content left">I'm on left!</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button rounded">Right</button>
          <span className="tz-tooltip-content right">I'm on right!</span>
        </div>
      </div>
    );
  },
  "Dark Tooltips": () => {
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
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <div className="tz-tooltip">
          <button className="tz-button rounded">Dark Top</button>
          <span className="tz-tooltip-content top dark">Dark tooltip</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button rounded">Dark Bottom</button>
          <span className="tz-tooltip-content bottom dark">Dark tooltip</span>
        </div>
      </div>
    );
  },
  "Tooltips on Icons": () => {
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
          gap: "24px",
        }}
      >
        <div className="tz-tooltip">
          <button className="tz-button circle">♥</button>
          <span className="tz-tooltip-content top">Like</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button circle">★</button>
          <span className="tz-tooltip-content top">Favorite</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button circle">✓</button>
          <span className="tz-tooltip-content top">Done</span>
        </div>
        <div className="tz-tooltip">
          <button className="tz-button circle">✕</button>
          <span className="tz-tooltip-content top">Delete</span>
        </div>
      </div>
    );
  },
};
