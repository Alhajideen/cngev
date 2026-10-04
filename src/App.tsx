import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { WhoWeServe } from './components/WhoWeServe'
import { VisionMission } from './components/VisionMission'
import { Ecosystem } from './components/Ecosystem'
import { Engagements } from './components/Engagements'
import { Partnerships } from './components/Partnerships'
import { Calculator } from './components/Calculator'
import { FAQ } from './components/FAQ'
import { LeadershipContact } from './components/LeadershipContact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <WhoWeServe />
        <VisionMission />
        <Ecosystem />
        <Engagements />
        <Partnerships />
        <Calculator />
        <FAQ />
        <LeadershipContact />
      </main>
      <Footer />
    </div>
  )
}

export default App
