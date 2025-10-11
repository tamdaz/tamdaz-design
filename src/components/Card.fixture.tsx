import { useEffect } from 'react';
import { useFixtureInput, useFixtureSelect } from 'react-cosmos/client';

/**
 * Component that represents the card.
 */
export default () => {
  const [title] = useFixtureInput("Title", "This is the title");
  const [description] = useFixtureInput("Description", "Lorem ipsum dolor sit amet consectur.");

  // const [logoType] = useFixtureSelect('Logo Type', {
  //   options: ["development", "production"]
  // })

  const [colorType] = useFixtureSelect('Color', {
    options: ["red", "orange", "yellow", "emerald", "sky", "blue", "purple", "rose", "slate"]
  })

  useEffect(() => {
    document.body.className = `tz-${colorType}-color`;
  }, [colorType])

  return <div className="tz-center-element" style={{ width: "100%", height: "100%", display: "flex" }}>
    <div className="tz-card">
      <span className="tz-label">Label</span>
      <div style={{ aspectRatio: "16 / 9", position: "relative", userSelect: "none" }}>
        <img src="https://placehold.co/600x400/png" width="100%" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
}
