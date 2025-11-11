import React from 'react';
import MFP from '../components/moto/MFP'
import Navbar from '../components/Navbar';
import InfoCard, { strengthCards } from '../components/moto/InfoCard';
import BOD from './../components/moto/Boardofdirectors';

const Moto = () => {
  return (
   <div>
    <Navbar/>
    <MFP/>
    <BOD/>
    <InfoCard card={strengthCards}/>
   </div>
  );
};

export default Moto;
