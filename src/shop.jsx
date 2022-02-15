import React from "react";
import './stylesheet.css';
import ItemComponent from "./components/itemComponents";

function Shop() {
    return (
        <div class="grid-container">
            <div class="leftNavBar">
                <p>KASPER WISSENDORF ER:</p>
                <p>A</p>
                <p>B</p>
                <p>C</p>
            </div>
            <div class="itemGrid">
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
            </div>
        </div>
    );
}

export default Shop;