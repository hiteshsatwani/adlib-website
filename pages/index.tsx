import { ChangeEvent, useState } from "react"
import NavBar from "./components/Navbar"

const Home = () => {

    const [email, setemail] = useState<string>("")

    const onchange = (e: ChangeEvent): void => {
        const element = e.currentTarget as HTMLInputElement
        setemail(element.value)
    }
    
    return (
        <div className="max-h-screen ">
            <NavBar />
            <div className="text-center flex-cols pt-36 h-body space-y-3">
                <div className="font-bold text-white text-4xl md:text-6xl stretch ">
                    Music
                </div>
                <div className="font-bold text-white text-4xl md:text-6xl stretch">
                    Discovery
                </div>
                <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 animate-gradient-x stretch">
                    Redefined.
                </div>
                <div className="md:pt-36 pt-24">
                    <div className="font-bold text-white text-md md:text-xl stretch pb-5">
                        Join The Beta
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <input value={email} onChange={onchange} className=" md:w-thrityp w-eightyp md:mb-0 mb-5 shadow appearance-none border rounded-full text-xs py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black border-black" id="username" type="text" placeholder="Email"></input>
                        <a
                            href="#"
                            className="text-xs px-5 ml-5 py-2 border border-transparent rounded-3xl shadow-sm font-semibold text-white bg-gradient-to-r from-blue-700 to-purple-600 animate-gradient-x"
                        >
                            Join
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home