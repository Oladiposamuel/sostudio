import React from 'react';
import './work.css';
import { motion, useAnimation, useMotionValue, useSpring, useTransform, useInView, useScroll, useDragControls, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useParams } from 'react-router-dom';
import jsonData from '../../utils/data.json';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { IoIosArrowDropright } from 'react-icons/io';

const Work = () => {

  const navigate = useNavigate();

  const { slug } = useParams();

  const data = jsonData.filter((x) => {
    return x.slug==slug;
  })

const descVariant = {
  hidden: {
      opacity: 0,
  },
  show: {
      opacity: 1,
      transition: {
          type: 'tween',
          delayChildren: 1.25,
          staggerChildren: 0.2,
          duration: 1,
      }
  }
}

const desc = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 1,
        }
    }
}

const next = (e) => {
  e.preventDefault();

  let id;

  const data = jsonData.filter((x) => {
    return x.slug==slug;
  })

  if (data[0].id) {
    navigate('/work/kinga-cichewicz');
  }

  id = data[0].id

  let newId = id + 1;

  let newData = jsonData.filter((x) => {
    return x.id == newId;
  })

  navigate(`/work/${newData[0].slug}`);
}


  return (
    <motion.div className='font-face-normal work' >

      <motion.div className='back-arrow-box' onClick={() => navigate('/')}>
        <HiOutlineArrowLongLeft className='back-arrow' />
      </motion.div>

      <motion.div className='next-arrow-box' >
        <IoIosArrowDropright className='next-arrow' onClick={next} />
      </motion.div>

      <motion.div className='work-content'>
        <motion.div layoutId='work-image' className='work-image-box'>
          <motion.img 
            src={data[0].cover}
            alt='img'
            className='work-image'
            initial={{y: '50vh', x: 0}}
            animate={{y: 0, x: 0}}
            //exit={{y: '50vh'}}
            transition={{type: 'spring', duration: 1}}
          />
        </motion.div>

        <motion.div 
          className='work-text-box'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{type: 'tween', delay: .5}}
        >

           <motion.div 
            variants={descVariant}
            initial="hidden"
            animate="show"
            className='work-desc-text'
          >
            <motion.div  variants={desc}>"...a magic studio that breathes </motion.div>
            <motion.div  variants={desc}> life  into your creative ideas</motion.div>
            <motion.div  variants={desc}> using design, development, and </motion.div>
            <motion.div  variants={desc}> copywriting. From the Wonderland."</motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Work