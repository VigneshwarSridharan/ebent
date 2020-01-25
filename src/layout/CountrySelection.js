import React, { useState } from 'react';
import { Modal, ModalBody, Row, Col, Button } from 'reactstrap';

const countryList = [
    { name: 'Singapore', image: "/assets/images/flags/singapore.png" },
    { name: 'Malaysia', image: "/assets/images/flags/malasya.png" },
    { name: 'Thailand', image: "/assets/images/flags/thailand.png" },
    { name: 'Indonesia', image: "/assets/images/flags/indonesia.png" },
    { name: 'Philippines', image: "/assets/images/flags/philippines.png" },
    { name: 'Bangladesh', image: "/assets/images/flags/bangladesh.png" },
]

const CountrySelection = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <div className="country-selection" onClick={toggle}>
                <img src="/assets/images/flags/singapore.png" alt="singapore" height="21" className="mr-2" />
                <span>SG</span>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered size="lg" className="country-selection-modal">
                <ModalBody>
                    <h3 className="text-center mb-5 mt-2">Choose Country</h3>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }}>
                            <Row>
                                {
                                    countryList.map((country, inx) => {
                                        let { name, image } = country
                                        return (
                                            <Col sm={6} key={'countrt-selection-' + inx}>
                                                <div className="country-selection-item" >
                                                    <img src={image} alt={name} className="mr-3" />
                                                    <span>{name}</span>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5 mb-3">
                        <Col sm={4}>
                            <Button color="light" block className="mb-3 mb-sm-0">Continue</Button>
                        </Col>
                        <Col sm={4}>
                            <Button color="primary" block>Confirm</Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    )
}

export default CountrySelection;