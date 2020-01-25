import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Title from '../../components/Title';

const Protfolio = () => {
    return (
        <section className="bg-light">
            <Container fluid>
                <Row className="align-items-center" >
                    <Col md={{size:4,order:2}} className="p-0">
                        <div className="text-center p-3">
                            <Title subTitle="Who we are">Protfolio</Title>
                            <p>Quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum </p>
                            <Button color="primary">View All</Button>
                        </div>
                    </Col>
                    <Col md={{size:4,order:1}} className="p-0">
                        <div className="portfolio-grid-item">
                            <div className="image" style={{ backgroundImage: `url('/assets/images/portfolio/portfolio-01.jpg')` }}></div>
                            <div className="overlay">
                                <h5>Lorem Ipsum Dolor</h5>
                                <p>perspiciatis unde omnis iste natus error sit voluptatem</p>
                                <Button color="primary" size="sm">View</Button>
                            </div>
                        </div>
                        <div className="d-sm-flex">
                            <div className="portfolio-grid-item">
                                <div className="image" style={{ backgroundImage: `url('/assets/images/portfolio/portfolio-03.jpg')` }}></div>
                                <div className="overlay">
                                    <h5>Lorem Ipsum Dolor</h5>
                                    <p>perspiciatis unde omnis iste natus error sit voluptatem</p>
                                    <Button color="primary" size="sm">View</Button>
                                </div>
                            </div>
                            <div className="portfolio-grid-item">
                                <div className="image" style={{ backgroundImage: `url('/assets/images/portfolio/portfolio-02.jpg')` }}></div>
                                <div className="overlay">
                                    <h5>Lorem Ipsum Dolor</h5>
                                    <p>perspiciatis unde omnis iste natus error sit voluptatem</p>
                                    <Button color="primary" size="sm">View</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={{size:4,order:3}} className="p-0">
                        <div className="d-sm-flex">
                            <div className="portfolio-grid-item">
                                <div className="image" style={{ backgroundImage: `url('/assets/images/portfolio/portfolio-06.jpg')` }}></div>
                                <div className="overlay">
                                    <h5>Lorem Ipsum Dolor</h5>
                                    <p>perspiciatis unde omnis iste natus error sit voluptatem</p>
                                    <Button color="primary" size="sm">View</Button>
                                </div>
                            </div>
                            <div className="portfolio-grid-item">
                                <div className="image" style={{ backgroundImage: `url('/assets/images/portfolio/portfolio-04.jpg')` }}></div>
                                <div className="overlay">
                                    <h5>Lorem Ipsum Dolor</h5>
                                    <p>perspiciatis unde omnis iste natus error sit voluptatem</p>
                                    <Button color="primary" size="sm">View</Button>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-grid-item">
                            <div className="image" style={{ backgroundImage: `url('/assets/images/portfolio/portfolio-05.jpg')` }}></div>
                            <div className="overlay">
                                <h5>Lorem Ipsum Dolor</h5>
                                <p>perspiciatis unde omnis iste natus error sit voluptatem</p>
                                <Button color="primary" size="sm">View</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Protfolio;