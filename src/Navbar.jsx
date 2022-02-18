import React from 'react';
import './stylesheet.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <div className="navbar">
                <div id="logo">Dungeon Loot Web-Shop</div>
                <div className="redirects">
                    <ul>
                        <li onClick={props.onClose}><span>Loot</span></li>
                        <li onClick={props.onClose}><span>Auction</span></li>
                    </ul>
                </div>
                {/* <div className="search_bar">
                    <span>Search Bar</span>
                    <input/>
                </div> */}
                <div className="shopping_cart">
                    <Link to='/Cart'>
                    Basket 🛒
                    </Link>
                    <Link to='/'>
                    Shop
                    </Link>
                    
                    </div>
            </div>
        </>
    );
}

export default Navbar;
