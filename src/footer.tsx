export default function Footer() {
    const menu = [
        {
            title: 'Resorts',
            list: ['Niseko', 'Chamonix', 'Zermatt', 'Niseko', 'Chamonix', 'Zermatt', 'Niseko', 'Chamonix', 'Zermatt']
        },
        {
            title: 'Company',
            list: ['About', 'Jobs', 'Partnerships', 'Newsroom', 'Advertising', 'Feedback', 'Help', 'Support']
        },
        {
            title: 'Policies',
            list: ['Privacy', 'Cookies', 'Terms of use', 'Accessibility', 'Content guidelines', 'Reporting content']
        },
        {
            title: 'Social',
            list: ['Instagram', 'X/Twitter', 'Facebook', 'TikTok', 'Pinterest']
        },
    ]
    return (
        <div className="bg-slate-200">
            <div className="max-w-7xl grid divide-y divide-slate-300 mx-auto py-14 px-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 pb-8">
                    <img src={import.meta.env.VITE_APP_BASE+'images/logo.png'} alt="Logo" className="col-span-2 sm:col-span-4 lg:col-span-1 w-12 aspect-square" />
                    {menu.map((item, i) => 
                        <div key={i} className="grid content-start gap-y-2">
                            <h1 className="font-medium">{item.title}</h1>
                            {item.list.map((item, i) => 
                                <h1 key={i} className="text-sm text-slate-600 cursor-pointer hover:text-sky-600 w-max">{item}</h1>
                            )}
                        </div>
                    )}
                </div>
                <h1 className="text-center pt-8">&copy; 2024 - Arctic Travels by Madanadra</h1>
            </div>
        </div>
    )
}