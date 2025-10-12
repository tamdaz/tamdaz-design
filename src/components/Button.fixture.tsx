import { useEffect } from "react";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client"

export default {
  "Normal Buttons": () => {
    const [text] = useFixtureInput('Text', "My Button");

    const [colorType] = useFixtureSelect('Color', {
      options: ["ruby", "orange", "yellow", "emerald", "sky", "blue", "purple", "slate"]
    })

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType])

    return <div className="tz-center-element" style={{ width: "100%", height: "100%", display: "flex" }}>
      <div style={{ display: "flex", gap: 16 }}>
        <button className="tz-button">{text}</button>
      </div>
    </div>
  },
  "Rounded Buttons": () => {
    const [text] = useFixtureInput('Text', "My Button");

    const [colorType] = useFixtureSelect('Color', {
      options: ["ruby", "orange", "yellow", "emerald", "sky", "blue", "purple", "slate"]
    })

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType])

    return <div className="tz-center-element" style={{ width: "100%", height: "100%", display: "flex" }}>
      <div style={{ display: "flex", gap: 16 }}>
        <button className="tz-button rounded">{text}</button>
      </div>
    </div>
  },
  "Circle Buttons": () => {
    const [colorType] = useFixtureSelect('Color', {
      options: ["ruby", "orange", "yellow", "emerald", "sky", "blue", "purple", "slate"]
    })

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType])

    return <div className="tz-center-element" style={{ width: "100%", height: "100%", display: "flex" }}>
      <button className="tz-button circle">&copy;</button>
    </div>
  }
}