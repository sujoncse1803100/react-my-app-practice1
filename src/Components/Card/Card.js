// import  {useState}  from 'react';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Data from '../../Data/user_info.json';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap';
import './Card.css';

const MyCard = () => {

    // const [data, setData] = useState(Data);
    // const [user, setUser] = useState([]);

    const btn = {
        backgroundColor: 'cyan',
        color: 'black',
        margin: '10px',
        padding: '0 20px',
        fontSize: '10px'
    }


    return (
        <div>
            <Row xs={1} md={1} className="g-4 m-2">
                {Data.map((p) => (
                    <Col>
                        <Card className="text-dark h-100">
                            <div className="row">
                                <div className=" col-sm-12 col-md-3 m-4  text-center">
                                    <Card.Img className="" variant="top" src={p.uri} />
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <Card.Body>
                                        
                                        <Card.Text className="text-start text-small">
                                            <small> <b>Name : </b> {p.name}</small> <br />
                                            <small> <b>Email : </b> <a className="email" href="/"> { p.email }</a> </small> <br />
                                            <small><b>Gender : </b> { p.gender }</small><br />
                                            <small><b>Salary : </b> { p.salary }</small><br />
                                            <small><b>IP : </b>{ p.ip_address }</small> <br />
                                        </Card.Text>
                                        <button style={btn} className="btn" variant="primary"> add user </button>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyCard;