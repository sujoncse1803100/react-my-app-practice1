import React from 'react';
// import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import Data from '../../Data/user_info.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './User.css';

const User = (props) => {
    const btn = {
        backgroundColor: 'cyan',
        color: 'black',
        margin: '10px',
        padding: '0 20px',
        fontSize: '10px'
    }

    const currentUser = props.user;

    // console.log("Current user : ",props.user);

    return (
        
        <div>
            <Row xs={1} md={1} className="g-4 m-2">
                <Col>
                    <Card className="text-dark h-100">
                        <div className="row">
                            <div className=" col-sm-12 col-lg-3 m-4  text-center">
                                <Card.Img className="" variant="top" src={currentUser.uri} />
                            </div>
                            <div className="col-lg-7 col-sm-12">
                                <Card.Body>
                                    
                                    <Card.Text className="text-start text-small">
                                        <small> <b>Name : </b> {currentUser.name}</small> <br />
                                        <small> <b>Email : </b> <a className="email" href="/"> { currentUser.email }</a> </small> <br />
                                        <small><b>Gender : </b> { currentUser.gender }</small><br />
                                        <small><b>Salary : </b> { currentUser.salary }</small><br />
                                        <small><b>IP : </b>{ currentUser.ip_address }</small> <br />
                                    </Card.Text>
                                    <button onClick={() => props.handleClick(props.user)}  style={btn} className="btn" variant="primary">
                                        <span className="btn-add-cart">
                                            <FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon>
                                        </span>
                                        add user
                                    </button>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default User;