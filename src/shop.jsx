import React from "react";
import './stylesheet.css';
import ItemComponent from "./components/itemComponents";
import RandomItemCollection from "./generator/itemGenerator";

class Shop extends React.Component {
    constructor() {
        super();
        let itemsGen = RandomItemCollection(12);
        this.state = {
            items: itemsGen,
        };
    }

    render() {
        return (
            <div class="grid-container">
                <div class="leftNavBar">
                    <p>KASPER WISSENDORF ER:</p>
                    <p>A</p>
                    <p>B</p>
                    <p>C</p>
                </div>
                <div class="itemGrid">
                    {this.state.items.map(item => (
                        <ItemComponent key={item.id} {...item} /> // spread syntax
                    ))}
                </div>
            </div>
        );
    }
}


export default Shop;