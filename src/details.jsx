import React from "react";
import './stylesheet.css';

function Details(props) {
    let itemInfo=props.Items[props.id];
    return (
        <>
            <button onClick={props.onClose}>Close</button>
            <div className="detailsrow">
                <div className="detailscolumn">
                    <div>
                        <img src={itemInfo.icon} alt="text" />
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