import React from 'react';
import Navbar from './Navbar';
import Shop from './Shop';
import Details from './Details';
import RandomItemCollection from "./generator/itemGenerator";

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
                <Navbar onClose={this.onClose} />
                {this.state.selection === "" ? 
                <Shop items={this.state.items} onSelect={this.onSelect}/> 
                :
                <Details itemID={this.state.selection} items={this.state.items} onClose={this.onClose}/>
                }
            </>
        );
    }
}


export default App;