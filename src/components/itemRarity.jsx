function RarityColor(props) {
    if (props.rarity === "Common") {
        return "#ffffff";
    } else if (props.rarity === "Uncommon") {
        return "#00ff44";
    } else if (props.rarity === "Rare") {
        return "#003cff";
    } else if (props.rarity === "Epic") {
        return "#aa00ff";
    } else if (props.rarity === "Legendary") {
        return "#ffa600";
    }
}

export default RarityColor;