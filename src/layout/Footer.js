import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className="py-5 ebent-footer">
            <Container>
                <Row className="align-items-sm-center align-items-start">
                    <Col xs={6} md={3}>
                        <a className="link" href="#my-account">My Account</a>
                        <a className="link" href="#faq">FAQ</a>
                        <a className="link" href="#about-us">About us</a>
                    </Col>
                    <Col xs={6} md={3}>
                        <a className="link" href="#furniture-rental">Furniture Rental</a>
                        <a className="link" href="#special-furniture-rental">Special Furniture Rental</a>
                        <a className="link" href="#space-planning">Space Planning</a>
                    </Col>
                    <Col xs={6} md={3}>
                        <a className="link" href="#newsletter">Newsletter</a>
                        <a className="link" href="#policy">Policy</a>
                        <a className="link" href="#terms-conditions">Terms & Conditions</a>
                    </Col>
                    <Col xs={6} md={3}>
                        <ul className="social-media">
                            <li>
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                        <p>Copyright © 2019 Ebent. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;