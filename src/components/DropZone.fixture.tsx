import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>Drop Zone</h1>
        <p>Le composant Drop Zone permet aux utilisateurs de glisser-déposer des fichiers ou de cliquer pour les sélectionner.</p>

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
              <td><code className="tz-code">.tz-dropzone</code></td>
              <td>Conteneur de la zone de dépôt</td>
            </tr>
            <tr>
              <td><code className="tz-code">.dragover</code></td>
              <td>État pendant le survol avec un fichier</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropzone-icon</code></td>
              <td>Icône de la zone de dépôt</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropzone-title</code></td>
              <td>Titre de la zone</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropzone-subtitle</code></td>
              <td>Sous-titre / instructions</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropzone-input</code></td>
              <td>Input de fichier (masqué)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropzone-files</code></td>
              <td>Liste des fichiers ajoutés</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-dropzone-file</code></td>
              <td>Un fichier dans la liste</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemples de code HTML</h2>
        <pre className="tz-code-block">{`<div class="tz-dropzone">
  <span class="tz-dropzone-icon material-symbols-outlined">upload_file</span>
  <h3 class="tz-dropzone-title">Drop files here</h3>
  <p class="tz-dropzone-subtitle">or click to select files</p>
  <input type="file" class="tz-dropzone-input" multiple />
</div>

<!-- With files -->
<div class="tz-dropzone-files">
  <div class="tz-dropzone-file">
    <span class="tz-dropzone-file-icon material-symbols-outlined">description</span>
    <div class="tz-dropzone-file-info">
      <div class="tz-dropzone-file-name">document.pdf</div>
      <div class="tz-dropzone-file-size">2.5 MB</div>
    </div>
    <button class="tz-dropzone-file-remove">×</button>
  </div>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Supporte le glisser-déposer et la sélection par clic</li>
          <li>Utilisez l'attribut <code className="tz-code">multiple</code> pour accepter plusieurs fichiers</li>
          <li>La classe <code className="tz-code">.dragover</code> s'ajoute automatiquement au survol</li>
          <li>Gérez les événements <code className="tz-code">drop</code> et <code className="tz-code">change</code> avec JavaScript</li>
        </ul>
      </div>
    );
  },

  "Basic Drop Zone": () => {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = () => {
      setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles([...files, ...droppedFiles]);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files);
        setFiles([...files, ...selectedFiles]);
      }
    };

    const handleRemoveFile = (index: number) => {
      setFiles(files.filter((_, i) => i !== index));
    };

    const formatFileSize = (bytes: number) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
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
        <div style={{ width: "100%", maxWidth: "600px" }}>
          <div
            className={`tz-dropzone ${isDragging ? "dragover" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <span className="tz-dropzone-icon material-symbols-outlined">upload_file</span>
            <h3 className="tz-dropzone-title">Drop files here</h3>
            <p className="tz-dropzone-subtitle">or click to select files</p>
            <input
              id="file-input"
              type="file"
              className="tz-dropzone-input"
              multiple
              onChange={handleFileSelect}
            />
          </div>

          {files.length > 0 && (
            <div className="tz-dropzone-files">
              {files.map((file, index) => (
                <div key={index} className="tz-dropzone-file">
                  <span className="tz-dropzone-file-icon material-symbols-outlined">description</span>
                  <div className="tz-dropzone-file-info">
                    <div className="tz-dropzone-file-name">{file.name}</div>
                    <div className="tz-dropzone-file-size">{formatFileSize(file.size)}</div>
                  </div>
                  <button
                    className="tz-dropzone-file-remove"
                    onClick={() => handleRemoveFile(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },

  "Single File Drop Zone": () => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = () => {
      setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length > 0) {
        setFile(e.dataTransfer.files[0]);
      }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0]);
      }
    };

    const formatFileSize = (bytes: number) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
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
        <div style={{ width: "100%", maxWidth: "600px" }}>
          <div
            className={`tz-dropzone ${isDragging ? "dragover" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("single-file-input")?.click()}
          >
            <span className="tz-dropzone-icon material-symbols-outlined">
              {file ? "check_circle" : "upload_file"}
            </span>
            <h3 className="tz-dropzone-title">
              {file ? "File uploaded" : "Drop a file here"}
            </h3>
            <p className="tz-dropzone-subtitle">
              {file ? file.name : "or click to select a file"}
            </p>
            <input
              id="single-file-input"
              type="file"
              className="tz-dropzone-input"
              onChange={handleFileSelect}
            />
          </div>

          {file && (
            <div className="tz-dropzone-files">
              <div className="tz-dropzone-file">
                <span className="tz-dropzone-file-icon material-symbols-outlined">description</span>
                <div className="tz-dropzone-file-info">
                  <div className="tz-dropzone-file-name">{file.name}</div>
                  <div className="tz-dropzone-file-size">{formatFileSize(file.size)}</div>
                </div>
                <button
                  className="tz-dropzone-file-remove"
                  onClick={() => setFile(null)}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
};
