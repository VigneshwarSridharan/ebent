import React, { useState, useEffect } from 'react';
import { APP_NAME } from '../constants';
import CountrySelection from './CountrySelection';
import { Modal, ModalBody, Row, Button, Col, Container } from 'reactstrap';

const TopBar = () => {
    let [visible, setVisible] = useState(false)
    let [modal, setModal] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 500);
    }, [])

    const toggle = () => setModal(!modal);
    return (
        <>
            <div className="header-top">
                <Container fluid>
                    <div className="header-top-content">
                        <CountrySelection />
                        <div className={`brand-logo ${visible ? 'active' : ''}`}>
                            <img src="./assets/images/logo.png" alt={APP_NAME} className="img-fluid" />
                        </div>
                        <div className="d-flex">
                            <img src="/assets/images/profile.png" alt="profile" className="mr-1 mr-sm-3 pointer" onClick={toggle} />
                            <img src="/assets/images/heart.png" alt="heart" className="mr-1 mr-sm-3" />
                            <img src="/assets/images/shopping-cart-1.png" alt="shopping" className="mr-1 mr-sm-3" />
                            <img src="/assets/images/search.png" alt="search" />
                        </div>
                    </div>
                </Container>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered size="lg">
                <ModalBody className="p-0">
                    <img src="/assets/images/login-bg.png" className="img-fluid" alt="" />
                    <div className="py-5 px-3">
                        <Row>
                            <Col sm={{ size: 4, offset: 4 }}>
                                <Button color="primary" className="mb-3" block>Create an Account</Button>
                                <Button color="primary" className="mb-3" block>Login</Button>
                                <Button color="primary" className="mb-3" block>Use as Guest</Button>
                            </Col>
                        </Row>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default TopBar;