import React from 'react';
import DrawcordHeroSection from '../components/Drawcord/hero';
import Navbar from '../components/Navbar';
import OurProductDemo from '../components/Drawcord/imgsection';
import DrawcordContentSection from '../components/Drawcord/content';

const Drawcord = (props) => {
    return (
        
        <div>
            <Navbar/>
            <DrawcordHeroSection/>
            <OurProductDemo/>
            <DrawcordContentSection/>
        </div>
    );
};

export default Drawcord;