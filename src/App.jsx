import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Stars from './components/Stars'
import Petals from './components/Petals'
import BackgroundEffects from './components/BackgroundEffects'
import MusicToggle from './components/MusicToggle'
import EntryScreen from './components/EntryScreen'
import TimelineScreen from './components/TimelineScreen'
import WordsScreen from './components/WordsScreen'
import PhotoCarousel from './components/PhotoCarousel'
import PromiseScreen from './components/PromiseScreen'
import FinaleScreen from './components/FinaleScreen'

const screens = [
  EntryScreen,
  TimelineScreen,
  WordsScreen,
  PhotoCarousel,
  PromiseScreen,
  FinaleScreen,
]

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const goNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1)
    }
  }

  const CurrentComponent = screens[currentScreen]

  return (
    <div className="h-screen w-screen bg-night overflow-hidden relative">
      <Stars count={120} />
      <BackgroundEffects />
      {currentScreen >= 4 && <Petals count={20} />}
      <MusicToggle />

      <AnimatePresence mode="wait">
        <CurrentComponent key={currentScreen} onNext={goNext} />
      </AnimatePresence>
    </div>
  )
}
