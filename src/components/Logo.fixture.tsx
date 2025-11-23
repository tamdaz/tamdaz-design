import { useEffect } from 'react';
import { useFixtureInput, useFixtureSelect } from 'react-cosmos/client';
import useColorSelect from '../hooks/useColors';

/**
 * Component that represents the square logo.
 */
export default () => {
  const [subdomain] = useFixtureInput("Subdomain", "subdomain");
  const [domain] = useFixtureInput("Domain", "domain");
  const [tld] = useFixtureInput("TLD", "tld");

  const [logoType] = useFixtureSelect('Logo Type', {
    options: ["development", "production"]
  })

  const colorType = useColorSelect();

  useEffect(() => {
    document.body.className = `tz-${colorType}-color`;
  }, [colorType])

  let cssClasses = "tz-square-logo";

  if (logoType === "development") {
    cssClasses += " " + "stripes";
  }

  return <div className="tz-center-element" style={{ width: "100%", height: "100vh", display: "flex" }}>
    <div className={cssClasses} style={{ aspectRatio: "1 / 1" }}>
      <pre>
        &nbsp;{subdomain}
        <br />
        .{domain}
        <br />
        .{tld}<span className="cursor-blinking">_</span>
      </pre>
    </div>
  </div>
}