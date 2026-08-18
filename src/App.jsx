import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import './styles/global.css'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Strengths />
      </main>
      <Contact />
    </div>
  )
}