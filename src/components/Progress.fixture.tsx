import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>Les progressions <i>(Progress)</i></h1>
        <p>Les progressions représentent sous forme de barre linéaire ou circulaire.</p>

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
              <td><code className="tz-code">.tz-progress</code></td>
              <td>Barre de progression linéaire</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-progress-bar</code></td>
              <td>Barre de remplissage</td>
            </tr>
            <tr>
              <td><code className="tz-code">.animated</code></td>
              <td>Animation de brillance</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-progress-container</code></td>
              <td>Conteneur avec label</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-progress-label</code></td>
              <td>Label de progression</td>
            </tr>
            <tr>
              <td><code className="tz-code">.small</code></td>
              <td>Petite taille (4px ou 32px)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.medium</code></td>
              <td>Taille moyenne (8px ou 64px)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.large</code></td>
              <td>Grande taille (12px ou 96px)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-progress-circular</code></td>
              <td>Progression circulaire</td>
            </tr>
            <tr>
              <td><code className="tz-code">.indeterminate</code></td>
              <td>Animation indéterminée (chargement)</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>
        <pre className="tz-code-block">{`<!-- Barre simple -->
<div class="tz-progress">
  <div class="tz-progress-bar" style="width: 60%"></div>
</div>

<!-- Avec label -->
<div class="tz-progress-container">
  <div class="tz-progress-label">
    <span class="tz-progress-label-text">Uploading...</span>
    <span class="tz-progress-label-value">60%</span>
  </div>
  <div class="tz-progress">
    <div class="tz-progress-bar animated" style="width: 60%"></div>
  </div>
</div>

<!-- Circulaire -->
<div class="tz-progress-circular medium">
  <svg width="64" height="64">
    <circle class="tz-progress-circular-bg" cx="32" cy="32" r="28" />
    <circle class="tz-progress-circular-bar" cx="32" cy="32" r="28" 
            stroke-dasharray="176" stroke-dashoffset="70" />
  </svg>
  <span class="tz-progress-circular-label">60%</span>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Utilisez <code className="tz-code">style="width: X%"</code> pour définir le pourcentage</li>
          <li>Ajoutez <code className="tz-code">.animated</code> pour une animation de brillance</li>
          <li>Pour le circulaire, calculez <code className="tz-code">stroke-dashoffset</code> : <code className="tz-code">circumference * (1 - percentage/100)</code></li>
          <li>Utilisez <code className="tz-code">.indeterminate</code> pour un chargement sans pourcentage</li>
        </ul>
      </div>
    );
  },

  "Linear Progress": () => {
    const [progress, setProgress] = useState(0);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(timer);
    }, []);

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <h3 style={{ marginTop: 0 }}>Default</h3>
            <div className="tz-progress">
              <div className="tz-progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div>
            <h3 style={{ marginTop: 0 }}>Small</h3>
            <div className="tz-progress small">
              <div className="tz-progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div>
            <h3 style={{ marginTop: 0 }}>Large</h3>
            <div className="tz-progress large">
              <div className="tz-progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div>
            <h3 style={{ marginTop: 0 }}>Animated</h3>
            <div className="tz-progress">
              <div className="tz-progress-bar animated" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  "Progress with Labels": () => {
    const [progress, setProgress] = useState(65);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div className="tz-progress-container">
            <div className="tz-progress-label">
              <span className="tz-progress-label-text">Uploading file...</span>
              <span className="tz-progress-label-value">{progress}%</span>
            </div>
            <div className="tz-progress">
              <div className="tz-progress-bar animated" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="tz-progress-container">
            <div className="tz-progress-label">
              <span className="tz-progress-label-text">Processing...</span>
              <span className="tz-progress-label-value">45%</span>
            </div>
            <div className="tz-progress">
              <div className="tz-progress-bar" style={{ width: "45%" }}></div>
            </div>
          </div>

          <div className="tz-progress-container">
            <div className="tz-progress-label">
              <span className="tz-progress-label-text">Download complete</span>
              <span className="tz-progress-label-value">100%</span>
            </div>
            <div className="tz-progress">
              <div className="tz-progress-bar" style={{ width: "100%" }}></div>
            </div>
          </div>

          <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
            <button className="tz-button" onClick={() => setProgress(Math.max(0, progress - 10))}>
              -10%
            </button>
            <button className="tz-button" onClick={() => setProgress(Math.min(100, progress + 10))}>
              +10%
            </button>
          </div>
        </div>
      </div>
    );
  },

  "Circular Progress": () => {
    const [progress, setProgress] = useState(75);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const calculateStrokeDashoffset = (percentage: number, radius: number) => {
      const circumference = 2 * Math.PI * radius;
      return circumference * (1 - percentage / 100);
    };

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "48px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
            <div>
              <div className="tz-progress-circular small">
                <svg width="32" height="32">
                  <circle className="tz-progress-circular-bg" cx="16" cy="16" r="12" />
                  <circle
                    className="tz-progress-circular-bar"
                    cx="16"
                    cy="16"
                    r="12"
                    strokeDasharray={2 * Math.PI * 12}
                    strokeDashoffset={calculateStrokeDashoffset(progress, 12)}
                  />
                </svg>
                <span className="tz-progress-circular-label">{progress}%</span>
              </div>
              <p style={{ textAlign: "center", marginTop: "8px", fontSize: "11pt" }}>Small</p>
            </div>

            <div>
              <div className="tz-progress-circular medium">
                <svg width="64" height="64">
                  <circle className="tz-progress-circular-bg" cx="32" cy="32" r="28" />
                  <circle
                    className="tz-progress-circular-bar"
                    cx="32"
                    cy="32"
                    r="28"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={calculateStrokeDashoffset(progress, 28)}
                  />
                </svg>
                <span className="tz-progress-circular-label">{progress}%</span>
              </div>
              <p style={{ textAlign: "center", marginTop: "8px", fontSize: "11pt" }}>Medium</p>
            </div>

            <div>
              <div className="tz-progress-circular large">
                <svg width="96" height="96">
                  <circle className="tz-progress-circular-bg" cx="48" cy="48" r="44" />
                  <circle
                    className="tz-progress-circular-bar"
                    cx="48"
                    cy="48"
                    r="44"
                    strokeDasharray={2 * Math.PI * 44}
                    strokeDashoffset={calculateStrokeDashoffset(progress, 44)}
                  />
                </svg>
                <span className="tz-progress-circular-label">{progress}%</span>
              </div>
              <p style={{ textAlign: "center", marginTop: "8px", fontSize: "11pt" }}>Large</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button className="tz-button" onClick={() => setProgress(Math.max(0, progress - 10))}>
              -10%
            </button>
            <button className="tz-button" onClick={() => setProgress(Math.min(100, progress + 10))}>
              +10%
            </button>
          </div>
        </div>
      </div>
    );
  },

  "Indeterminate Progress": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "48px", alignItems: "center" }}>
          <div>
            <h3 style={{ textAlign: "center", marginBottom: "16px" }}>Linear Indeterminate</h3>
            <div style={{ width: "400px" }}>
              <div className="tz-progress indeterminate"></div>
            </div>
          </div>

          <div>
            <h3 style={{ textAlign: "center", marginBottom: "16px" }}>Circular Indeterminate</h3>
            <div style={{ display: "flex", gap: "32px" }}>
              <div className="tz-progress-circular small indeterminate">
                <svg width="32" height="32">
                  <circle className="tz-progress-circular-bg" cx="16" cy="16" r="12" />
                  <circle
                    className="tz-progress-circular-bar"
                    cx="16"
                    cy="16"
                    r="12"
                    strokeDasharray={2 * Math.PI * 12}
                  />
                </svg>
              </div>

              <div className="tz-progress-circular medium indeterminate">
                <svg width="64" height="64">
                  <circle className="tz-progress-circular-bg" cx="32" cy="32" r="28" />
                  <circle
                    className="tz-progress-circular-bar"
                    cx="32"
                    cy="32"
                    r="28"
                    strokeDasharray={2 * Math.PI * 28}
                  />
                </svg>
              </div>

              <div className="tz-progress-circular large indeterminate">
                <svg width="96" height="96">
                  <circle className="tz-progress-circular-bg" cx="48" cy="48" r="44" />
                  <circle
                    className="tz-progress-circular-bar"
                    cx="48"
                    cy="48"
                    r="44"
                    strokeDasharray={2 * Math.PI * 44}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
