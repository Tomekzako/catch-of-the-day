import React, {Component} from 'react';

class Fish extends Component {
    render() {
        const { image, name, price, desc, status } = this.props.details;
        return (
            <li className="menu-fish">
            <img src={image} alt={name}/>
            <h3 className="fish-name">{name}</h3>
        </li>
        );
    }

}

export default Fish;
