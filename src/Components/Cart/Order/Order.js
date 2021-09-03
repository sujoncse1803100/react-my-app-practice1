import React from 'react';
import { useState } from 'react';
import './Order.css';
import {  Collapse, Button } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="cart-container  ">
            <div className="d-flex justify-content-end">
                <button
                    className="cartBtn "
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <span className="btn-cart">
                        <FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon>
                    </span>
                    
                </button>
             </div>
            
            <div className="d-flex justify-content-center">
                <div className="order-desc">
                    <Collapse in={open}>
                    <div  id="example-collapse-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim.
                    </div>
                </Collapse>
                </div>
            </div>
            
        </div>
    );
};

export default Order;