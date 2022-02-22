import React from "react";

export let InventoryList = []

export function Inventory(props) {
    return (
        <div className='cartPage'>
            <table>
                <thead>
                    <HeaderRow />
                </thead>
                <tbody>
                    {InventoryList.map(item => <InventoryRow  {...item} />)}
                </tbody>
            </table>
        </div>
    );
}
function HeaderRow() {
    return (
        <tr>
            <th>Icon</th>
            {/* <th>Key</th> */}
            <th>Name</th>
            <th>Type</th>
            <th>Rarity</th>
            <th>Stats</th>
            <th>Amount</th>
        </tr>
    );
}

function InventoryRow(props) {
    console.log(props);
    return (
        <tr>
            <td><img src={require("../assets/" + props.icon)} alt={props.icon} /></td>
            {/* <td>{props.key}</td> */}
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.rarity}</td>
            <td>
                <ul>
                    {props.stats.forEach(s => <li>{s.value}</li>)}
                </ul>
            </td>
            <td>{props.amount}</td>
        </tr>
    );
}