import First from "./first"
import Footer from "./footer"
import Navbar from "./navbar"
import Second from "./second"
import Third from "./third"


function App() {
  return (
    <div className="font-main text-slate-950 bg-slate-100 w-full min-h-dvh">
      <Navbar />
      <div className="grid gap-y-12 max-w-7xl mx-auto py-14 px-6">
        <First />
        <Second />
        <Third />
      </div>
      <Footer />
    </div>
  )
}

export default App
