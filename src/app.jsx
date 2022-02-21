import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RandomItemCollection, RandomItem } from "./generator/itemGenerator";
import './stylesheet.css';
import { UpdateCartText } from './pages/Cart';
import { CartList, removeTimeoutItem } from './components/cartList';

// Pages
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import { Cart } from './pages/Cart';
import Details from './pages/Details';
import Inventory from './pages/Inventory';
import Error404 from './pages/Error404';

class App extends React.Component {
    constructor() {
        super();
        let itemsGen = RandomItemCollection(40);
        this.state = {
            items: itemsGen,
            selection: undefined,
            cart: [],
        }
        this.onSelect = this.onSelect.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        setInterval(() => { // Interval
            let id = Math.floor(Math.random() * this.state.items.length);
            this.setState({
                items: this.state.items.map(item => {
                    if (item.id === id) {
                        return RandomItem(id);
                    }
                    if (this.state.selection !== undefined && this.state.selection.id === id) {
                        this.setState({ selection: undefined });

                        // Find the removed element(s) in the Cart and remove them + UpdateCartText
                        removeTimeoutItem(id);

                        // alert("This item seems to already have been bought!");
                    }
                    return item;
                }),
            });
        }, Math.floor(Math.random() * + 1500) + 0);
    }

    onSelect(item) {
        this.setState({ selection: item });
    }

    onClose() {
        this.setState({ selection: undefined });
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
                            <Route path='/cart' exact element={<Cart cart={this.state.cart}/>} />
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