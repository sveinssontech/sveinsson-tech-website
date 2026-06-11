import { siteName } from '../../data/navItems'
import NavLinks from './NavLinks'
import ThemeToggle from './ThemeToggle'
import Hamburger from './Hamburger'
import './TopBar.css'

export default function TopBar({ activeId, onSelect, isMenuOpen, onToggleMenu }) {
  return (
    <header className="top-bar">
      <span className="top-bar-brand">{siteName}</span>

      <div className="top-bar-center">
        <NavLinks activeId={activeId} onSelect={onSelect} />
      </div>

      <div className="top-bar-actions">
        <ThemeToggle />
        <Hamburger isOpen={isMenuOpen} onClick={onToggleMenu} />
      </div>
    </header>
  )
}
