import React from "react";
import './stylesheet.css';

function Details() {
    return (
        <>
            <div className="detailsrow">
                <div className="detailscolumn"></div>
                <div className="detailscolumn">
                    <div>
                        <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="pic unloaded" />
                    </div>
                    <h3>Timer: <i>0:00:01</i> Price: <i>5.00</i> $</h3>
                </div>
                <div className="detailscolumn">
                    <h1>Item info:</h1>
                    <h3>Strength: <i>100</i></h3>
                    <h3>Stamina: <i>150</i></h3>
                    <h3>Crit chance: <i>2.0</i>%</h3>
                    <h3>Crit damage: <i>10.0</i>%</h3>
                </div>
                <div className="detailscolumn"></div>
            </div>
        </>
    );
}

export default Details;