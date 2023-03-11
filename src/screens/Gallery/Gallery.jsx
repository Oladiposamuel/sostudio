import React, {useEffect, useRef, useState, useLayoutEffect, useCallback } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, useTransform, useInView, useScroll, useDragControls } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './gallery.css';
import '../Home/home.css';
import { HiXMark } from 'react-icons/hi2';
import ReactPlayer from 'react-player/lazy';
import { vidData } from '../../utils/vid';


const Gallery = () => {

    let mql = window.matchMedia('(max-width: 1024px)');

    let mobile = window.matchMedia('(max-width: 768px)');

    let mobile2 = window.matchMedia('(max-width: 540px)');

    const [showLoader1, setShowLoader1] = useState(true);

    const [showLoader2, setShowLoader2] = useState(true);

    const [btnEffect, setBtnEffect] = useState(false);

    const [galleryEffect, setGalleryEffect] = useState(false);

    const [contactEffect, setContactEffect] = useState(false);

    const [showContact, setShowContact] = useState(false);

    const [showMobileContact, setShowMobileContact] = useState(false);

    const [changeCursor, setChangeCursor] = useState(false);

    const [placeholder, setPlaceholder] = useState(true);

    const [vidId, setVidId] = useState(6);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const loaderControls1 = useAnimation();

    const loaderControls2 = useAnimation();

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

    const descVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                type: 'tween',
                delayChildren: 1,
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

        const sequence = async () => {
            loaderControls1.set({
                y: '-100vh'
            })

            loaderControls2.set({
                x: '100vw'
            })

            await loaderControls1.start({
                y: 0,
                transition: {
                    type: 'tween',
                    bounce: 0.05,
                    delay: 0,
                    duration: .3,
                    ease: 'easeOut',
                }
            })

            await loaderControls2.start({
                x: 0,
                transition: {
                    type: 'tween',
                    bounce: 0.05,
                    delay: 0,
                    duration: .5,
                    ease: 'easeOut',
                }
            })
            .then(() => {
                setTimeout(() => {
                    setShowLoader1(false);
                    setShowLoader2(false);
                })
            })

        }

        sequence();

    }, [])

    useEffect(() => {

        let vid = document.getElementById("myVideo");
        vid.oncanplay = function() {
            //console.log("Can start playing video");
            setPlaceholder(false);
            loop();
        }

        const loop = () => {
            setTimeout(() => {
                setVidId(3);
            }, 15000)

            setTimeout(() => {
                setVidId(2);
            }, 30000)

            setTimeout(() => {
                setVidId(1);
            }, 45000)

            // setTimeout(() => {
            //     setVidId(2);
            // }, 60000)

            // setTimeout(() => {
            //     setVidId(1);
            // }, 50000)
        }

    }, [vidId])


  return (
    <div className=' font-face-normal gallery'>
        {showLoader1 && <motion.div 
            className='loader-1'
            animate={loaderControls1}
        /> }
         {showLoader2 &&<motion.div 
            className='loader-2'
            animate={loaderControls2}
        />}

        {placeholder && 
            <motion.div 
                className='placeholder'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: 'spring', delay: .8, duration: .5}}
            >
            
            </motion.div>
        }

        <motion.div 
            variants={descVariant}
            initial="hidden"
            animate="show"
            className='nav-gallery'
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
            onClick={() => {
                if (mobile.matches) {
                    setShowMobileContact(true);  
                } else {
                    setShowContact(true)
                }
            }}
            variants={desc} 
            className='nav-item'>
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

        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{type: 'spring', delay: 1, duration: .5}}
            className='gallery-content'
        >


            {vidData.map((video, id) => { 
                return(
                    !mobile2.matches ?
                    <motion.div className='small-box' key={id} >
                        <motion.video autoPlay muted loop id="myVideo" animate={id == vidId && {opacity: 0}} >
                            <source src={video.cover} type="video/mp4" />
                        </motion.video>
                    </motion.div> 
                    
                    :

                    <motion.div key={id}>
                        <motion.video autoPlay muted loop id="myVideo" animate={id == vidId && {opacity: 0}} >
                            <source src={video.coverMobile} type="video/mp4" />
                        </motion.video>
                    </motion.div>
                )
            })}

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
                className='contact-content-gallery'
            >

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
                className='contact-content-gallery-mobile'
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

    </div>
  )
}

export default Gallery