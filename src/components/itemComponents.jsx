import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet.css";
import RarityColor from "./itemRarity";

function ItemComponent(props) {
    function onClick() {
        props.onSelect(props);
    }


    return (
        <div onClick={onClick} style={{ background: "radial-gradient(circle, " + RarityColor(props) + " -300%, #5f5f5f)" }}>
            <Link to={`/details/${props.id}`}>
                <img src={require("../assets/" + props.icon)} alt="the Game Object" />
                <div className="itemTag" style={{ color: RarityColor(props) }}>{props.name}</div>
            </Link>
        </div>
    );
}

export default ItemComponent;