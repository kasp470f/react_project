import React from 'react';
import './stylesheet.css';

function Navbar() {
    return (
        <>
            <div class="navbar">
                <div id="logo">Dungeon Loot Web-Shop</div>
                <div class="redirects">
                    <ul>
                        <li><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                    </ul>
                </div>
                <div class="search_bar">
                    <span>Search Bar</span>
                    <input/>
                </div>
                <div class="shopping_cart">🛒</div>
            </div>
        </>
    );
}

export default Navbar;