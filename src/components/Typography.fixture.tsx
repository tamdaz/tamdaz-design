import { useEffect } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Headings Hierarchy": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{ width: "100%", height: "100vh", padding: "32px", overflow: "auto", boxSizing: "border-box" }}>
        <h1 className="tz-h1">Heading 1 - 60px</h1>
        <h2 className="tz-h2">Heading 2 - 48px</h2>
        <h3 className="tz-h3">Heading 3 - 36px</h3>
        <h4 className="tz-h4">Heading 4 - 28px</h4>
        <h5 className="tz-h5">Heading 5 - 20px</h5>
        <h6 className="tz-h6">Heading 6 - 16px</h6>
      </div>
    );
  },
  "Display Text": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{ width: "100%", height: "100vh", padding: "32px", overflow: "auto", boxSizing: "border-box" }}>
        <div className="tz-display-1">Display 1</div>
        <div style={{ marginTop: "32px" }} className="tz-display-2">Display 2</div>
      </div>
    );
  },
  "Body Text Variants": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{ width: "100%", height: "100vh", padding: "32px", overflow: "auto", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "800px" }}>
          <p className="tz-body-large">
            This is body large text (18pt). Perfect for introductory paragraphs or lead text
            that needs more emphasis than regular body text.
          </p>
          <p className="tz-body">
            This is regular body text (16pt). The most common text size used throughout
            your application for main content, descriptions, and general information.
          </p>
          <p className="tz-body-small">
            This is body small text (14pt). Useful for secondary information, footnotes,
            or less important details that still need to be readable.
          </p>
        </div>
      </div>
    );
  },
  "Special Text Types": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{ width: "100%", height: "100vh", padding: "32px", overflow: "auto", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <div className="tz-overline">Overline text</div>
            <h3 className="tz-h3">Section Title</h3>
          </div>
          
          <div className="tz-lead">
            This is lead text. It's designed to introduce a section or article with
            slightly larger and more prominent styling than regular body text.
          </div>

          <p className="tz-body">
            Regular paragraph with <span className="tz-code">inline code</span> and{" "}
            <a href="#" className="tz-link">a link to somewhere</a>.
          </p>

          <p className="tz-caption">
            This is caption text, often used for image descriptions, small notes,
            or supplementary information.
          </p>

          <blockquote className="tz-blockquote">
            "This is a blockquote. Use it for citations, testimonials, or to
            highlight important statements within your content."
          </blockquote>
        </div>
      </div>
    );
  },
  "Code Text": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{ width: "100%", height: "100vh", padding: "32px", overflow: "auto", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <p className="tz-body">
            Use the <code className="tz-code">className</code> prop to style your components.
          </p>

          <div>
            <h4 className="tz-h4">Code Block Example</h4>
            <pre className="tz-code-block">
{`const greeting = "Hello, World!";
console.log(greeting);

function add(a, b) {
  return a + b;
}`}
            </pre>
          </div>

          <p className="tz-mono">
            This entire paragraph uses monospace font, useful for technical documentation.
          </p>
        </div>
      </div>
    );
  },
  "Text Utilities": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{ width: "100%", height: "100vh", padding: "32px", overflow: "auto", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p className="tz-body tz-text-bold">Bold text</p>
          <p className="tz-body tz-text-semibold">Semibold text</p>
          <p className="tz-body tz-text-medium">Medium weight text</p>
          <p className="tz-body tz-text-regular">Regular text</p>
          <p className="tz-body tz-text-light">Light text</p>
          <p className="tz-body tz-text-italic">Italic text</p>
          <p className="tz-body tz-text-uppercase">Uppercase text</p>
          <p className="tz-body tz-text-lowercase">LOWERCASE TEXT</p>
          <p className="tz-body tz-text-capitalize">capitalize each word</p>
        </div>
      </div>
    );
  },
  "Text Alignment": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{ width: "100%", height: "100vh", padding: "32px", overflow: "auto", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p className="tz-body tz-text-left">Left aligned text (default)</p>
          <p className="tz-body tz-text-center">Center aligned text</p>
          <p className="tz-body tz-text-right">Right aligned text</p>
        </div>
      </div>
    );
  },
  "Complete Example": () => {
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div style={{ width: "100%", height: "100vh", padding: "32px", overflow: "auto", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <div className="tz-overline">Design System</div>
            <h1 className="tz-h1">Typography Guide</h1>
          </div>

          <p className="tz-lead">
            A comprehensive typography system using Inter for UI text and Adwaita Mono
            for code, providing clear hierarchy and excellent readability.
          </p>

          <div>
            <h2 className="tz-h2">Getting Started</h2>
            <p className="tz-body">
              Typography is one of the most important aspects of design. It helps establish
              hierarchy, convey information, and create a consistent visual language
              throughout your application.
            </p>
          </div>

          <div>
            <h3 className="tz-h3">Using the System</h3>
            <p className="tz-body">
              Apply classes like <code className="tz-code">.tz-h1</code> through{" "}
              <code className="tz-code">.tz-h6</code> for headings, and{" "}
              <code className="tz-code">.tz-body</code> for body text. Check out the{" "}
              <a href="#" className="tz-link">documentation</a> for more details.
            </p>
          </div>

          <blockquote className="tz-blockquote">
            "Good typography is invisible. Great typography is also invisible, but
            it makes the content shine."
          </blockquote>

          <p className="tz-caption">Last updated: November 2025</p>
        </div>
      </div>
    );
  },
};
