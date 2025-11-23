import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "📖 Documentation": () => {
    return (
      <div className="tz-doc">
        <h1>Pagination</h1>
        <p>Le composant Pagination permet de naviguer entre plusieurs pages avec des boutons circulaires et des contrôles de navigation.</p>

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
              <td><code className="tz-code">.tz-pagination</code></td>
              <td>Conteneur de la pagination</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-pagination-button</code></td>
              <td>Bouton de numéro de page (circulaire)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.active</code></td>
              <td>Page active</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-pagination-nav</code></td>
              <td>Bouton de navigation (première, précédent, suivant, dernière)</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-pagination-ellipsis</code></td>
              <td>Points de suspension (...)</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemples de code HTML</h2>
        <pre className="tz-code-block">{`<div class="tz-pagination">
  <button class="tz-pagination-nav" aria-label="First page">
    <span class="material-symbols-outlined">first_page</span>
  </button>
  <button class="tz-pagination-nav" aria-label="Previous page">
    <span class="material-symbols-outlined">chevron_left</span>
  </button>
  
  <button class="tz-pagination-button">1</button>
  <button class="tz-pagination-button active">2</button>
  <button class="tz-pagination-button">3</button>
  <span class="tz-pagination-ellipsis">...</span>
  <button class="tz-pagination-button">10</button>
  
  <button class="tz-pagination-nav" aria-label="Next page">
    <span class="material-symbols-outlined">chevron_right</span>
  </button>
  <button class="tz-pagination-nav" aria-label="Last page">
    <span class="material-symbols-outlined">last_page</span>
  </button>
</div>`}</pre>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Les boutons de page sont circulaires et numérotés</li>
          <li>Utilisez <code className="tz-code">.active</code> pour la page courante</li>
          <li>Les boutons de navigation utilisent des icônes Material Symbols</li>
          <li>Les boutons désactivés ont l'attribut <code className="tz-code">disabled</code></li>
          <li>Utilisez des points de suspension pour les pages intermédiaires</li>
        </ul>
      </div>
    );
  },

  "Basic Pagination": () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
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
        <div className="tz-pagination">
          <button
            className="tz-pagination-nav"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            aria-label="First page"
          >
            <span className="material-symbols-outlined">first_page</span>
          </button>
          <button
            className="tz-pagination-nav"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {[...Array(Math.min(5, totalPages))].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                className={`tz-pagination-button ${currentPage === pageNum ? "active" : ""}`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}

          {totalPages > 5 && (
            <>
              <span className="tz-pagination-ellipsis">...</span>
              <button
                className={`tz-pagination-button ${currentPage === totalPages ? "active" : ""}`}
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            className="tz-pagination-nav"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <button
            className="tz-pagination-nav"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Last page"
          >
            <span className="material-symbols-outlined">last_page</span>
          </button>
        </div>
      </div>
    );
  },

  "Advanced Pagination": () => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const getPageNumbers = () => {
      const pages: (number | string)[] = [];
      const showEllipsisStart = currentPage > 3;
      const showEllipsisEnd = currentPage < totalPages - 2;

      // First page
      pages.push(1);

      // Ellipsis after first
      if (showEllipsisStart) {
        pages.push("...");
      }

      // Pages around current
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      // Ellipsis before last
      if (showEllipsisEnd) {
        pages.push("...");
      }

      // Last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }

      return pages;
    };

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "16pt", fontWeight: 700 }}>
            Page {currentPage} of {totalPages}
          </p>
        </div>

        <div className="tz-pagination">
          <button
            className="tz-pagination-nav"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            aria-label="First page"
          >
            <span className="material-symbols-outlined">first_page</span>
          </button>
          <button
            className="tz-pagination-nav"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {getPageNumbers().map((page, index) => {
            if (page === "...") {
              return (
                <span key={`ellipsis-${index}`} className="tz-pagination-ellipsis">
                  ...
                </span>
              );
            }
            return (
              <button
                key={page}
                className={`tz-pagination-button ${currentPage === page ? "active" : ""}`}
                onClick={() => setCurrentPage(page as number)}
              >
                {page}
              </button>
            );
          })}

          <button
            className="tz-pagination-nav"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <button
            className="tz-pagination-nav"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Last page"
          >
            <span className="material-symbols-outlined">last_page</span>
          </button>
        </div>
      </div>
    );
  },
};
