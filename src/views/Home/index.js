import React from 'react';
import HeroSlider from './HeroSlider';
import Products from './Products';
import Experiences from './Experiences';
import Protfolio from './Portfolio';
import JoinUs from './JoinUs';
import CountryList from './CountryList';

const Home = () => {
    return (
        <>
            <HeroSlider />
            <Products />
            <Experiences />
            <Protfolio />
            <JoinUs />
            <CountryList />
        </>
    )
}

export default Home;