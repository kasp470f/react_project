import { types, rarities } from "./itemText";

function RandomItem() {
    let type = types[Math.floor(Math.random() * types.length)];
    let rarity = rarities[Math.floor(Math.random() * rarities.length)];
    let name = type

    return {
        type: type,
        rarity: rarity,
        name: name,
        price: 0,
        stats: [],
        amount: 0,
        description: "",
        icon: type,
    };
}

export default RandomItem;