import React from 'react';
import { useState } from 'react';
import './Order.css';
import {  Collapse } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'

const Order = (props) => {
    const [open, setOpen] = useState(false);
    // console.log(props.user);

    return (
        <div className="cart-container ">
            
            <div className="d-flex justify-content-between">
                

                <div className="ms-auto">
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

                <div className="margin">
                    <span className="m-1">
                        <span className="btn-user">
                            <FontAwesomeIcon icon={ faUser }></FontAwesomeIcon>
                        </span>
                        {props.user.length}
                    </span>
                </div>
                
            </div>
            
            <div className="d-flex justify-content-center">
                <div className="order-desc">
                    <Collapse in={open}>
                    <div  id="example-collapse-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam culpa sequi voluptatibus fuga a quaerat aperiam, corporis autem beatae officiis!
                    </div>
                </Collapse>
                </div>
            </div>
        </div>
    );
};

export default Order;