import React, { useState } from "react";
import './stylesheet.css';
import ItemComponent from "./components/itemComponents";

const FILTER_MAP = {
    All: () => true,
    Chestplates: item => item.type === "Chestplate",
    Boots: item => item.type === "Boots",
    Helmets: item => item.type === "Helmet",
    Leggings: item => item.type === "Leggings",
    Swords: item => item.type === "Sword",
    Gems: item => item.type === "Gem",
    Meat: item => item.type === "Meat",
    Rings: item => item.type === "Ring"
};

function Shop(props) {
    const filtering = useFilter();
    //const [filter, setFilter] = useState('All');  //it's a hook!!
    const itemsList = props.items
        .filter(FILTER_MAP[filtering.selection]);

    return (
        <div className="grid-container">
            <div className="leftFilter">
                <h3>Filters: </h3>
                { Object.keys(FILTER_MAP).map(btnName => (
                    <FilterButton key={btnName} name={btnName} isPressed={btnName === filtering.selection} setFilter={filtering.setSelection} />
                ))}
            </div>
            <div className="itemGrid">
                {itemsList.map(item => (
                    <ItemComponent key={item.id} {...item} onSelect={props.onSelect} /> // Spread Syntax
                ))}
            </div>
        </div>
    );
}

// Custom hook using built-in useState-hook
function useFilter() {
    const [filter, setFilter] = useState('All');
    
    return { selection: filter, setSelection: setFilter }
}

function FilterButton(props) {
    return (
        // callback function is passed as a prop
        <button className="filterButton" aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
            {props.name}
        </button>
    );
}

export default Shop;