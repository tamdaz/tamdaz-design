/**
 * The application component.
 */
const App = () => {
  /**
   * Allows to change the color theme.
   */
  const changeColor = (color: string) => {
    document.body.className = `tz-${color}-color`;
  }

  return <div className="tz-align-horizontal tz-center-element" style={{ height: "100%", gap: "4rem" }}>
    <div className="tz-animation-scale-up">
      <div className="tz-square-logo tz-animation-wave" style={{ width: 256, height: 256 }}>
        <pre style={{ padding: 8 }}>
          .design
          <br />
          .tamdaz
          <br />
          .fr<span className="cursor-blinking">&#x2588;</span>
        </pre>
      </div>
    </div>
    <div className="tz-center-element-vertically tz-animation-go-to-left">
      <h1>My own design system</h1>
      <p style={{ animationDuration: "700ms" }}>
        I setup my own design system for my <i>(future)</i> applications. For the moment, this project is experimental.
      </p>
      <pre className="syntax-code">
        <code>
          /** CSS Code */
          <br />
          @import "https://design.tamdaz.fr/css/index.css";
        </code>
      </pre>
      <br />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
        <button onClick={() => changeColor("red")} className="tz-button">Red</button>
        <button onClick={() => changeColor("orange")} className="tz-button">Orange</button>
        <button onClick={() => changeColor("yellow")} className="tz-button">Yellow</button>
        <button onClick={() => changeColor("emerald")} className="tz-button">Emerald</button>
        <button onClick={() => changeColor("sky")} className="tz-button">Sky</button>
        <button onClick={() => changeColor("blue")} className="tz-button">Blue</button>
        <button onClick={() => changeColor("purple")} className="tz-button">Purple</button>
        <button onClick={() => changeColor("rose")} className="tz-button">Rose</button>
        <button onClick={() => changeColor("slate")} className="tz-button">Slate</button>
      </div>
    </div>
  </div>
}

export default App;