import React from 'react';
import './assets/scss/app.scss';
import TopBar from './layout/TopBar';
import Navigation from './layout/Navigation';
import Home from './views/Home';
import Footer from './layout/Footer';

function App() {
    return (
        <>
            <header>
                <TopBar />
                <Navigation />
            </header>
            <Home />
            <Footer />
        </>
    );
}

export default App;
