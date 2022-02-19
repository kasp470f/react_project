import React from "react";
import '../stylesheet.css';
import RarityColor from "../components/itemRarity";

function Details(props) {
    let itemInfo = props.item;
    if (itemInfo === undefined) {
        return <div>No item selected</div>;
    }

    return (
        <>
            <div className="detailsGrid">
                <div className="detailsColumn" id="image">
                    <div className="detailsImageContainer">
                        <div style={{ background: "radial-gradient(circle, " + RarityColor(itemInfo) + " -300%, #5f5f5f)" }}>
                            <img src={require("../assets/" + itemInfo.icon)} alt="the Game Object"/>
                        </div>
                    </div>
                </div>
                <div className="itemPrice" id="price">
                        <p>Price: <i>{itemInfo.price}</i> $</p>
                    </div>
                <div className="detailsColumn" id="info">
                    <div className="detailsInfo">
                        <h1>Item info:</h1>
                        <p>Item Name: <i>{itemInfo.name}</i></p>
                        <p>Rarity: <i>{itemInfo.rarity}</i></p>
                        <p>Type: <i>{itemInfo.type}</i></p>
                        <p>Amount: <i>{itemInfo.amount}</i></p>
                        <p>{itemInfo.stats}</p>
                        <div className="itemDescription">
                            <p>Description:</p>
                            <p>{itemInfo.description}</p>
                        </div>

                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;