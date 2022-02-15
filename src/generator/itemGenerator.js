import { types, rarities } from "./itemText";

function RandomItem(uniqueID) {
    let type = types[Math.floor(Math.random() * types.length)];
    let rarity = rarities[Math.floor(Math.random() * rarities.length)];
    let name = type

    return {
        id: uniqueID,
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

function RandomItemCollection(count) {
    let items = [];
    for (let i = 0; i < count; i++) {
        items.push(RandomItem(i));
    }
    return items;
}

export default RandomItemCollection;