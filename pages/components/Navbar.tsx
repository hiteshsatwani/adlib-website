import React from 'react';
import { useSpring, animated } from 'react-spring'

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 500 })


    return (
        <animated.div className="flex justify-center items-center" style={props}>
            <div className="text-6xl pl-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 animate-gradient-x">
                a
            </div>
            <div className="ml-auto pr-5 pt-3">
                <a
                    href="https://expo.dev/@hiteshsatwani/AdLib"
                    className="whitespace-nowrap inline-flex px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-semibold text-black bg-white h-10"
                > 
                    Download Now
                </a>
            </div>
        </animated.div>
    );
};

export default NavBar