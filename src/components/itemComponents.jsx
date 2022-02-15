import RandomItem from "../generator/itemGenerator";
import React from "react";
import "../stylesheet.css";

class ItemComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            item: RandomItem()
        };
    }

    render() {
        return (
            <div>
                <img src={require("../assets/" + this.state.item.type +  ".png")}/>
                <div class="itemTag" style={{color: RarityColor(this.state.item)}}>{this.state.item.name}</div>
            </div>
        );
    }
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