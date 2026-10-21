import { useEffect } from 'react'
import { useReveal } from './hooks/useReveal'
import Contact from './components/Contact'
import Engagement from './components/Engagement'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Process from './components/Process'
import Results from './components/Results'
import Services from './components/Services'
import Team from './components/Team'
import TrustBar from './components/TrustBar'

export default function App() {
  useReveal()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.setAttribute('data-reveal-done', 'true')
      })
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Results />
        <Process />
        <Team />
        <Engagement />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
