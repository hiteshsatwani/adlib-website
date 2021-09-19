import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavBar = () => {
    const [open, setOpen] = React.useState(false);


    return (
        <div className="flex h-nav justify-center items-center">
            <div className="text-6xl pl-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 animate-gradient-x">
                a
            </div>
            <div className="ml-auto pr-5 pt-3">
                <a
                    href="https://play.google.com/store/apps/details?id=fun.adlib"
                    className="whitespace-nowrap inline-flex px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-semibold text-black bg-white h-10"
                >
                    Download Now
                </a>
            </div>
        </div>
    );
};

export default NavBar