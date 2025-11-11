import React from 'react';
import pro from '../../assets/pro.jpg'
import BOD1 from '../../assets/BOD1.jpg'
import BOD2 from '../../assets/BOD2.jpg'
import shafkat from '../../assets/shafkat.jpg'
import saikat from '../../assets/shaikat.jpg'
import sazim from '../../assets/sazim.jpg'
import {motion} from 'framer-motion'

const BOD = (props) => {
    return (
        <div className='flex flex-col my-20 gap-10'>
            <motion.h1 
             initial={{opacity:0, y:-50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.6, type:"linear"}}
            className='text-4xl font-bold font-serif text-center'>Board of Directors</motion.h1>
            <motion.div 
            initial={{opacity:0, y:-50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6, type:"linear"}}
            className='flex justify-center'>
                <img src={pro} alt="propreitor" height={150} width={150} />
            </motion.div>
            <motion.div 
            initial={{opacity:0, x:-150}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.6, type:"linear"}}
            className='flex justify-evenly'>
                <img src={BOD2} alt="BOD2"  height={150} width={150}/>
                <img src={BOD1} alt="BOD1"  height={150} width={150}/>
            </motion.div>
            <motion.div 
              initial={{opacity:0, x:150}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.6, type:"linear"}}
            className='flex justify-evenly'>
                <img src={saikat} alt=""  height={150} width={150}/>
                <img src={shafkat} alt=""  height={150} width={150}/>
                <img src={sazim} alt="" height={150} width={150}/>
            </motion.div>
        </div>
    );
};

export default BOD;