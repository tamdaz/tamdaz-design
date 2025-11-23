import { useEffect } from 'react';
import useColorSelect from '../hooks/useColors';

/**
 * Component that represents the square logo.
 */
export default () => {
  const colorType = useColorSelect();

  useEffect(() => {
    document.body.className = `tz-${colorType}-color`;
  }, [colorType])

  return <div className="tz-application">
    <nav className="tz-navbar">
      <div style={{ padding: 16, paddingBottom: "32px" }}>
        <div className="tz-square-logo" style={{ aspectRatio: "1 / 1" }}>
          <pre>
            &nbsp;design
            <br />
            .tamdaz
            <br />
            .fr<span className="cursor-blinking">_</span>
          </pre>
        </div>
      </div>
      <button className="tz-navbar-item">Home</button>
      <button className="tz-navbar-item">Files</button>
      <button className="tz-navbar-item">Shared</button>
      <button className="tz-navbar-item">Settings</button>
      <button className="tz-navbar-item">Logout</button>
    </nav>
    <aside style={{ margin: 16, marginLeft: 32, gridColumn: "2 / 6" }}>
      <h1>The abstract application</h1>
    </aside>
  </div>
}