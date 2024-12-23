import { useEffect, useRef, useState } from "react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

export default function Second() {
    const resort = [
        {name: 'Niseko', country: 'Japan'},
        {name: 'Chamonix', country: 'France'},
        {name: 'Zermatt', country: 'Switzerland'},
        {name: 'Niseko', country: 'Japan'},
        {name: 'Chamonix', country: 'France'},
        {name: 'Zermatt', country: 'Switzerland'},
        {name: 'Niseko', country: 'Japan'},
        {name: 'Chamonix', country: 'France'},
        {name: 'Zermatt', country: 'Switzerland'}
    ]

    const slider = useRef<HTMLDivElement>(null)
    const [left, setLeft] = useState<boolean>(false)
    const [right, setRight] = useState<boolean>(false)
    const [scroll, setScroll] = useState<number>(0)

    useEffect(() => {
        sliding()

        const calculate = () => {
            if (slider && slider.current) {
                setScroll(Math.floor((slider.current.scrollWidth+16)/9))
            }
        } 

        calculate()

        window.addEventListener('resize', calculate)

        return () => window.removeEventListener('resize', calculate)
    }, [])

    const scrolling = (arrow: string) => {
        if (slider && slider.current) {
            let value = slider.current.scrollLeft
            if (arrow === 'left') {
                value = scroll*Math.floor((slider.current.scrollLeft-1)/scroll)
            } else if (arrow === 'right') {
                value = scroll*(Math.floor(slider.current.scrollLeft/scroll)+1)
            }
            slider.current.scrollLeft = value
        }
    }
    
    const sliding = () => {
        if (slider && slider.current) {
            if (slider.current.scrollLeft > 0) {
                setLeft(true)
            } else {
                setLeft(false)
            }

            if (slider.current.scrollLeft < slider.current.scrollWidth-slider.current.clientWidth) {
                setRight(true)
            } else {
                setRight(false)
            }
        }
    }

    return (
        <div className="grid gap-y-4">
            <h1 className="text-balance text-2xl font-medium">Experience top-tier resorts worldwide</h1>
            <div className="grid items-center relative">
                <button onClick={() => scrolling('left')} className={`${left ? 'grid' : 'hidden'} 
                rounded-full p-2 bg-sky-600 absolute left-0 -translate-x-1/2 hover:bg-sky-500`}>
                    <PiCaretLeftBold className="text-slate-50" />
                </button>
                <button onClick={() => scrolling('right')} className={`${right ? 'grid' : 'hidden'}
                rounded-full p-2 bg-sky-600 absolute right-0 translate-x-1/2 hover:bg-sky-500`}>
                    <PiCaretRightBold className="text-slate-50" />
                </button>
                <div ref={slider} onScroll={() => sliding()} className="grid gap-x-4 overflow-x-auto w-full slider grid-flow-col
                auto-cols-[calc((100%-16px)/1.25)]
                sm:auto-cols-[calc((100%-(16px*2))/2.25)] 
                md:auto-cols-[calc((100%-(16px*3))/3.25)] 
                lg:auto-cols-[calc((100%-(16px*4))/4.25)]">
                    {resort.map((item, i) => 
                        <div key={i} className="bg-slate-50 rounded-xl border border-slate-300 overflow-hidden">
                            <img src={'/images/'+item.name.toLowerCase()+'.jpg'} alt={item.name} 
                            className="w-full aspect-video object-cover object-center" />
                            <div className="grid gap-y-1 p-4">
                                <h1 className="font-medium">{item.name}</h1>
                                <h1 className="text-sm text-slate-600">{item.country}</h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <h1 className="text-pretty text-sm text-sky-600 font-semibold cursor-pointer w-max">See all resorts</h1>
        </div>
    )
}