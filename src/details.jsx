import React from "react";
import './stylesheet.css';
import RarityColor from "./components/itemRarity";

function Details(props) {
    let itemInfo = props.items[props.itemID];
    console.log(itemInfo.icon)
    return (
        <>
            <button onClick={props.onClose}>Close</button>
            <div className="detailsrow">
                <div className="detailscolumn">
                    <div>
                        <div style={{ background: "radial-gradient(circle, "+ RarityColor(itemInfo) +" -300%, #5f5f5f)", width:"fit-content"}}>
                            <img src={require("./assets/" + itemInfo.icon + ".png")}/>
                        </div>
                    </div>
                    <h3>Timer: <i>0:00:01</i> Price: <i>{itemInfo.price}</i> $</h3>
                </div>
                <div className="detailscolumn">
                    <h1>Item info:</h1>
                    <h3>Item Name: {itemInfo.name}</h3>
                    <h3>Rarity: {itemInfo.rarity}</h3>
                    <h3>Type: {itemInfo.type}</h3>
                    <h3>Amount: {itemInfo.amount}</h3>
                    <h3>{itemInfo.stats}</h3>          
                    <h6>{itemInfo.description}</h6>
                </div>
            </div>
        </>
    );
}

export default Details;