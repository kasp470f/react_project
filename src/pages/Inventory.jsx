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
    let itemInfo = props[0];
    return (
        <tr>
            <td><img src={require("../assets/" + itemInfo.icon)} alt={itemInfo.icon} /></td>
            {/* <td>{props.key}</td> */}
            <td>{itemInfo.name}</td>
            <td>{itemInfo.type}</td>
            <td>{itemInfo.rarity}</td>
            <td>
                <ul>
                    {itemInfo.stats.forEach(s => <li>{s.value}</li>)}
                </ul>
            </td>
            <td>{itemInfo.amount}</td>
        </tr>
    );
}