import React from 'react';
import Banner from './Banner';
import News from './News';
import Donate from './Donate';
import Number from './Number';
import Focus from './Focus';
import Volunteer from './Volunteer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Donate></Donate>
            <Number></Number>
            <Focus></Focus>
            <Volunteer></Volunteer>
            <News></News>
        </div>
    );
};

export default Home;