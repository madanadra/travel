import { PiGlobe } from "react-icons/pi"

export default function Navbar() {
    return (
        <div className="bg-slate-50 border-b border-slate-300">
            <div className="max-w-7xl flex items-center justify-between gap-x-6 mx-auto py-5 px-6">
                <div className="flex items-center gap-x-2 cursor-pointer">
                    <img src="/logo.png" alt="Logo" className="w-6 aspect-square" />
                    <h1 className="hidden sm:inline text-2xl font-semibold leading-none tracking-tighter">
                        arctic<span className="font-light">travels</span>
                    </h1>
                </div>
                <div className="flex items-center divide-x divide-slate-300">
                    <div className="pr-4">
                        <PiGlobe className="text-2xl cursor-pointer hover:text-sky-600" />
                    </div>
                    <div className="pl-4">
                        <h1 className="font-semibold cursor-pointer hover:text-sky-600">Log in</h1>
                    </div>
                </div>
            </div>
        </div>
    )
} 