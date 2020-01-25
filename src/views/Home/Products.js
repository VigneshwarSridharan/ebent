import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../../components/Title';

let productsList = [
    {
        image: '/assets/images/products/product-01.jpg',
        name: 'Furnitures'
    },
    {
        image: '/assets/images/products/product-02.jpg',
        name: 'Banners'
    },
    {
        image: '/assets/images/products/product-03.jpg',
        name: 'System Structure'
    },
    {
        image: '/assets/images/products/product-04.jpg',
        name: 'Translation'
    },
]

const Products = () => {
    return (
        <section className="py-5 border-bottom">
            <Container>
                <Title subTitle="Our Valuable" >Products</Title>
                <Row>
                    <Col sm={{ size: 8, offset: 2 }}>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercita</p>
                    </Col>
                </Row>
                <Row>
                    {productsList.map((product, inx) => {
                        let { image, name } = product
                        return (
                            <Col md={6} key={'product-' + inx}>
                                <div className="product-grid-item">
                                    <div className="image" style={{ backgroundImage: `url('${image}')` }}>
                                    </div>
                                    <div className="info">{name}</div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Products;