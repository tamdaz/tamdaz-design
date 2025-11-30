import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div className="tz-doc">
        <h1>Les boutons radio</h1>
        <p>
          Les boutons radio permettent aux utilisateurs de sélectionner une seule option parmi plusieurs choix.
        </p>

        <h2>Les classes CSS</h2>
        <table className="tz-doc-table">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="tz-code">.tz-radio-group</code></td>
              <td>Conteneur pour un groupe de radios</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-radio</code></td>
              <td>Conteneur d'un radio individuel</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-radio-input</code></td>
              <td>Input radio caché</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-radio-circle</code></td>
              <td>Cercle visuel du radio</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-radio-label</code></td>
              <td>Label du radio</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>

        <h3>Groupe de radios</h3>
        <pre className="tz-code-block">{`<div class="tz-radio-group">
  <label class="tz-radio">
    <input type="radio" class="tz-radio-input" name="options" value="1" checked>
    <span class="tz-radio-circle"></span>
    <span class="tz-radio-label">Option 1</span>
  </label>
  <label class="tz-radio">
    <input type="radio" class="tz-radio-input" name="options" value="2">
    <span class="tz-radio-circle"></span>
    <span class="tz-radio-label">Option 2</span>
  </label>
  <label class="tz-radio">
    <input type="radio" class="tz-radio-input" name="options" value="3">
    <span class="tz-radio-circle"></span>
    <span class="tz-radio-label">Option 3</span>
  </label>
</div>`}</pre>

        <h3>Radio désactivé</h3>
        <pre className="tz-code-block">{`<label class="tz-radio">
  <input type="radio" class="tz-radio-input" name="test" disabled>
  <span class="tz-radio-circle"></span>
  <span class="tz-radio-label">Disabled option</span>
</label>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Tous les radios d'un groupe doivent avoir le même <code className="tz-code">name</code></li>
          <li>Utilisez l'attribut <code className="tz-code">checked</code> pour sélectionner une option par défaut</li>
          <li>Le groupe s'affiche en colonne par défaut</li>
          <li>Les radios ont un effet focus pour l'accessibilité</li>
          <li>Minimum 2 options, maximum 6-7 options recommandé</li>
        </ul>
      </div>
    );
  },

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
