import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        })
    }

    addToOrder = key => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order: order})

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
                            return <Fish 
                                        key={el} 
                                        index={el} 
                                        details={this.state.fishes[el]}
                                        addToOrder={this.addToOrder}/>
                        })
                    }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                />
            </div>
        )
    }
}

export default App;