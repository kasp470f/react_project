import React, { useState } from "react";
import '../stylesheet.css';
import ItemComponent from "../components/itemComponents";
import { types } from "../generator/itemText";

const FILTER_MAP = MapFilters();

function Shop(props) {
    const filtering = useFilter(); // It's a custom hook!!
    const itemsList = props.items.filter(FILTER_MAP[filtering.selection]);

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
        <div className="filterButton" aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
            {props.name}
        </div>
    );
}

function MapFilters() {
    const filters = {
        All: () => true,
    };
    
    types.forEach(type => {
        filters[type] = item => item.type === type;
    });

    return filters;
}

export default Shop;