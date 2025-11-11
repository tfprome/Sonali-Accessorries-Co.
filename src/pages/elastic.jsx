import React from 'react';
import Hero from '../components/elastic/hero';
import Navbar from '../components/Navbar';
import Content from '../components/elastic/content';

const Elastic = (props) => {
    return (
        
        <div>
            <Navbar/>
            <Hero/>
            <Content/>
        </div>
    );
};

export default Elastic;