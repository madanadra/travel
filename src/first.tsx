export default function First() {
    return (
        <div className="grid sm:grid-cols-2 bg-slate-50 rounded-xl border border-slate-300 overflow-hidden">
            <img src="/skiers.jpg" alt="Skiers" className="sm:order-last w-full aspect-video sm:aspect-[9/16] md:aspect-square lg:aspect-video object-cover object-center" />
            <div className="py-5 px-6 grid content-center gap-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight">Plan the perfect winter trip</h1>
                <h1 className="text-pretty text-lg font-medium text-slate-600">Easily plan your ideal ski trip from home with the help of professionals.</h1>
                <button className="mt-2 text-sm font-semibold w-max bg-sky-600 hover:bg-sky-500 text-slate-50 rounded-full py-2 px-3">Book here</button>
            </div>
        </div>
    )
}