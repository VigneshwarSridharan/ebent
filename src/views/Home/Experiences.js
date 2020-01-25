import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../../components/Title';

let Experiences = () => {
    return (
        <section className="py-5">
            <Container>
                <Title subTitle="Our Redefining">Experiences</Title>
                <Row>
                    <Col sm={{size:8,offset:2}}>
                        <p className="text-center">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum </p>
                        <p className="text-center">Quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experiences;