import React, {useEffect, useRef, useState, useLayoutEffect, useCallback } from 'react';
import './home.css';
import { motion, useAnimation, useMotionValue, useSpring, useTransform, useInView, useScroll, useDragControls, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import jsonData from '../../utils/data.json'; 
import Image from '../../components/Image/Image';
import { HiXMark } from 'react-icons/hi2';


const Home = () => {

    let mql = window.matchMedia('(max-width: 1024px)');

    let mobile = window.matchMedia('(max-width: 768px)');

    //console.log(mql.matches);

    const navigate = useNavigate();

    const[smallScreen, setSmallScreen] = useState(false);

    const [middle, setMiddle] = useState(true);

    const [corner, setCorner] = useState(false);

    const [showSt, setShowSt] = useState(true);

    const [showStText, setShowStText] = useState(true);

    const [btnEffect, setBtnEffect] = useState(false);

    const [galleryEffect, setGalleryEffect] = useState(false);

    const [contactEffect, setContactEffect] = useState(false);

    const [showContainer, setShowContainer] = useState(false);

    const [showContact, setShowContact] = useState(false);

    const [showMobileContact, setShowMobileContact] = useState(false);

    const [changeCursor, setChangeCursor] = useState(false);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [drag, setDrag] = useState('x');

    const studioNameControls = useAnimation();

    const soControls = useAnimation();

    const studioControls = useAnimation();

    const align = useMotionValue('center');

    const mapData = Array.from(jsonData);

    const dragControls = useDragControls();

    function startDrag(event) {
        dragControls.start(event, { snapToCursor: false })
    }


    const scrollRef = useRef(null)
    const ghostRef = useRef(null)
    const [scrollRange, setScrollRange] = useState(0)
    const [viewportW, setViewportW] = useState(0)

    const { scrollYProgress } = useScroll();
    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollRange + viewportW]
    )
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }
    const spring = useSpring(transform, physics)

    const handleMouseEnter = () => {
        setChangeCursor(true);
    };
  
    const handleMouseLeave = () => {
        setChangeCursor(false);
    };

    const cursorVariants = {
        default: {
          x: mousePosition.x + 10,
          y: mousePosition.y + 10,
        }
    }

    const homeVariant = {
        hidden: {
          opacity: 1
        },
        visible: {
          opacity: 1
        },
        exit: {
          y: '-100vh',
          transition: {
            type: 'spring',
            delay: 0,
            duration: 1,
          }
        }
      }

    const stBoxVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: showSt ? 1 : 0,
            transition: {
                type: 'spring',
                delayChildren: 3,
                staggerChildren: 0.2,
                duration: 1,
            }
        },
    }

    const stVariant = {
        hidden: {
            opacity: 0,
            y: 30
        },
        show: {
            opacity: showSt ? 1 : 0,
            y: showSt ? 0 : 30,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const descVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                type: 'tween',
                delayChildren: 5.5,
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

    const studioBtn1 = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        show: {
            opacity: !btnEffect ? 1 : 0,
            y: !btnEffect ? 0 : -20,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const studioBtn2 = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: btnEffect ? 1 : 0,
            y: btnEffect ? 0 : 20,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const galleryBtn1 = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        show: {
            opacity: !galleryEffect ? 1 : 0,
            y: !galleryEffect ? 0 : -20,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const galleryBtn2 = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: galleryEffect ? 1 : 0,
            y: galleryEffect ? 0 : 20,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const contactBtn1 = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        show: {
            opacity: !contactEffect ? 1 : 0,
            y: !contactEffect ? 0 : -20,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const contactBtn2 = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: contactEffect ? 1 : 0,
            y: contactEffect ? 0 : 20,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const contactVariant = {
        hidden: {
            opacity: 1,
        },
        show: showContact && {
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1,
                staggerChildren: 0.25,
                delayChildren: 0.2,
            }
        }
    }

    const contact = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: showContact && {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    const contactMobileVariant = {
        hidden: {
            opacity: 1,
        },
        show: showMobileContact && {
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1,
                staggerChildren: 0.25,
                delayChildren: 0.2,
            }
        }
    }

    const contactMobile = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: showMobileContact && {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 1,
            }
        }
    }

    useEffect(() => {

        document.getElementById('contact-cancel').style.cursor = 'none';

        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    useEffect(() => {

        setTimeout(() => {
            setShowContainer(true);
            align.set('flex-start');
            setShowStText(false);
        }, 5700)

        const sequence = async () => {

            studioNameControls.set({
                scale: .5,
            })

            soControls.set({
                x: 0,
            })

            studioControls.set({
                x: 0,
            })

            await studioNameControls.start({
                scale: 4,
                transition: {
                    type: 'spring',
                    bounce: 0.25,
                    ease: [0.17, 0.67, 0.83, 0.67],
                    duration: 3,
                },
            })
            .then(() => {

                setTimeout(() => {
                    setShowSt(false);
                }, 2000)

                setTimeout(() => {
                    setCorner(true);
                    setMiddle(false);
                }, 2500)
            })
            .catch((error) => {
                console.log(error);
            })
        }

        sequence();
    }, [])

  return (
    <motion.div 
        variants={homeVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className='font-face-normal content'>

            <motion.div className='studio-name-box'>

                <motion.h1 
                    animate={studioNameControls}
                    className='studio-name'>

                    { middle && <motion.div
                    layoutId='so'
                    //className='so'
                    animate={soControls}
                    >SO
                    </motion.div>}
                    { middle && <motion.div
                    className='studio'
                    layoutId='studio'
                    animate={studioControls}
                    >STUDIO
                    </motion.div>}
                </motion.h1>

                { showStText && !mql.matches && <motion.div className='short-text-box'
                    variants={stBoxVariant}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 className='short-text'
                        variants={stVariant}
                    >
                        &copy; 2023
                    </motion.h1>
                    <motion.h1 className='short-text'
                        variants={stVariant}
                    >
                        We are a magic studio, we breathe life into your creative ideas.
                    </motion.h1>
                    <motion.h1 className='short-text'
                        variants={stVariant}
                    >
                        From the Wonderland
                    </motion.h1>
                </motion.div>}

            </motion.div>

        <motion.div
            className='studio-name-box'
            style={{alignItems: align}}
        >

            {showContainer &&
            <>
                <motion.div
                    initial={{x: '100vw'}}
                    animate={ !middle && {x: 0}}
                    transition={{type: 'tween', duration: .5}}
                    className='scroll-container'>

                <motion.section
                drag={drag}
                dragConstraints={{ right: 0}}
                dragElastic={0.1}
                dragControls={dragControls}
                ref={scrollRef}
                style={{ x: spring }}
                className="thumbnails-container"
                >
                    <AnimatePresence>
                    {mapData.map((element, index) => (
                        <motion.div 
                            className="image-box" 
                            key={index} 
                            onPointerDown={startDrag}
                            whileInView={() => {
                                if(element.id == 15) {

                                    const sequence = () => {
                                        setDrag('')

                                        setTimeout(() => {
                                            navigate('/explore');
                                        }, 1500)
                                    }

                                    sequence();

                                }
                            }}
                        >
                           <motion.div >
                            <Link className='link' to = {`/work/${element.slug}`}> <Image element= {element} index= {index} startDrag = {startDrag} /> </Link>
                            </motion.div> 
                        </motion.div>
                    ))}             
                    </AnimatePresence>
                </motion.section>
                    
                </motion.div>
                <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" ></div>
            </>
            }

            { corner && <motion.div
                transition={{type: 'spring',  bounce: 0.25, mass: 0.28, duration: 1}}
                layoutId='so'
                className='so-corner'
                >
                    <motion.h1 className= "so-corner-text" >SO</motion.h1>

                </motion.div>}
            { corner && !mql.matches &&  <motion.div
                transition={{type: 'spring',  bounce: 0.25, mass: 0.28, duration: 2}}
                layoutId='studio'
                className='studio-corner'
                >

                    <motion.h1 className= "studio-corner-text" >STUDIO</motion.h1>

                </motion.div>}

            {/* <motion.h1 
            animate={studioNameControls}
            className='studio-name'>

                { middle && <motion.div
                layoutId='so'
                //className='so'
                animate={soControls}
                >SO
                </motion.div>}
                { middle && <motion.div
                className='studio'
                layoutId='studio'
                animate={studioControls}
                >STUDIO
                </motion.div>}

            </motion.h1> */}

            {/* { showStText && !mql.matches && <motion.div className='short-text-box'
                variants={stBoxVariant}
                initial="hidden"
                animate="show"
            >
                <motion.h1 className='short-text'
                    variants={stVariant}
                >
                    &copy; 2023
                </motion.h1>
                <motion.h1 className='short-text'
                    variants={stVariant}
                >
                    We are a magic studio, we breathe life into your creative ideas.
                </motion.h1>
                <motion.h1 className='short-text'
                    variants={stVariant}
                >
                    From the Wonderland
                </motion.h1>
            </motion.div>} */}

        </motion.div>

        <motion.div 
            variants={descVariant}
            initial="hidden"
            animate="show"
            className='desc-text'
        >
            <motion.div  variants={desc}>We're SO STUDIO. We're a magic studio</motion.div>
            <motion.div  variants={desc}>that breathes life into your creative ideas</motion.div>
            <motion.div  variants={desc}>using design, development, and copywriting.</motion.div>
            <motion.div  variants={desc}>From the Wonderland.</motion.div>
            <motion.div  variants={desc}  className='desc-text-copyright'>&copy; 2023</motion.div>
        </motion.div>

        <motion.div 
            variants={descVariant}
            initial="hidden"
            animate="show"
            className='nav'
        >

            <Link to="/" className='nav-item-link'> 
                <motion.div 
                onMouseEnter={() => setBtnEffect(true) }
                onMouseLeave={() => setBtnEffect(false) }
                variants={desc} 
                className='nav-item'>
                    <motion.span
                        variants={studioBtn1}
                        initial="hidden"
                        animate="show"
                        className='item'
                    > STUDIO </motion.span> 
                    { btnEffect && <motion.span
                        variants={studioBtn2}
                        initial="hidden"
                        animate="show"
                        className='item'
                    > STUDIO </motion.span> }
                </motion.div> 
            </Link> 

            <Link to="/explore" className='nav-item-link'> 
                <motion.div 
                onMouseEnter={() => setGalleryEffect(true) }
                onMouseLeave={() => setGalleryEffect(false) }
                variants={desc} 
                className='nav-item'>
                     <motion.span
                        variants={galleryBtn1}
                        initial="hidden"
                        animate="show"
                        className='item'
                    >  EXPLORE </motion.span> 
                    { galleryEffect && <motion.span
                        variants={galleryBtn2}
                        initial="hidden"
                        animate="show"
                        className='item'
                    >  EXPLORE </motion.span> }
                </motion.div> 
            </Link>

            <motion.div 
            onMouseEnter={() => setContactEffect(true) }
            onMouseLeave={() => setContactEffect(false) }
            variants={desc} 
            className='nav-item'
            onClick={() => {
                if (mobile.matches) {
                    setShowMobileContact(true);  
                } else {
                    setShowContact(true)
                }
                }}
            >
                <motion.span
                    variants={contactBtn1}
                    initial="hidden"
                    animate="show"
                    className='item'
                > CONTACT </motion.span> 
                { contactEffect && <motion.span
                    variants={contactBtn2}
                    initial="hidden"
                    animate="show"
                    className='item'
                > CONTACT </motion.span> }
            </motion.div>

        </motion.div>

        {/* CONTACT BOX */}

    
        <motion.div
            initial={{x: '100vw'}}
            animate={{x: showContact ? 0 : '100vw'}}
            exit={{x: '100vw'}}
            transition={{type: 'spring', bounce: 0.20, ease: 'easeIn', duration: 1}}
            className='contact-box'
        >

            <motion.div
                id='contact-cancel'
                className='contact-cancel'
                onClick={() => {setShowContact(false)}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                {changeCursor && 
                <motion.div
                    className='cursor'
                    animate="default"
                    variants={cursorVariants}
                >
                    <HiXMark className='icon' />
                </motion.div>
                }

            </motion.div>

            <motion.div
                variants={contactVariant}
                initial='hidden'
                animate='show'
                className='contact-content'
            >

                {mql.matches && <motion.div
                    className='cursor-smallScreen'
                    onClick={() => {setShowContact(false)}}
                >
                    <HiXMark className='icon' />
                </motion.div>}

                <motion.div className='cc-1' variants={contact}>
                    This site is developed by
                </motion.div>

                <motion.div className='cc-2' variants={contact}>
                    Oladipo Samuel
                </motion.div>

                <motion.div className='cc-3' variants={contact}>
                    Oladiposamuel.ola@gmail.com
                </motion.div>

            </motion.div>
            
        </motion.div>



        <motion.div
            initial={{y: '100vh'}}
            animate={{y: showMobileContact ? 0 : '100vh'}}
            exit={{y: '100vh'}}
            transition={{type: 'spring', bounce: 0.20, ease: 'easeIn', duration: 1}}
            className='contact-box-mobile'
        >

            <motion.div
                variants={contactMobileVariant}
                initial='hidden'
                animate='show'
                className='contact-content-mobile'
            >

                {mql.matches && <motion.div
                    className='cursor-smallScreen'
                    onClick={() => {setShowMobileContact(false)}}
                >
                    <HiXMark className='icon' />
                </motion.div>}

                <motion.div className='cc-1' variants={contactMobile}>
                    This site is developed by
                </motion.div>

                <motion.div className='cc-2' variants={contactMobile}>
                    Oladipo Samuel
                </motion.div>

                <motion.div className='cc-3' variants={contactMobile}>
                    Oladiposamuel.ola@gmail.com
                </motion.div>

            </motion.div>
            
        </motion.div>

    </motion.div>
  )
}

export default Home