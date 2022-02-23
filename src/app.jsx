import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RandomItemCollection, RandomItem } from "./generator/itemGenerator";
import './stylesheet.css';
import { removeTimeoutItem } from './components/cartList';

// Pages
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import { Cart } from './pages/Cart';
import Details from './pages/Details';
import {Inventory} from './pages/Inventory';
import Error404 from './pages/Error404';

class App extends React.Component {
    constructor() {
        super();
        let itemsGen = RandomItemCollection(40);
        this.state = {
            items: itemsGen,
            selection: undefined,
        }
        this.onSelect = this.onSelect.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onCheckOut = this.onCheckOut.bind(this);
    }

    componentDidMount() {
        setInterval(() => { // Interval
            let id = Math.floor(Math.random() * this.state.items.length);
            this.setState({
                items: this.state.items.map(item => {
                    if (item.id === id) {
                        // Find the removed element(s) in the Cart and remove them + updateCartText
                        removeTimeoutItem(id);
                        return RandomItem(id);
                    }
                    if (this.state.selection !== undefined && this.state.selection.id === id) {
                        this.setState({ selection: undefined });              
                    }
                    return item;
                }),
            });
        }, Math.floor(Math.random() * + 5000) + 1000);
    }

    onSelect(item) {
        this.setState({ selection: item });
    }

    onClose() {
        this.setState({ selection: undefined });
    }

    onCheckOut(removedItems) {
        let items = this.state.items;
        removedItems.forEach(item => {
            let index = items.findIndex(i => i.id === item[0].id);
            if (index !== -1) {
                items[index] = RandomItem(item[0].id);
            }
        });
        this.setState({ items: items });
    }

    render() {
        return (
            <>
                <Router>
                    <div className='App'>
                        <Navbar onClose={this.onClose}/>
                        {/* I V6 blev Switch erstattet af Routes og component erstattet af element*/}
                        <Routes>
                            <Route path='/' exact element={<Shop items={this.state.items} onSelect={this.onSelect} />} />
                            <Route path='/inventory' exact element={<Inventory />} />
                            <Route path='/cart' exact element={<Cart onCheckOut={this.onCheckOut}/>} />
                            <Route path='/details/:id' exact element={<Details item={this.state.selection} />} />
                            
                            {/* If path is not correct, send to error 404 page*/}
                            <Route path='*' element={<Error404 />} />
                        </Routes>
                    </div>
                </Router>
            </>
        );
    }
}

export default App;