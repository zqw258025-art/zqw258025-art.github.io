import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Manifesto from './components/Manifesto'
import Works from './components/Works'
import DesignLab from './components/DesignLab'
import VisualArchive from './components/VisualArchive'
import Capabilities from './components/Capabilities'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import './styles/global.css'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Works />
        <DesignLab />
        <VisualArchive />
        <Capabilities />
        <AboutMe />
      </main>
      <Contact />
    </div>
  )
}
