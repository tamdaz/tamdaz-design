import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>List</h1>
        <p>Le composant List permet d'afficher des éléments sous forme de liste avec icône, contenu et métadonnées.</p>

        <h2>Classes CSS</h2>
        <table className="tz-doc-table">
          <thead>
            <tr>
              <th>Classe</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="tz-code">.tz-list</code></td>
              <td>Conteneur de la liste</td>
            </tr>
            <tr>
              <td><code className="tz-code">.bordered</code></td>
              <td>Ajoute une bordure autour de la liste</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-list-item</code></td>
              <td>Élément de liste</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-list-item-icon</code></td>
              <td>Icône de l'élément</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-list-item-content</code></td>
              <td>Conteneur du texte principal</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-list-item-primary</code></td>
              <td>Texte principal de l'élément</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-list-item-secondary</code></td>
              <td>Texte secondaire de l'élément</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-list-item-meta</code></td>
              <td>Métadonnées (date, heure, etc.)</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemples de code HTML</h2>
        <pre className="tz-code-block">{`<div class="tz-list bordered">
  <div class="tz-list-item">
    <span class="tz-list-item-icon material-symbols-outlined">folder</span>
    <div class="tz-list-item-content">
      <div class="tz-list-item-primary">Documents</div>
      <div class="tz-list-item-secondary">23 files</div>
    </div>
    <div class="tz-list-item-meta">2 hours ago</div>
  </div>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Les éléments de liste sont cliquables</li>
          <li>Utilisez <code className="tz-code">.bordered</code> pour ajouter une bordure</li>
          <li>L'icône est optionnelle</li>
          <li>Les métadonnées sont affichées à droite</li>
        </ul>
      </div>
    );
  },
  "Basic List": () => {
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

        }}
      >
        <div style={{ width: "600px" }}>
          <div className="tz-list bordered">
            <div className="tz-list-item">
              <span className="tz-list-item-icon material-symbols-outlined">folder</span>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">Documents</div>
                <div className="tz-list-item-secondary">23 files</div>
              </div>
              <div className="tz-list-item-meta">2 hours ago</div>
            </div>
            <div className="tz-list-item">
              <span className="tz-list-item-icon material-symbols-outlined">image</span>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">Photos</div>
                <div className="tz-list-item-secondary">156 files</div>
              </div>
              <div className="tz-list-item-meta">Yesterday</div>
            </div>
            <div className="tz-list-item">
              <span className="tz-list-item-icon material-symbols-outlined">video_library</span>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">Videos</div>
                <div className="tz-list-item-secondary">12 files</div>
              </div>
              <div className="tz-list-item-meta">Last week</div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  "List with Actions": () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
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

        }}
      >
        <div style={{ width: "700px" }}>
          <div className="tz-list bordered">
            <div className="tz-list-header">
              <div className="tz-list-header-cell" style={{ flex: 2 }}>Name</div>
              <div className="tz-list-header-cell">Owner</div>
              <div className="tz-list-header-cell">Modified</div>
              <div style={{ width: "100px" }}>Actions</div>
            </div>
            <div
              className={`tz-list-item ${selectedId === 1 ? "selected" : ""}`}
              onClick={() => setSelectedId(1)}
            >
              <span className="tz-list-item-icon material-symbols-outlined">description</span>
              <div className="tz-list-item-content" style={{ flex: 2 }}>
                <div className="tz-list-item-primary">Project Proposal.pdf</div>
                <div className="tz-list-item-secondary">2.4 MB</div>
              </div>
              <div className="tz-list-item-meta" style={{ flex: 1 }}>John Doe</div>
              <div className="tz-list-item-meta" style={{ flex: 1 }}>2 hours ago</div>
              <div className="tz-list-item-actions">
                <button className="tz-list-item-action">
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button className="tz-list-item-action">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
            <div
              className={`tz-list-item ${selectedId === 2 ? "selected" : ""}`}
              onClick={() => setSelectedId(2)}
            >
              <span className="tz-list-item-icon material-symbols-outlined">table_chart</span>
              <div className="tz-list-item-content" style={{ flex: 2 }}>
                <div className="tz-list-item-primary">Budget 2025.xlsx</div>
                <div className="tz-list-item-secondary">456 KB</div>
              </div>
              <div className="tz-list-item-meta" style={{ flex: 1 }}>Jane Smith</div>
              <div className="tz-list-item-meta" style={{ flex: 1 }}>Yesterday</div>
              <div className="tz-list-item-actions">
                <button className="tz-list-item-action">
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button className="tz-list-item-action">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
            <div
              className={`tz-list-item ${selectedId === 3 ? "selected" : ""}`}
              onClick={() => setSelectedId(3)}
            >
              <span className="tz-list-item-icon material-symbols-outlined">slideshow</span>
              <div className="tz-list-item-content" style={{ flex: 2 }}>
                <div className="tz-list-item-primary">Presentation.pptx</div>
                <div className="tz-list-item-secondary">8.7 MB</div>
              </div>
              <div className="tz-list-item-meta" style={{ flex: 1 }}>Bob Johnson</div>
              <div className="tz-list-item-meta" style={{ flex: 1 }}>Last week</div>
              <div className="tz-list-item-actions">
                <button className="tz-list-item-action">
                  <span className="material-symbols-outlined">download</span>
                </button>
                <button className="tz-list-item-action">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  "List with Avatars": () => {
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

        }}
      >
        <div style={{ width: "500px" }}>
          <div className="tz-list bordered">
            <div className="tz-list-item">
              <div className="tz-list-item-avatar">JD</div>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">John Doe</div>
                <div className="tz-list-item-secondary">john.doe@example.com</div>
              </div>
              <button className="tz-list-item-action">
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
            <div className="tz-list-item">
              <div className="tz-list-item-avatar">JS</div>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">Jane Smith</div>
                <div className="tz-list-item-secondary">jane.smith@example.com</div>
              </div>
              <button className="tz-list-item-action">
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
            <div className="tz-list-item">
              <div className="tz-list-item-avatar">BJ</div>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">Bob Johnson</div>
                <div className="tz-list-item-secondary">bob.johnson@example.com</div>
              </div>
              <button className="tz-list-item-action">
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  "Selectable List": () => {
    const [selected, setSelected] = useState<number[]>([]);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const toggleSelection = (id: number) => {
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    };

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <div style={{ width: "600px" }}>
          <div className="tz-list bordered">
            <div className="tz-list-item" onClick={() => toggleSelection(1)}>
              <div className={`tz-list-item-checkbox ${selected.includes(1) ? "checked" : ""}`}></div>
              <span className="tz-list-item-icon material-symbols-outlined">folder</span>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">My Documents</div>
                <div className="tz-list-item-secondary">45 items</div>
              </div>
            </div>
            <div className="tz-list-item" onClick={() => toggleSelection(2)}>
              <div className={`tz-list-item-checkbox ${selected.includes(2) ? "checked" : ""}`}></div>
              <span className="tz-list-item-icon material-symbols-outlined">image</span>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">Photos</div>
                <div className="tz-list-item-secondary">234 items</div>
              </div>
            </div>
            <div className="tz-list-item" onClick={() => toggleSelection(3)}>
              <div className={`tz-list-item-checkbox ${selected.includes(3) ? "checked" : ""}`}></div>
              <span className="tz-list-item-icon material-symbols-outlined">music_note</span>
              <div className="tz-list-item-content">
                <div className="tz-list-item-primary">Music</div>
                <div className="tz-list-item-secondary">67 items</div>
              </div>
            </div>
          </div>
          {selected.length > 0 && (
            <div style={{ marginTop: "16px", fontSize: "13pt" }}>
              {selected.length} item(s) selected
            </div>
          )}
        </div>
      </div>
    );
  },
};
