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
        <h1>Les snackbars</h1>
        <p>
          Les snackbars affichent des messages temporaires en bas <i>(ou en haut)</i> de l'écran pour informer 
          l'utilisateur d'une action ou d'un événement. Ils disparaissent automatiquement après quelques secondes.
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
              <td><code className="tz-code">.tz-snackbar</code></td>
              <td>Classe de base pour le snackbar</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-snackbar-message</code></td>
              <td>Message du snackbar</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-snackbar-action</code></td>
              <td>Bouton d'action (optionnel)</td>
            </tr>
          </tbody>
        </table>

        <h2>Variantes de couleur</h2>
        <table className="tz-doc-table">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="tz-code">.success</code></td>
              <td>Snackbar de succès (vert)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.error</code></td>
              <td>Snackbar d'erreur (rouge)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.warning</code></td>
              <td>Snackbar d'avertissement (jaune)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.info</code></td>
              <td>Snackbar d'information (bleu)</td>
            </tr>
          </tbody>
        </table>

        <h2>Positions</h2>
        <table className="tz-doc-table">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Par défaut</td>
              <td>Bas centre</td>
            </tr>
            <tr>
              <td><code className="tz-code">.top</code></td>
              <td>Haut centre</td>
            </tr>
            <tr>
              <td><code className="tz-code">.left</code></td>
              <td>Bas gauche</td>
            </tr>
            <tr>
              <td><code className="tz-code">.right</code></td>
              <td>Bas droite</td>
            </tr>
          </tbody>
        </table>

        <h2>Les exemples de code HTML</h2>

        <h3>Snackbar simple</h3>
        <pre className="tz-code-block">{`<div class="tz-snackbar">
  <p class="tz-snackbar-message">Marked as read</p>
</div>`}</pre>

        <h3>Snackbar avec action</h3>
        <pre className="tz-code-block">{`<div class="tz-snackbar">
  <p class="tz-snackbar-message">Marked as read</p>
  <button class="tz-snackbar-action">UNDO</button>
</div>`}</pre>

        <h3>Snackbar de succès</h3>
        <pre className="tz-code-block">{`<div class="tz-snackbar success">
  <p class="tz-snackbar-message">File saved successfully</p>
</div>`}</pre>

        <h3>Snackbar en haut</h3>
        <pre className="tz-code-block">{`<div class="tz-snackbar top">
  <p class="tz-snackbar-message">Connection restored</p>
</div>`}</pre>

        <h3>Snackbar à droite</h3>
        <pre className="tz-code-block">{`<div class="tz-snackbar right">
  <p class="tz-snackbar-message">Item added to cart</p>
  <button class="tz-snackbar-action">VIEW</button>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Les snackbars doivent être visibles pendant 4 à 6 secondes maximum</li>
          <li>Un seul snackbar doit être affiché à la fois</li>
          <li>Utilisez la classe <code className="tz-code">.dismissing</code> pour animer la fermeture</li>
          <li>Le bouton d'action doit être court (1-2 mots en majuscules)</li>
          <li>Évitez les messages trop longs (maximum 2 lignes)</li>
          <li>Le snackbar nécessite du JavaScript pour gérer l'affichage et la disparition automatique</li>
        </ul>
      </div>
    );
  },

  "Basic Snackbar": () => {
    const [show, setShow] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const showSnackbar = () => {
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    };

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
        <button className="tz-button" onClick={showSnackbar}>
          Show Snackbar
        </button>

        {show && (
          <div className="tz-snackbar">
            <p className="tz-snackbar-message">Marked as read</p>
          </div>
        )}
      </div>
    );
  },

  "Snackbar with Action": () => {
    const [show, setShow] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const showSnackbar = () => {
      setShow(true);
      setTimeout(() => setShow(false), 4000);
    };

    const handleUndo = () => {
      setShow(false);
      alert("Action undone!");
    };

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
        <button className="tz-button" onClick={showSnackbar}>
          Show Snackbar
        </button>

        {show && (
          <div className="tz-snackbar">
            <p className="tz-snackbar-message">Marked as read</p>
            <button className="tz-snackbar-action" onClick={handleUndo}>
              UNDO
            </button>
          </div>
        )}
      </div>
    );
  },

  "Snackbar Variants": () => {
    const [variant, setVariant] = useState<string | null>(null);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const showSnackbar = (type: string) => {
      setVariant(type);
      setTimeout(() => setVariant(null), 4000);
    };

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "16px",
        }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <button className="tz-button" onClick={() => showSnackbar("success")}>
            Success
          </button>
          <button className="tz-button" onClick={() => showSnackbar("error")}>
            Error
          </button>
          <button className="tz-button" onClick={() => showSnackbar("warning")}>
            Warning
          </button>
          <button className="tz-button" onClick={() => showSnackbar("info")}>
            Info
          </button>
        </div>

        {variant === "success" && (
          <div className="tz-snackbar success">
            <p className="tz-snackbar-message">File saved successfully</p>
          </div>
        )}
        {variant === "error" && (
          <div className="tz-snackbar error">
            <p className="tz-snackbar-message">Failed to save file</p>
          </div>
        )}
        {variant === "warning" && (
          <div className="tz-snackbar warning">
            <p className="tz-snackbar-message">Storage is almost full</p>
          </div>
        )}
        {variant === "info" && (
          <div className="tz-snackbar info">
            <p className="tz-snackbar-message">New update available</p>
          </div>
        )}
      </div>
    );
  },

  "Snackbar Positions": () => {
    const [position, setPosition] = useState<string | null>(null);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const showSnackbar = (pos: string) => {
      setPosition(pos);
      setTimeout(() => setPosition(null), 4000);
    };

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "16px",
        }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <button className="tz-button" onClick={() => showSnackbar("bottom")}>
            Bottom
          </button>
          <button className="tz-button" onClick={() => showSnackbar("top")}>
            Top
          </button>
          <button className="tz-button" onClick={() => showSnackbar("left")}>
            Left
          </button>
          <button className="tz-button" onClick={() => showSnackbar("right")}>
            Right
          </button>
        </div>

        {position === "bottom" && (
          <div className="tz-snackbar">
            <p className="tz-snackbar-message">Bottom center position</p>
          </div>
        )}
        {position === "top" && (
          <div className="tz-snackbar top">
            <p className="tz-snackbar-message">Top center position</p>
          </div>
        )}
        {position === "left" && (
          <div className="tz-snackbar left">
            <p className="tz-snackbar-message">Bottom left position</p>
          </div>
        )}
        {position === "right" && (
          <div className="tz-snackbar right">
            <p className="tz-snackbar-message">Bottom right position</p>
          </div>
        )}
      </div>
    );
  },
};
