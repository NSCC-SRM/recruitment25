import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import Domains from './Components/Domains'
import FAQ from './Components/FAQ'
import Timeline from './Components/Timeline'
import Footer from './Components/Footer'
import WhoWeAre from './Components/WhoWeAre/WhoWeAre'

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Domains Section */}
      <section className="relative">
        <Domains />
      </section>

      {/* Who We Are Section */}
      <section className="relative">
        <WhoWeAre />
      </section>

      {/* Timeline Section */}
      <section className="relative">
        <Timeline />
      </section>

      {/* FAQ Section */}
      <section className="relative">
        <FAQ />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default App
