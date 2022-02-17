function RarityColor(props) {
    if (props.rarity === "common") {
        return "#ffffff";
    } else if (props.rarity === "uncommon") {
        return "#00ff44";
    } else if (props.rarity === "rare") {
        return "#003cff";
    } else if (props.rarity === "epic") {
        return "#aa00ff";
    } else if (props.rarity === "legendary") {
        return "#ffa600";
    }
}

export default RarityColor;