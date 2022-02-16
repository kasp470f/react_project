import { types, rarities } from "./itemText";

function RandomItem(uniqueID) {
    let type = types[Math.floor(Math.random() * types.length)];
    let rarity = rarities[Math.floor(Math.random() * rarities.length)];
    let name = type
    let price = Math.floor(Math.random() * 100) + 1;

    return {
        id: uniqueID,
        type: type,
        rarity: rarity,
        name: name,
        price: price,
        stats: [],
        amount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ante ac ante luctus congue. Sed tempor, dolor vulputate consectetur dapibus, nibh magna dapibus nisl, vel ornare odio nibh et nisl.",
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