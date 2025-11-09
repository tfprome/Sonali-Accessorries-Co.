import React from 'react';
import MFP from '../components/moto/MFP'
import Navbar from '../components/Navbar';
import InfoCard, { strengthCards } from '../components/moto/InfoCard';

const Moto = () => {
  return (
   <div>
    <Navbar/>
    <MFP/>
    <InfoCard card={strengthCards}/>
   </div>
  );
};

export default Moto;
