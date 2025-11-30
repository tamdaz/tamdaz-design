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
        <h1>Accordion (Accordéon)</h1>
        <p>
          Le composant accordéon permet d'afficher et masquer du contenu de manière interactive, idéal pour les FAQ.
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
              <td><code className="tz-code">.tz-accordion</code></td>
              <td>Conteneur principal de l'accordéon</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-accordion-item</code></td>
              <td>Élément individuel de l'accordéon</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-accordion-header</code></td>
              <td>En-tête cliquable</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-accordion-header.active</code></td>
              <td>En-tête d'un élément ouvert</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-accordion-icon</code></td>
              <td>Icône de chevron</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-accordion-content</code></td>
              <td>Contenu masquable</td>
            </tr>
            <tr>
              <td><code className="tz-code">.tz-accordion-content.open</code></td>
              <td>Contenu visible</td>
            </tr>
          </tbody>
        </table>

        <h2>Exemple de code HTML</h2>
        <pre className="tz-code-block">{`<div class="tz-accordion">
  <div class="tz-accordion-item">
    <button class="tz-accordion-header active">
      <span>Qu'est-ce qu'un accordéon ?</span>
      <svg class="tz-accordion-icon" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </button>
    <div class="tz-accordion-content open">
      <p>Un accordéon est un composant qui permet d'afficher et masquer du contenu...</p>
    </div>
  </div>
  
  <div class="tz-accordion-item">
    <button class="tz-accordion-header">
      <span>Comment l'utiliser ?</span>
      <svg class="tz-accordion-icon" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </button>
    <div class="tz-accordion-content">
      <p>Cliquez sur l'en-tête pour ouvrir ou fermer le contenu.</p>
    </div>
  </div>
</div>`}</pre>

        <h2>États interactifs</h2>
        <ul>
          <li><strong>Hover</strong> : Changement de la couleur de fond au survol de l'en-tête</li>
          <li><strong>Active</strong> : Style distinct pour l'élément ouvert</li>
          <li><strong>Animation</strong> : Rotation du chevron et expansion fluide du contenu</li>
        </ul>

        <h2>Notes d'utilisation</h2>
        <ul>
          <li>Parfait pour les FAQ et sections d'aide</li>
          <li>Ajoutez la classe <code className="tz-code">active</code> au header et <code className="tz-code">open</code> au content pour ouvrir un élément</li>
          <li>Le contenu s'anime avec une transition fluide</li>
          <li>Accessible au clavier avec les balises <code className="tz-code">&lt;button&gt;</code></li>
        </ul>
      </div>
    );
  },
  "FAQ Accordion": () => {
    const colorType = useColorSelect();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const faqItems = [
      {
        question: "Qu'est-ce qu'un système de design ?",
        answer: "Un système de design est un ensemble de composants réutilisables, de principes de design et de guidelines qui permettent de créer des interfaces cohérentes et efficaces."
      },
      {
        question: "Comment utiliser ces composants ?",
        answer: "Chaque composant peut être utilisé en ajoutant les classes CSS appropriées à vos éléments HTML. Consultez la documentation de chaque composant pour plus de détails."
      },
      {
        question: "Les composants sont-ils accessibles ?",
        answer: "Oui, tous les composants sont conçus en respectant les standards d'accessibilité WCAG et utilisent des balises sémantiques HTML appropriées."
      },
      {
        question: "Puis-je personnaliser les couleurs ?",
        answer: "Absolument ! Le système utilise des variables CSS qui peuvent être personnalisées selon votre charte graphique. Plusieurs palettes de couleurs sont disponibles."
      }
    ];

    const toggleItem = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="tz-center-element" style={{ width: "100%", minHeight: "100vh", display: "flex" }}>
        <div className="tz-accordion">
          {faqItems.map((item, index) => (
            <div key={index} className="tz-accordion-item">
              <button
                className={`tz-accordion-header ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <svg className="tz-accordion-icon" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className={`tz-accordion-content ${openIndex === index ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
  "FAQ Accordion avec bordures": () => {
    const colorType = useColorSelect();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const faqItems = [
      {
        question: "Qu'est-ce qu'un système de design ?",
        answer: "Un système de design est un ensemble de composants réutilisables, de principes de design et de guidelines qui permettent de créer des interfaces cohérentes et efficaces."
      },
      {
        question: "Comment utiliser ces composants ?",
        answer: "Chaque composant peut être utilisé en ajoutant les classes CSS appropriées à vos éléments HTML. Consultez la documentation de chaque composant pour plus de détails."
      },
      {
        question: "Les composants sont-ils accessibles ?",
        answer: "Oui, tous les composants sont conçus en respectant les standards d'accessibilité WCAG et utilisent des balises sémantiques HTML appropriées."
      },
      {
        question: "Puis-je personnaliser les couleurs ?",
        answer: "Absolument ! Le système utilise des variables CSS qui peuvent être personnalisées selon votre charte graphique. Plusieurs palettes de couleurs sont disponibles."
      }
    ];

    const toggleItem = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="tz-center-element" style={{ width: "100%", minHeight: "100vh", display: "flex" }}>
        <div className="tz-accordion bordered">
          {faqItems.map((item, index) => (
            <div key={index} className="tz-accordion-item">
              <button
                className={`tz-accordion-header ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <svg className="tz-accordion-icon" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className={`tz-accordion-content ${openIndex === index ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
