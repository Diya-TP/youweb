import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CreatorStats from './components/CreatorStats.jsx'
import Marquee from './components/Marquee.jsx'
import VideoGallery from './components/VideoGallery.jsx'
import Verdict from './components/Verdict.jsx'
import Collab from './components/Collab.jsx'
import Intro from './components/Intro.jsx'
import Channels from './components/Channels.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <Intro />
      <a className="skip" href="#videos">Skip to content</a>
      <div className="topline" />
      <Navbar />
      <main>
        <Hero />
        <CreatorStats />
        <Marquee />
        <VideoGallery />
        <Verdict />
        <Channels />
        <About />
        <Collab />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
