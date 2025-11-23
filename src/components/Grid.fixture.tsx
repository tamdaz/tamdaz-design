import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Basic Grid": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{
        width: "100%",
        height: "100vh",
        padding: 32,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <div className="tz-grid cols-3">
          <div className="tz-grid-item">
            <span className="tz-grid-item-icon material-symbols-outlined">folder</span>
            <div className="tz-grid-item-title">Documents</div>
            <div className="tz-grid-item-subtitle">23 files</div>
          </div>
          <div className="tz-grid-item">
            <span className="tz-grid-item-icon material-symbols-outlined">image</span>
            <div className="tz-grid-item-title">Photos</div>
            <div className="tz-grid-item-subtitle">156 files</div>
          </div>
          <div className="tz-grid-item">
            <span className="tz-grid-item-icon material-symbols-outlined">video_library</span>
            <div className="tz-grid-item-title">Videos</div>
            <div className="tz-grid-item-subtitle">12 files</div>
          </div>
          <div className="tz-grid-item">
            <span className="tz-grid-item-icon material-symbols-outlined">music_note</span>
            <div className="tz-grid-item-title">Music</div>
            <div className="tz-grid-item-subtitle">89 files</div>
          </div>
          <div className="tz-grid-item">
            <span className="tz-grid-item-icon material-symbols-outlined">download</span>
            <div className="tz-grid-item-title">Downloads</div>
            <div className="tz-grid-item-subtitle">34 files</div>
          </div>
          <div className="tz-grid-item">
            <span className="tz-grid-item-icon material-symbols-outlined">star</span>
            <div className="tz-grid-item-title">Favorites</div>
            <div className="tz-grid-item-subtitle">45 files</div>
          </div>
        </div>
      </div>
    );
  },
  "File Grid (Drive Style)": () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{
          width: "100%",
          height: "100vh",
          padding: 32,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <div className="tz-grid cols-4 gap-md">
          <div
            className={`tz-grid-item ${selectedId === 1 ? "selected" : ""}`}
            onClick={() => setSelectedId(1)}>
            <span className="tz-grid-item-icon material-symbols-outlined">description</span>
            <div className="tz-grid-item-title">Project-Proposal.pdf</div>
            <div className="tz-grid-item-subtitle">2.4 MB • 2 hours ago</div>
          </div>
          <div
            className={`tz-grid-item ${selectedId === 2 ? "selected" : ""}`}
            onClick={() => setSelectedId(2)}>
            <span className="tz-grid-item-icon material-symbols-outlined">table_chart</span>
            <div className="tz-grid-item-title">Budget-2025.xlsx</div>
            <div className="tz-grid-item-subtitle">456 KB • Yesterday</div>
          </div>
          <div
            className={`tz-grid-item ${selectedId === 3 ? "selected" : ""}`}
            onClick={() => setSelectedId(3)}>
            <span className="tz-grid-item-icon material-symbols-outlined">slideshow</span>
            <div className="tz-grid-item-title">Presentation.pptx</div>
            <div className="tz-grid-item-subtitle">8.7 MB • Last week</div>
          </div>
          <div
            className={`tz-grid-item ${selectedId === 4 ? "selected" : ""}`}
            onClick={() => setSelectedId(4)}>
            <span className="tz-grid-item-icon material-symbols-outlined">code</span>
            <div className="tz-grid-item-title">app.tsx</div>
            <div className="tz-grid-item-subtitle">12 KB • Today</div>
          </div>
          <div
            className={`tz-grid-item ${selectedId === 5 ? "selected" : ""}`}
            onClick={() => setSelectedId(5)}>
            <span className="tz-grid-item-icon material-symbols-outlined">folder</span>
            <div className="tz-grid-item-title">Assets</div>
            <div className="tz-grid-item-subtitle">67 items</div>
          </div>
          <div
            className={`tz-grid-item ${selectedId === 6 ? "selected" : ""}`}
            onClick={() => setSelectedId(6)}>
            <span className="tz-grid-item-icon material-symbols-outlined">photo_library</span>
            <div className="tz-grid-item-title">Screenshots</div>
            <div className="tz-grid-item-subtitle">23 items</div>
          </div>
        </div>
      </div>
    );
  },
  "Grid with Actions": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{
          width: "100%",
          height: "100vh",
          padding: 32,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <div className="tz-grid cols-3 gap-lg">
          <div className="tz-grid-item">
            <div className="tz-grid-item-header">
              <span className="material-symbols-outlined" style={{ fontSize: "32pt" }}>
                article
              </span>
            </div>
            <div className="tz-grid-item-title">Marketing Report</div>
            <div className="tz-grid-item-description">
              Comprehensive analysis of Q4 marketing campaigns and their performance metrics.
            </div>
            <div className="tz-grid-item-actions">
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">download</span>
              </button>
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
          <div className="tz-grid-item">
            <div className="tz-grid-item-header">
              <span className="material-symbols-outlined" style={{ fontSize: "32pt" }}>
                bar_chart
              </span>
            </div>
            <div className="tz-grid-item-title">Sales Dashboard</div>
            <div className="tz-grid-item-description">
              Interactive dashboard showing real-time sales data and performance indicators.
            </div>
            <div className="tz-grid-item-actions">
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">download</span>
              </button>
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
          <div className="tz-grid-item">
            <div className="tz-grid-item-header">
              <span className="material-symbols-outlined" style={{ fontSize: "32pt" }}>
                groups
              </span>
            </div>
            <div className="tz-grid-item-title">Team Directory</div>
            <div className="tz-grid-item-description">
              Complete directory of all team members with contact information and roles.
            </div>
            <div className="tz-grid-item-actions">
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">visibility</span>
              </button>
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">download</span>
              </button>
              <button className="tz-grid-item-action">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  "Responsive Grid": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{
          width: "100%",
          height: "100vh",
          padding: 32,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <div className="tz-grid auto-fill gap-md">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="tz-grid-item compact">
              <span className="tz-grid-item-icon material-symbols-outlined">
                {i % 4 === 0 ? "folder" : i % 4 === 1 ? "description" : i % 4 === 2 ? "image" : "code"}
              </span>
              <div className="tz-grid-item-title">Item {i + 1}</div>
              <div className="tz-grid-item-subtitle">Subtitle</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
