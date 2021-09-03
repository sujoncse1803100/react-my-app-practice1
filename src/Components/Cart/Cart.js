import React from 'react';
import Order from './Order/Order';

const Cart = (props) => {
    console.log(props.user);
    return (
        <div>
            <Order user={props.user}  />
        </div>
    );
};

export default Cart;