import React from 'react';
import { Container, FormGroup, Input, Button, Row, Col } from 'reactstrap';
import Title from '../../components/Title';

const JoinUs = () => {
    return (
        <section className="py-5 border-bottom">
            <Container>
                <Row>
                    <Col sm={{ size: 6, offset: 3 }} className="text-center">
                        <Title subTitle="Subscribe our newsletter and stay up to date">Join Us</Title>
                        <FormGroup>
                            <Input type="email" placeholder="Email Address" />
                        </FormGroup>
                        <Button color="primary">SUBSCRIBE</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default JoinUs