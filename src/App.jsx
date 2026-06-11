import { useState } from 'react'
import TopBar from './components/TopBar/TopBar'
import MobileMenu from './components/MobileMenu/MobileMenu'
import MainContent from './components/MainContent/MainContent'
import './App.css'

export default function App() {
  const [activeId, setActiveId] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleSelect(id) {
    setActiveId(id)
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      <TopBar
        activeId={activeId}
        onSelect={handleSelect}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
      />
      <MobileMenu isOpen={isMenuOpen} activeId={activeId} onSelect={handleSelect} />
      <MainContent activeId={activeId} />
    </div>
  )
}
