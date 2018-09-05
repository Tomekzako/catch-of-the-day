import React, { Component } from 'react';
import { formatPrice } from '../helpers';


class Order extends Component {
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prev, cur) => {
            const fish = this.props.fishes[cur];
            const count = this.props.order[cur];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prev + (count * fish.price);
            }
            return prev;
            
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                {orderIds}
                <div className="total">
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}


export default Order;