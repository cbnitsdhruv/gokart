import React from "react";
import {Container, Button, Row, Col,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ImagePath from "../../ImagePath";

const index = () => {
    return(
        <section className="footer-component">
            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <div className="f-link">
                            <h3>Useful Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">Home</Link>
                                </li>
                                <li>
                                    <Link to="#">Dummy Link</Link>
                                </li>
                                <li>
                                    <Link to="#">Link Dummy</Link>
                                </li>
                                <li>
                                    <Link to="#">Home Dummy</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className="f-link">
                        <h3>Contact Us</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">Home</Link>
                                </li>
                                <li>
                                    <Link to="#">Dummy Link</Link>
                                </li>
                                <li>
                                    <Link to="#">Link Dummy</Link>
                                </li>
                                <li>
                                    <Link to="#">Home Dummy</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className="f-link">
                        <h3>Social Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">Home</Link>
                                </li>
                                <li>
                                    <Link to="#">Dummy Link</Link>
                                </li>
                                <li>
                                    <Link to="#">Link Dummy</Link>
                                </li>
                                <li>
                                    <Link to="#">Home Dummy</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default index;