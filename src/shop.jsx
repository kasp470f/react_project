import React from "react";
import './stylesheet.css';

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
                <div>
                    <img src={require("./assets/ring.png")}/>
                    <div class="itemTag">Ring</div>
                </div>
                <div>
                    <img src={require("./assets/chestplate.png")}/>
                    <div class="itemTag">Chestplate</div>
                </div>
                <div>
                    <img src={require("./assets/gem.png")}/>
                    <div class="itemTag">Gem</div>
                </div>
                <div>
                    <img src={require("./assets/sword.png")}/>
                    <div class="itemTag">Sword</div>
                </div>
            </div>
        </div>
    );
}

export default Shop;