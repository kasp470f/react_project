import RandomItem from "../generator/itemGenerator";
import React from "react";
import "../stylesheet.css";
import RarityColor from "./itemRarity";

function ItemComponent(props) {
    function onClick() {
        props.onSelect(props.id);
    }
    
    return (
        <div onClick={onClick} style={{ background: "radial-gradient(circle, "+ RarityColor(props) +" -300%, #5f5f5f)" }}>
            <img src={require("../assets/" + props.icon + ".png")} />
            <div className="itemTag" style={{ color: RarityColor(props) }}>{props.name}</div>
        </div>
    );
}

export default ItemComponent;