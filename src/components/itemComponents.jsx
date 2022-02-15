import RandomItem from "../generator/itemGenerator";
import React from "react";
import "../stylesheet.css";

function ItemComponent(props) {
    function onClick() {
        props.onSelect(props.id);
    }
    return (
        <div onClick={onClick}>
            <img src={require("../assets/" + props.icon + ".png")} />
            <div class="itemTag" style={{ color: RarityColor(props) }}>{props.name}</div>
        </div>
    );
}

function RarityColor(props) {
    if (props.rarity === "common") {
        return "black";
    } else if (props.rarity === "uncommon") {
        return "limegreen";
    } else if (props.rarity === "rare") {
        return "blue";
    } else if (props.rarity === "epic") {
        return "purple";
    }
    else if (props.rarity === "legendary") {
        return "orange";
    }
}

export default ItemComponent;