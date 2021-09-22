import React, { ChangeEvent, useState } from "react"
import NavBar from "./components/Navbar"
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import img1 from '../public/img1.png'
import img2 from '../public/img2.png'
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"

const Home = () => {

    const [email, setemail] = useState<string>("")

    const onchange = (e: ChangeEvent): void => {
        const element = e.currentTarget as HTMLInputElement
        setemail(element.value)
    }

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1000 })
    const alignCenter = { display: 'flex', alignItems: 'start' }


    return (

        <div>
            <div className="text-center flex flex-cols justify-center items-center h-body w-screen hidescrollbar">
                <Parallax pages={2} style={{ top: 0, left: 0, height: "100vh", width: '100vw' }} >

                    <ParallaxLayer offset={0} speed={1} className="bg-purple-900 animate-gradient-y" />
                    <ParallaxLayer
                        offset={0}
                        speed={1}
                    >
                        <div className="py-10 md:px-10 w-screen">
                            <NavBar />
                        </div>
                        <animated.div style={props} className="space-y-3 pt-36 flex-col">
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
                    <ParallaxLayer offset={0.99} speed={1} className="bg animate-gradient-y" />
                    <ParallaxLayer
                        offset={0.99}
                        speed={1}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            height: '100vh'
                        }}
                    >
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
                                <div className="md:hidden block ">
                                    <Image src={img1} width={150} height={320} layout="intrinsic" />
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.8} className="bg2 animate-gradient-y" />
                    <ParallaxLayer
                        offset={1}
                        speed={0.8}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            height: '100vh'
                        }}
                    >
                        <div className="flex flex-col md:flex-row w-screen md:px-36 md:pb-0 pb-48 ">

                            <div className="flex flex-col md:flex-row w-full md:space-x-10 md:w-fiftyp md:order-1 order-2">
                                <div className="md:mr-auto hidden md:block">
                                    <Image src={img2} width={231} height={496} layout="intrinsic" />
                                </div>
                                <div className="md:hidden block ">
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


        </div>
    )
}

export default Home


{/* <ParallaxLayer
                        offset={1.9}
                        speed={1}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                        }}
                    >
                        <div className=" w-screen">
                            <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 animate-gradient-x pb-16">
                                Join The Beta
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center ">
                                <input value={email} onChange={onchange} className=" md:w-thrityp  md:mb-0 mb-5 shadow appearance-none border rounded-full text-lg py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-black border-black " id="username" type="text" placeholder="Email"></input>
                                <a
                                    href="#"
                                    className="text-lg px-5 ml-5 py-2 border border-transparent rounded-3xl shadow-sm font-semibold text-white bg-gradient-to-r from-blue-700 to-purple-600 animate-gradient-x"
                                >
                                    Join
                                </a>
                            </div>
                        </div>
                    </ParallaxLayer> */}