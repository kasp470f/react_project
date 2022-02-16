import React from "react";
import './stylesheet.css';
import ItemComponent from "./components/itemComponents";

class Shop extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: props.items,
        };
    }

    render() {
        return (
            <div className="grid-container">
                <div className="leftFilter">
                    <h3>Filters</h3>
                </div>
                <div className="itemGrid">
                    {this.state.items.map(item => (
                        <ItemComponent key={item.id} {...item} onSelect={this.props.onSelect}/> // Spread Syntax and Map
                    ))}
                </div>
            </div>
        );
    }
}


export default Shop;