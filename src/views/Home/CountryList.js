import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const list = [
    { name: 'Singapore', image: "/assets/images/flags/singapore-7.png" },
    { name: 'Malaysia', image: "/assets/images/flags/malaysia-1.png" },
    { name: 'Thailand', image: "/assets/images/flags/thailand-1.png" },
    { name: 'Indonesia', image: "/assets/images/flags/indonesia-1.png" },
    { name: 'Philippines', image: "/assets/images/flags/philippines-1.png" },
    { name: 'Bangladesh', image: "/assets/images/flags/bangladesh-1.png" },
]

const CountryList = () => {
    return (
        <section className="pt-5 pb-4 border-bottom">
            <Container>
                <Row>
                    {
                        list.map((country, inx) => {
                            let { image, name } = country;
                            return (
                                <Col xs={6} sm={6} md={4} lg={2} key={'country-' + inx}>
                                    <div className="d-flex align-items-center mb-3 flex-column flex-sm-row justify-content-center justify-content-sm-start">
                                        <img src={image} alt={name} className="mr-2 mb-2 mb-sm-0 shadow rounded-circle" />
                                        <p className="m-0">{name}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default CountryList;