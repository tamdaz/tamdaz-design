import { useEffect } from "react";
import { useFixtureSelect } from "react-cosmos/client";

const useColorSelect = () => {
    const [colorType, setColorType] = useFixtureSelect('Color', {
        options: ["ruby", "orange", "yellow", "emerald", "sky", "blue", "purple", "slate"]
    });

    useEffect(() => {
        if (localStorage.getItem('color') !== null) {
            type selectedColorType = "ruby" | "orange" | "yellow" | "emerald" | "sky" | "blue" | "purple" | "slate";

            setColorType(localStorage.getItem('color') as selectedColorType);
        } else {
            
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('color', colorType);
    });

    return colorType;
}

export default useColorSelect;