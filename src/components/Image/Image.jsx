import React, { useState, useEffect, useRef } from 'react';
import './image.css';
import { motion } from 'framer-motion';

const Image = ({element, index, startDrag}) => {

  const [start, setStart] = useState();

  return (
    <motion.img 
        drag='x'
        dragConstraints={{left: 0, right: 0}}
        dragElastic={0.01}
        src={element.cover}
        loading='eager'
        alt='img'
        className='image'
        whileHover={{scale: start ? 1.2 : 1}}
        whileInView={{scale: 1.5}}
        onHoverStart={() => {
            setStart(true)
        }}
        onHoverEnd={() => {
            setStart(false);
        }}
        transition={{type: 'spring', duration: 2, ease: 'easeIn'}}
        draggable={true}
    />

  )
}

export default Image