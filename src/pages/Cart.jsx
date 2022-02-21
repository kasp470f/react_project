import React from 'react';
import '../stylesheet.css';
import { CartList } from '../components/cartList';

export function Cart() {
    if (CartList !== undefined || CartList !== null) {
        let totalSum = 0;
        CartList.forEach(item => {
            totalSum += item.sumOfRow;
        });
        return (
            <div className='detailsInfo'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rarity</th>
                            <th>Price</th>
                            <th>Stacks</th>
                            <th>Sum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CartList.map(
                            item => {
                                //using Spread syntax to pass the whole item as an attribute
                                return <ItemRow {...item} />
                            })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total: {totalSum} $</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    } else {
        return (<div>CART PAGE</div>);
    }
}

export function ItemRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.rarity}</td>
            <td>{props.price}</td>
            <td>{props.numberOfStacks}</td>
            <td>{props.sumOfRow}</td>
        </tr>);
}

export function UpdateCartText() {
    let cartItem = document.getElementsByClassName('shopping_cart')[0];
    cartItem.textContent = `Cart 🛒 (${CartList.length})`;
};