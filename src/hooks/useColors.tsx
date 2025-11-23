import { useFixtureSelect } from "react-cosmos/client";

const useColorSelect = () => {
    const [colorType] = useFixtureSelect('Color', {
        options: ["ruby", "orange", "yellow", "emerald", "sky", "blue", "purple", "slate"]
    });

    return colorType;
}

export default useColorSelect;