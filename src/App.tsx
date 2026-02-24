import { Navbar } from './components/Website/Navbar'
import { Hero } from './components/Website/Hero'
import { Podcast } from './components/Website/Podcast'
import { MotionGraphics } from './components/Website/MotionGraphics'
import { Blog } from './components/Website/Blog'
import { Coaching } from './components/Website/Coaching'
import { Footer } from './components/Website/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Podcast />
        <MotionGraphics />
        <Blog />
        <Coaching />
      </main>
      <Footer />
    </div>
  )
}

export default App
