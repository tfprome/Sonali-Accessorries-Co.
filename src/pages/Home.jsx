import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About'
import Buyers from './../components/buyers';
import Certificates from '../components/certificate';
import Products from './../components/Products';


export default function Home(){
      return(
        <>
           <Navbar/>
           <About/>
           <Buyers/>
           <Certificates/>
           <Products/>
        </>
      )
}
