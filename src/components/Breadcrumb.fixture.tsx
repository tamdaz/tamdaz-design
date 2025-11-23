import { useEffect } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Breadcrumb": () => {
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
        <nav className="tz-breadcrumb">
          <a href="#" className="tz-breadcrumb-item">Home</a>
          <span className="tz-breadcrumb-separator">/</span>
          <a href="#" className="tz-breadcrumb-item">Category</a>
          <span className="tz-breadcrumb-separator">/</span>
          <span className="tz-breadcrumb-item current">Current Page</span>
        </nav>
      </div>
    );
  },
  "Breadcrumb with Background": () => {
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
        <nav className="tz-breadcrumb with-background">
          <a href="#" className="tz-breadcrumb-item">Home</a>
          <span className="tz-breadcrumb-separator">/</span>
          <a href="#" className="tz-breadcrumb-item">Products</a>
          <span className="tz-breadcrumb-separator">/</span>
          <a href="#" className="tz-breadcrumb-item">Electronics</a>
          <span className="tz-breadcrumb-separator">/</span>
          <span className="tz-breadcrumb-item current">Laptop</span>
        </nav>
      </div>
    );
  },
  "Breadcrumb with Icons": () => {
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
        <nav className="tz-breadcrumb">
          <a href="#" className="tz-breadcrumb-item">
            <span className="tz-breadcrumb-icon">🏠</span>
            Home
          </a>
          <span className="tz-breadcrumb-separator">→</span>
          <a href="#" className="tz-breadcrumb-item">
            <span className="tz-breadcrumb-icon">📁</span>
            Documents
          </a>
          <span className="tz-breadcrumb-separator">→</span>
          <span className="tz-breadcrumb-item current">
            <span className="tz-breadcrumb-icon">📄</span>
            Report.pdf
          </span>
        </nav>
      </div>
    );
  },
  "Compact Breadcrumb": () => {
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
          alignItems: "center"
        }}>
        <nav className="tz-breadcrumb compact">
          <a href="#" className="tz-breadcrumb-item">Home</a>
          <span className="tz-breadcrumb-separator">&gt;</span>
          <a href="#" className="tz-breadcrumb-item">Level 1</a>
          <span className="tz-breadcrumb-separator">&gt;</span>
          <a href="#" className="tz-breadcrumb-item">Level 2</a>
          <span className="tz-breadcrumb-separator">&gt;</span>
          <span className="tz-breadcrumb-item current">Level 3</span>
        </nav>
      </div>
    );
  },
  "Long Breadcrumb": () => {
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
          alignItems: "center"
        }}>
        <div style={{ width: "800px" }}>
          <nav className="tz-breadcrumb with-background">
            <a href="#" className="tz-breadcrumb-item">Dashboard</a>
            <span className="tz-breadcrumb-separator">/</span>
            <a href="#" className="tz-breadcrumb-item">Administration</a>
            <span className="tz-breadcrumb-separator">/</span>
            <a href="#" className="tz-breadcrumb-item">User Management</a>
            <span className="tz-breadcrumb-separator">/</span>
            <a href="#" className="tz-breadcrumb-item">Permissions</a>
            <span className="tz-breadcrumb-separator">/</span>
            <span className="tz-breadcrumb-item current">Edit Role</span>
          </nav>
        </div>
      </div>
    );
  },
};
