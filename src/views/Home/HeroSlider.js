import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, Container, Row, Col, Button } from 'reactstrap';

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const items = [
        {
            image: './assets/images/bg/bg-01.jpg'
        },
        {
            image: './assets/images/bg/bg-02.jpg'
        },
        {
            image: './assets/images/bg/bg-03.jpg'
        },
        {
            image: './assets/images/bg/bg-04.jpg'
        },
    ]

    const slides = items.map((item, inx) => {
        let { image } = item;
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={"carousel-" + inx}

            >
                <div
                    className={`hero-slier-item`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <Container className="flex-grow-1">
                        <Row className="h-100 align-items-center">
                            <Col sm={{ size: 6, offset: 6 }}>
                                <div className="content">
                                    <h3>Buy your favorite one</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu...</p>
                                    <Button color="primary">Shop Now</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className={'hero-slider'}
        >
            {slides}
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        </Carousel>
    )
}

export default HeroSlider;