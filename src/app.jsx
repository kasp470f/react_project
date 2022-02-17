import React from 'react';
import Navbar from './Navbar';
import Shop from './Shop';
import Details from './Details';
import { RandomItemCollection, RandomItem } from "./generator/itemGenerator";
import './stylesheet.css';


class App extends React.Component {
    constructor() {
        super();
        let itemsGen = RandomItemCollection(25);        
        this.state = {
            items: itemsGen,
            selection: "",
        }
        this.onSelect = this.onSelect.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            let id = Math.floor(Math.random() * this.state.items.length);
            this.setState({
                items: this.state.items.map(item => {
                    if (item.id === id) {
                        return RandomItem(id);
                    }
                    if (this.state.selection === id) {
                        this.setState({ selection: "" });
                        alert("You lost the item!");
                    }
                    return item;
                }),
            });
        }, Math.floor(Math.random() * 5000) + 1000);
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
                <Navbar onClose={this.onClose} />
                {this.state.selection === "" ?
                    <Shop items={this.state.items} onSelect={this.onSelect} />
                    :
                    <Details itemID={this.state.selection} items={this.state.items} onClose={this.onClose} />
                }
            </>
        );
    }
}


export default App;