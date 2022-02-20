import { types, rarities, itemNames } from "./itemData";

export function RandomItem(uniqueID) {
    let type = types[Math.floor(Math.random() * types.length)];
    let rarity = rarities[Math.floor(Math.random() * rarities.length)];
    let name = itemNames[type][Math.floor(Math.random() * itemNames[type].length)];
    let amount = (type === "Gem" || type === "Meat" || type === "Potion" || type === "Drop") ? Math.floor(Math.random() * 10) + 1 : 1;

    // Change price based on rarity
    let price = PriceGen(rarity);

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

function PriceGen(rarity) {
    let price = 0;
    switch (rarity) {
        case "Common":
            price = Math.floor(Math.random() * 100) + 1;
            break;
        case "Uncommon":
            price = Math.floor(Math.random() * 100) + 101;
            break;
        case "Rare":
            price = Math.floor(Math.random() * 100) + 201;
            break;
        case "Epic":
            price = Math.floor(Math.random() * 100) + 301;
            break;
        case "Legendary":
            price = Math.floor(Math.random() * 100) + 401;
            break;
        default:
            price = Math.floor(Math.random() * 100) + 1;
            break;
    }
    return price;
}