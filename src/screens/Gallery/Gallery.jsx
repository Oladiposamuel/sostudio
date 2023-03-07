import React, {useEffect, useRef, useState, useLayoutEffect, useCallback } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, useTransform, useInView, useScroll, useDragControls } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './gallery.css';
import '../Home/home.css';
import { HiXMark } from 'react-icons/hi2';
import ReactPlayer from 'react-player/lazy';
import { vidData } from '../../utils/vid';
import Boxing from '../../vid/Boxing.mp4';
import Dancing from '../../vid/Dancing.mp4';
import Hercules from '../../vid/Hercules.mp4';
import Lioness from '../../vid/Lioness.mp4';
import Voyage from '../../vid/Voyage.mp4';
import Waterfall from '../../vid/Waterfall.mp4';

const Gallery = () => {

    let mql = window.matchMedia('(max-width: 1024px)');

    const [showLoader1, setShowLoader1] = useState(true);

    const [showLoader2, setShowLoader2] = useState(true);

    const [btnEffect, setBtnEffect] = useState(false);

    const [galleryEffect, setGalleryEffect] = useState(false);

    const [contactEffect, setContactEffect] = useState(false);

    const [showVid1, setShowVid1] = useState(true);

    const [showBigVid1, setShowBigVid1] = useState(false);

    const [showBigVid2, setShowBigVid2] = useState(false);

    const [showBigVid3, setShowBigVid3] = useState(false);

    const [showBigVid4, setShowBigVid4] = useState(false);

    const [showBigVid5, setShowBigVid5] = useState(false);

    const [showBigVid6, setShowBigVid6] = useState(false);

    const [showContact, setShowContact] = useState(false);

    const [changeCursor, setChangeCursor] = useState(false);

    const [play, setPlay] = useState(false);

    const [showVidBox, setShowVidBox] = useState(false);

    const [opacity, setOpacity] = useState(1);

    const [twog, setTwog] = useState(false);

    const [threeg, setThreeg] = useState(false);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const loaderControls1 = useAnimation();

    const loaderControls2 = useAnimation();

    const boxingIndex = useMotionValue(6);

    const dancingIndex = useMotionValue(5);

    const herculesIndex = useMotionValue(4);

    const lionessIndex = useMotionValue(3);

    const voyageIndex = useMotionValue(2);

    const waterIndex = useMotionValue(1);

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

            const loop = () => {

                setTimeout(() => {
                    setShowBigVid1(true);
                }, 3000)
    
                setTimeout(() => {
                    setShowBigVid1(false);
                }, 10000)
    
               setTimeout(() => {
                    setShowBigVid2(true);
                }, 10500) 
    
                setTimeout(() => {
                    setShowBigVid2(false);
                }, 17500)
    
                setTimeout(() => {
                    setShowBigVid3(true);
                }, 18000) 
    
                setTimeout(() => {
                    setShowBigVid3(false);
                }, 25000) 
    
                setTimeout(() => {
                    setShowBigVid4(true);
                }, 25500)
                
                setTimeout(() => {
                    setShowBigVid4(false);
                }, 33000) 
    
                setTimeout(() => {
                    setShowBigVid5(true);
                }, 33500) 
    
                setTimeout(() => {
                    setShowBigVid5(false);
                }, 40500) 
    
                setTimeout(() => {
                    setShowBigVid6(true);
                }, 41000) 
    
                setTimeout(() => {
                    setShowBigVid6(false);
                }, 48000) 

                setTimeout(() => {
                    loop();
                }, 48500) 

            }

            const smallLoop = () => {
    
                setTimeout(() => {
                    boxingIndex.set(-1);
                }, 7000)
    
                setTimeout(() => {
                    dancingIndex.set(-1);
                }, 14000) 
    
                setTimeout(() => {
                    herculesIndex.set(-1);
                }, 21000)
    
                setTimeout(() => {
                    lionessIndex.set(-1);
                }, 28000) 
    
                setTimeout(() => {
                    voyageIndex.set(-1);
                }, 35000) 

                setTimeout(() => {
                    boxingIndex.set(6);
                    dancingIndex.set(5);
                    herculesIndex.set(4);
                    lionessIndex.set(3);
                    voyageIndex.set(2);
                    smallLoop();
                }, 42000)

            }

            !mql.matches && loop();

            mql.matches && smallLoop();

        }

        sequence();

    }, [])

    useEffect(() => {

        setTimeout(() => {
            setShowVidBox(true);
            setPlay(false);
        }, 500)

        setTimeout(() => {
            //setPlay(true);
        }, 600)
        
    }, [])

    useEffect(() => {
        if (navigator.connection && !!navigator.connection.effectiveType) {
            console.log(navigator.connection);
            if (navigator.connection.effectiveType === '4g') {
              console.log('4G!!')
            } else {
              console.log('NO 4G!!')
            }
        }
    }, [navigator.connection])


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

        {/* <Link to='/'>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: 'spring', delay: 1}}
                className='so'
                >SO
            </motion.div>
        </Link> */}

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

            <Link to="/gallery" className='nav-item-link'> 
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
                    >  GALLERY </motion.span> 
                    { galleryEffect && <motion.span
                        variants={galleryBtn2}
                        initial="hidden"
                        animate="show"
                        className='item'
                    >  GALLERY </motion.span> }
                </motion.div> 
            </Link>

            <motion.div 
            onMouseEnter={() => setContactEffect(true) }
            onMouseLeave={() => setContactEffect(false) }
            onClick={() => {setShowContact(true)}}
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

            {showVidBox && 
            <motion.div className='box-1' >

                {vidData.slice(0, 3).map((video, id) => { 
                    return(
                        <motion.div className='small-box' key={id} layoutId={video.layoutId} >
                            <ReactPlayer url={video.cover} playing={play} loop={true} controls={false} volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                                onReady={() => { 
                                    //console.log('Video ready to play 1');
                                    setPlay(true);
                                }}
                                onPlay={() => {setPlay(true)}}
                                onPause={() => {
                                    //console.log('Video is paused!')
                                }}
                                onError={(error) => {console.log(error)}}
                            />
                        </motion.div>
                    )
}               )}

            </motion.div>}

            <motion.div className='box-2'>

            </motion.div>

            {showVidBox && <motion.div className='box-3'  >

                {vidData.slice(3, 6).map((video, id) => { 
                        return(
                            <motion.div className='small-box' key={id} layoutId={video.layoutId} >
                                <ReactPlayer url={video.cover} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                                    onReady={() => { 
                                        //console.log('Video ready to play 2');
                                        setPlay(true);
                                    }}
                                    onPlay={() => {setPlay(true)}}
                                    onPause={() => {
                                        //console.log('Video is paused!')
                                    }}
                                    onError={(error) => {console.log(error)}}
                                />
                            </motion.div>
                        )
                })}

            </motion.div> }

            { showBigVid1 && !mql.matches &&
                <motion.div 
                    className='big-vid' 
                    layoutId='big-vid-1'
                    transition={{type: 'spring', duration: .5}}
                >  

                    <ReactPlayer url={Boxing} playing={play} loop={true} controls={false} volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            //console.log('Video ready to play 2');
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                            //console.log('video1 is playing');
                            setOpacity(0);
                            setTimeout(() => {
                                setOpacity(1);
                            }, 6900)
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />

           </motion.div> }

           { showBigVid2 && !mql.matches &&
                <motion.div 
                    className='big-vid' 
                    layoutId='big-vid-2'
                    transition={{type: 'spring', duration: .5}}
                >  
                    <ReactPlayer url={Dancing} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            //console.log('Video ready to play 2');
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                            //console.log('video2 is playing');
                            setOpacity(0);
                            setTimeout(() => {
                                setOpacity(1);
                            }, 6900)
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { showBigVid3 && !mql.matches &&
                <motion.div 
                    className='big-vid' 
                    layoutId='big-vid-3'
                    transition={{type: 'spring', duration: .5}}
                >  
                    <ReactPlayer url={Hercules} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            //console.log('Video ready to play 2');
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                            //console.log('video2 is playing');
                            setOpacity(0);
                            setTimeout(() => {
                                setOpacity(1);
                            }, 6900)
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { showBigVid4 && !mql.matches &&
                <motion.div 
                    className='big-vid' 
                    layoutId='big-vid-4'
                    transition={{type: 'spring', duration: .5}}
                >  
                    <ReactPlayer url={Lioness} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            //console.log('Video ready to play 2');
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                            //console.log('video2 is playing');
                            setOpacity(0);
                            setTimeout(() => {
                                setOpacity(1);
                            }, 6900)
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { showBigVid5 && !mql.matches &&
                <motion.div 
                    className='big-vid' 
                    layoutId='big-vid-5'
                    transition={{type: 'spring', duration: .5}}
                >  
                    <ReactPlayer url={Voyage} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            //console.log('Video ready to play 2');
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                            //console.log('video2 is playing');
                            setOpacity(0);
                            setTimeout(() => {
                                setOpacity(1);
                            }, 6900)
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { showBigVid6 && !mql.matches &&
                <motion.div 
                    className='big-vid' 
                    layoutId='big-vid-6'
                    transition={{type: 'spring', duration: .5}}
                >  
                    <ReactPlayer url={Waterfall} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            //console.log('Video ready to play 2');
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                            //console.log('video2 is playing');
                            setOpacity(0);
                            setTimeout(() => {
                                setOpacity(1);
                            }, 6900)
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { mql.matches &&
                <motion.div 
                    className='big-vid' 
                    transition={{type: 'tween', duration: .3}}
                    style={{zIndex: boxingIndex}}
                >  

                    <ReactPlayer url={Boxing} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />

           </motion.div> }

           { mql.matches &&
                <motion.div 
                    className='big-vid' 
                    transition={{type: 'tween', duration: .3}}
                    style={{zIndex: dancingIndex}}
                >  
                    <ReactPlayer url={Dancing} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { mql.matches &&
                <motion.div 
                    className='big-vid' 
                    transition={{type: 'tween', duration: .3}}
                    style={{zIndex: herculesIndex}}
                >  
                    <ReactPlayer url={Hercules} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { mql.matches &&
                <motion.div 
                    className='big-vid' 
                    transition={{type: 'tween', duration: .3}}
                    style={{zIndex: lionessIndex}}
                >  
                    <ReactPlayer url={Lioness} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { mql.matches &&
                <motion.div 
                    className='big-vid' 
                    transition={{type: 'tween', duration: .3}}
                    style={{zIndex: voyageIndex}}
                >  
                    <ReactPlayer url={Voyage} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

           { mql.matches &&
                <motion.div 
                    className='big-vid' 
                    transition={{type: 'tween', duration: .3}}
                    style={{zIndex: waterIndex}}
                >  
                    <ReactPlayer url={Waterfall} playing={play} loop={true} controls={false}volume={0}  muted={true} width='100%' height='100%' wrapper='div'
                        onReady={() => { 
                            //console.log('Video ready to play 2');
                            setPlay(true);
                        }}
                        onPlay={() => {
                            setPlay(true);
                            //console.log('video2 is playing');
                            setOpacity(0);
                            setTimeout(() => {
                                setOpacity(1);
                            }, 6900)
                        }}
                        onPause={() => {
                            //console.log('Video is paused!')
                        }}
                        onError={(error) => {console.log(error)}}
                    />
           </motion.div> }

        </motion.div>

         {/* CONTACT BOX */}

         {
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
                    className='contact-content'
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
        }

    </div>
  )
}

export default Gallery