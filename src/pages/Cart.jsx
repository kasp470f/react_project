import React from 'react';
import '../stylesheet.css';
import { CartList, CartKey } from '../components/cartList';
import { InventoryList } from './Inventory';

export function Cart(props) {
    if (CartList !== undefined || CartList !== null) {
        let totalSum = 0;
        CartList.forEach(item => totalSum += item.price);

        return (
            <div className='cartPage'>
                <table>
                    <thead>
                        <HeaderRow />
                    </thead>
                    <tbody>
                        {CartList.map(
                            item => <ItemRow {...item} /> //using Spread syntax to pass the whole item as an attribute
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total: {totalSum} gold</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><div onClick={() => checkOut(props)}>Checkout</div></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    } else {
        return <div>CART PAGE</div>;
    }
}

function HeaderRow() {
    return (
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Rarity</th>
            <th>Amount</th>
            <th>Price</th>
        </tr>
    );
}

function ItemRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.rarity}</td>
            <td>{props.amount}</td>
            <td>{props.price}</td>
        </tr>
    );
}

function checkOut(props) {
    let removedItems = [];
    if (CartList !== null || CartList !== undefined) {
        for (let i = (CartList.length - 1); i >= 0; i--) {
            let shiftedItem = CartList.splice((CartList.length - 1), 1);
            let boughtItem = Object.assign(
                { key: CartKey() },
                { ...shiftedItem }
            );
            removedItems.push(shiftedItem);
            InventoryList.push(boughtItem);
        }
        props.onCheckOut(removedItems);
        updateCartText();
    }
}

export function updateCartText() {
    let cartItem = document.getElementsByClassName('shopping_cart')[0];
    cartItem.textContent = `Cart 🛒 (${CartList.length})`;
};