import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About'
import Buyers from './../components/buyers';
import Certificates from '../components/certificate';
import Products from './../components/Products';
import InfoBar from '../components/info';
import Slider from '../components/slider';


export default function Home(){
      return(
        <>
           <InfoBar/>
           <Navbar/>
           <Slider/>
           <About/>
           <Buyers/>
           <Certificates/>
           <Products/>
        </>
      )
}
