import { types, rarities, itemNames } from "./itemText";

export function RandomItem(uniqueID) {
    let type = types[Math.floor(Math.random() * types.length)];
    let rarity = rarities[Math.floor(Math.random() * rarities.length)];
    let name = itemNames[type][Math.floor(Math.random() * itemNames[type].length)];
    let price = Math.floor(Math.random() * 100) + 1;
    let amount = (type === "Gem" || type === "Meat" || type === "Potion" || type === "Drop") ? Math.floor(Math.random() * 10) + 1 : 1;

    return {
        id: uniqueID,
        type: type,
        rarity: rarity,
        name: name,
        price: price,
        stats: [],
        amount: amount,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ante ac ante luctus congue. Sed tempor, dolor vulputate consectetur dapibus, nibh magna dapibus nisl, vel ornare odio nibh et nisl.",
        icon: type.toLowerCase() + ".png",
    };
}

export function RandomItemCollection(count) {
    let items = [];
    for (let i = 0; i < count; i++) {
        items.push(RandomItem(i));
    }
    return items;
}