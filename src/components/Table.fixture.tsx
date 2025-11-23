import { useEffect } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>Table</h1>
        <p>Le composant Table affiche des données tabulaires avec support du style zébré, survol et différentes variantes.</p>

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
              <td><code className="tz-code">.tz-table-container</code></td>
              <td>Conteneur avec scroll horizontal</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-table</code></td>
              <td>Tableau principal</td>
            </tr>
            <tr>
              <td><code className="tz-code">.striped</code></td>
              <td>Style zébré (lignes alternées)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.hoverable</code></td>
              <td>Effet de survol sur les lignes</td>
            </tr>
            <tr>
              <td><code className="tz-code">.compact</code></td>
              <td>Version compacte (padding réduit)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.bordered</code></td>
              <td>Bordures sur toutes les cellules</td>
            </tr>
            <tr>
              <td><code className="tz-code">.center</code></td>
              <td>Alignement centré (th ou td)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.right</code></td>
              <td>Alignement à droite (th ou td)</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemples de code HTML</h2>
        <pre className="tz-code-block">{`<div class="tz-table-container">
  <table class="tz-table striped hoverable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th class="right">Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td class="right">30</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td class="right">25</td>
      </tr>
    </tbody>
  </table>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Utilisez <code className="tz-code">.striped</code> pour le style zébré</li>
          <li>Ajoutez <code className="tz-code">.hoverable</code> pour l'effet de survol</li>
          <li>Le conteneur gère automatiquement le scroll horizontal sur mobile</li>
          <li>Combinez plusieurs classes pour personnaliser le style</li>
        </ul>
      </div>
    );
  },

  "Basic Table": () => {
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
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <div className="tz-table-container">
            <table className="tz-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th className="right">Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john.doe@example.com</td>
                  <td>Developer</td>
                  <td className="right">30</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane.smith@example.com</td>
                  <td>Designer</td>
                  <td className="right">25</td>
                </tr>
                <tr>
                  <td>Bob Johnson</td>
                  <td>bob.johnson@example.com</td>
                  <td>Manager</td>
                  <td className="right">35</td>
                </tr>
                <tr>
                  <td>Alice Williams</td>
                  <td>alice.williams@example.com</td>
                  <td>Developer</td>
                  <td className="right">28</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },

  "Striped Table": () => {
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
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <div className="tz-table-container">
            <table className="tz-table striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th className="center">Stock</th>
                  <th className="right">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Laptop</td>
                  <td>Electronics</td>
                  <td className="center">45</td>
                  <td className="right">$999.99</td>
                </tr>
                <tr>
                  <td>Mouse</td>
                  <td>Accessories</td>
                  <td className="center">120</td>
                  <td className="right">$29.99</td>
                </tr>
                <tr>
                  <td>Keyboard</td>
                  <td>Accessories</td>
                  <td className="center">80</td>
                  <td className="right">$79.99</td>
                </tr>
                <tr>
                  <td>Monitor</td>
                  <td>Electronics</td>
                  <td className="center">30</td>
                  <td className="right">$399.99</td>
                </tr>
                <tr>
                  <td>Headphones</td>
                  <td>Audio</td>
                  <td className="center">65</td>
                  <td className="right">$149.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },

  "Hoverable & Striped Table": () => {
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
        <div style={{ width: "100%", maxWidth: "900px" }}>
          <div className="tz-table-container">
            <table className="tz-table striped hoverable">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th className="center">Quantity</th>
                  <th className="right">Total</th>
                  <th className="center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD-001</td>
                  <td>John Doe</td>
                  <td>Laptop Pro 15"</td>
                  <td className="center">1</td>
                  <td className="right">$1,299.99</td>
                  <td className="center">✓ Shipped</td>
                </tr>
                <tr>
                  <td>#ORD-002</td>
                  <td>Jane Smith</td>
                  <td>Wireless Mouse</td>
                  <td className="center">2</td>
                  <td className="right">$59.98</td>
                  <td className="center">⏳ Processing</td>
                </tr>
                <tr>
                  <td>#ORD-003</td>
                  <td>Bob Johnson</td>
                  <td>Mechanical Keyboard</td>
                  <td className="center">1</td>
                  <td className="right">$149.99</td>
                  <td className="center">✓ Delivered</td>
                </tr>
                <tr>
                  <td>#ORD-004</td>
                  <td>Alice Williams</td>
                  <td>USB-C Hub</td>
                  <td className="center">3</td>
                  <td className="right">$89.97</td>
                  <td className="center">⏳ Processing</td>
                </tr>
                <tr>
                  <td>#ORD-005</td>
                  <td>Charlie Brown</td>
                  <td>External SSD 1TB</td>
                  <td className="center">1</td>
                  <td className="right">$199.99</td>
                  <td className="center">✓ Shipped</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },

  "Compact Table": () => {
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
        <div style={{ width: "100%", maxWidth: "600px" }}>
          <div className="tz-table-container">
            <table className="tz-table compact striped">
              <thead>
                <tr>
                  <th>File</th>
                  <th className="center">Type</th>
                  <th className="right">Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>document.pdf</td>
                  <td className="center">PDF</td>
                  <td className="right">2.5 MB</td>
                </tr>
                <tr>
                  <td>image.png</td>
                  <td className="center">Image</td>
                  <td className="right">1.2 MB</td>
                </tr>
                <tr>
                  <td>video.mp4</td>
                  <td className="center">Video</td>
                  <td className="right">45.8 MB</td>
                </tr>
                <tr>
                  <td>spreadsheet.xlsx</td>
                  <td className="center">Excel</td>
                  <td className="right">850 KB</td>
                </tr>
                <tr>
                  <td>presentation.pptx</td>
                  <td className="center">PowerPoint</td>
                  <td className="right">5.3 MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },
};
