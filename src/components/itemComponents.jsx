import RandomItem from "../generator/itemGenerator";
import React from "react";
import "../stylesheet.css";

function ItemComponent(props) {
    return (
        <div style={{ background: "radial-gradient(circle, "+ RarityColor(props) +" -500px, #5f5f5f)" }}>
            <img src={require("../assets/" + props.icon + ".png")} />
            <div class="itemTag" style={{ color: RarityColor(props) }}>{props.name}</div>
        </div>
    );
}

function RarityColor(props) {
    if (props.rarity === "common") {
        return "#000000";
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

export default ItemComponent;