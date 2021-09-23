import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import NavBar from './components/Navbar'
import { animated, useSpring } from 'react-spring'
import img1 from '../public/img1.png'
import Image from 'next/image'
import img2 from '../public/img2.png'

const music = (wrap = false) => `${wrap ? 'url(' : ''}https://storage.googleapis.com/adlib-app-2d2b1.appspot.com/music.svg${wrap ? ')' : ''}`

const heart = (wrap = false) => `${wrap ? 'url(' : ''}https://storage.googleapis.com/adlib-app-2d2b1.appspot.com/heart.svg${wrap ? ')' : ''}`


const stars = (wrap = false) => `${wrap ? 'url(' : ''}https://storage.googleapis.com/adlib-app-2d2b1.appspot.com/stars.svg${wrap ? ')' : ''}`


export default function App() {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1000 })
    const parallax = useRef<IParallax>(null!)
    return (
        <div style={{ width: '100%', height: '100%' }} className="bg-purple-900 animate-gradient-y">
            <Parallax ref={parallax} pages={3}>
                <ParallaxLayer offset={1} speed={1} className="bg animate-gradient-y" />
                <ParallaxLayer offset={2} speed={1} className="bg2 animate-gradient-y" />
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: stars(true),
                        backgroundSize: 'cover',
                    }}
                />

                {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer> */}

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={music(false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={music(false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={music(false)} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={music(false)} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={music(false)} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={music(false)} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.4 }}>
                    <img src={heart(false)} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={heart(false)} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={heart(false)} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={heart(false)} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={heart(false)} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>



                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                >
                    <div className="py-10 md:px-10 w-screen">
                        <NavBar />
                    </div>
                    <animated.div style={props} className="space-y-3 pt-36 flex-col w-screen text-center">
                        <div className="font-bold text-white text-4xl md:text-6xl">
                            Music
                        </div>
                        <div className="font-bold text-white text-4xl md:text-6xl">
                            Discovery
                        </div>
                        <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 animate-gradient-x">
                            Redefined.
                        </div>
                    </animated.div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div className="flex flex-col md:flex-row w-screen md:px-36 md:pb-0 pb-48 ">
                        <animated.div className="md:text-left text-center justify-self-start md:w-fiftyp w-full pt-36 pb-10 md:pb-0">
                            <div className="font-bold text-white text-4xl md:text-6xl">
                                Brand
                            </div>
                            <div className="font-bold text-white text-4xl md:text-6xl">
                                New
                            </div>
                            <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600 animate-gradient-x">
                                Improved UI
                            </div>
                            <div className="pt-5 text-md md:text-lg font-light text-white">
                                Get the best experience possible with our amazing new user interface
                            </div>
                        </animated.div>
                        <div className="flex flex-col md:flex-row w-full md:space-x-10 md:w-fiftyp ">
                            <div className="md:ml-auto hidden md:block">
                                <Image src={img1} width={231} height={496} layout="intrinsic" />
                            </div>
                            <div className="md:hidden block mx-auto ">
                                <Image src={img1} width={150} height={320} layout="intrinsic" />
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div className="flex flex-col md:flex-row w-screen md:px-36 md:pb-0 pb-48 ">

                        <div className="flex flex-col md:flex-row w-full md:space-x-10 md:w-fiftyp md:order-1 order-2">
                            <div className="md:mr-auto hidden md:block">
                                <Image src={img2} width={231} height={496} layout="intrinsic" />
                            </div>
                            <div className="md:hidden block mx-auto">
                                <Image src={img2} width={150} height={320} layout="intrinsic" />
                            </div>
                        </div>
                        <animated.div className="md:order-2 order-1 md:text-left md:mr-auto text-center justify-self-start md:w-fiftyp w-full pt-36 pb-10 md:pb-0">
                            <div className="font-bold text-white text-4xl md:text-6xl">
                                Save
                            </div>
                            <div className="font-bold text-white text-4xl md:text-6xl">
                                Your
                            </div>
                            <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-yellow-900 animate-gradient-x">
                                Favourites
                            </div>
                            <div className="pt-5 text-md md:text-lg font-light text-white">
                                Add songs directly to spotify playlist or save them for later!
                            </div>
                        </animated.div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
