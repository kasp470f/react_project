import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Shop from './Shop';
import Cart from './Cart';
import Details from './Details';
import RandomItemCollection from "./generator/itemGenerator";
import './stylesheet.css';


class App extends React.Component {
    constructor() {
        super();
        let itemsGen = RandomItemCollection(12);
        this.state = {
            items: itemsGen,
            selection: "",
        }
        this.onSelect = this.onSelect.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onSelect(id) {
        this.setState({ selection: id });
    }

    onClose() {
        this.setState({ selection: "" });
    }

    render() {
        return (
            <>
                <Router>
                    <div className='App'>
                        <Navbar onClose={this.onClose} />
                        {/* I V6 blev Switch erstattet af Routes 
                            og component erstattet af element*/}
                        <Routes>
                            <Route path='/' exact element={<Shop items={this.state.items} onSelect={this.onSelect} />} />
                            <Route path='/Cart' exact element={<Cart name='Cart' />} />
                        </Routes>
                    </div>
                </Router>

                
                {/* {this.state.selection === "" ?
                    <Shop items={this.state.items} onSelect={this.onSelect} />
                    :
                    <Details itemID={this.state.selection} items={this.state.items} onClose={this.onClose} />
                } */}
            </>
        );
    }
}


export default App;