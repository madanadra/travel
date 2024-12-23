export default function Third() {
    return (
        <div className="grid sm:grid-cols-2 bg-slate-50 rounded-xl border border-slate-300 overflow-hidden">
            <div className="sm:order-last py-5 px-6 grid content-center gap-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight">Have question?</h1>
                <h1 className="text-pretty text-lg font-medium text-slate-600">Ask questions to our specialized travel agents anytime and anywhere.</h1>
                <button className="mt-2 text-sm font-semibold w-max bg-sky-600 hover:bg-sky-500 text-slate-50 rounded-full py-2 px-3">Ask here</button>
            </div>
            <img src={import.meta.env.VITE_APP_BASE+'images/skier.jpg'} alt="Skier" className="w-full aspect-video sm:aspect-[9/16] md:aspect-square lg:aspect-video object-cover object-top" />
        </div>
    )
}