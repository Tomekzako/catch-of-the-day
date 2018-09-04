import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map( el => {
                            return <Fish key={el} details={this.state.fishes[el]}/>
                        })
                    }
                    </ul>
                </div>
                <Order />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                />
            </div>
        )
    }
}

export default App;